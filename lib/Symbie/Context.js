Class('Symbie.Context', {
    
    trait : 'JooseX.CPS',
    
    use : [ 'Symbie.Context.Step.Slot', 'Symbie.Context.Step.Widget' ],
    
    
    has : {
        router                  : null,
        
        match                   : null,
        
        queryParameters         : { is : 'rw', init : Joose.Object },
        
        steps                   : Joose.Array
    },
    
    
    methods : {
        
        activate : function (className, config) {
            
            if (typeof className != 'string') {
                config = className
                
                className = config.xtype || config.meta
                
                delete config.xtype
                delete config.meta
            }
            
            config = config || {}
            
            this.steps.push(new Symbie.Context.Step.Widget({
                context         : this,
                className       : className,
                config          : config
            }))
        },
        
        
        slot : function (slotName) {
            this.steps.push(new Symbie.Context.Step.Slot({
                context         : this,
                slotName        : slotName
            }))
        },
        
        
        forward : function (actioName) {
        },
        
        
        getParams : function () {
            return this.match.parameteres
        },
        
        
        getPath : function () {
            return this.match.path
        },
        
        
        getRoute : function () {
            return this.match.route
        },
        
        
        each : function (func, scope) {
            Joose.A.each(this.steps, func, scope)
        },
        
        
//        eachR : function (func, scope) {
//            var steps = this.steps
//            
//            for (var i = steps.length - 1; i >= 0; i--) func.call(scope || this, steps[i], i)
//        },
//        
//        
        activateSteps : function () {
        },
        

        finalizeSteps : function () {
        }
    },
    
    
    continued : {
        
        methods : {
            
            run : function () {
                var via = this.getRoute().via
                
                via.call(this, this)
                
                this.prepareDependencies()
                
                this.prepare()
                
                var me = this
                
                this.THEN(function () {
                    
                    this.activateSteps()
                    this.finalizeSteps()
                    
                    this.CONTINUE()
                    
                }).NOW()
            },
            
            
            prepareDependencies : function () {
                
                var dependencies = []
                
                this.each(function (step) {
                    dependencies.push.apply(dependencies, step.getDependencies())
                })
                
                use(dependencies, this.getCONTINUE())
            },
            
            
            prepare : function () {
                
                this.CONTINUE()
                
//                Joose.A.each(this.steps, function (step) {
//
//                    this.AND(step.prepareInstance())
//                    
//                }, this)
//                
//                this.now()
            }
        }
    }
    
})