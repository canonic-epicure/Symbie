Class('Symbie.Context', {
    
    trait : 'JooseX.CPS',
    
    use : [ 'Symbie.Context.Step.Slot', 'Symbie.Context.Step.Widget' ],
    
    
    has : {
        router                  : null,
        
        match                   : null,
        
        queryParameters         : Joose.Object,
        
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
        }
        
        
//        eachWidget : function (func, scope, args) {
//            Joose.A.each(this.elements, function (element) {
//                if (element instanceof Symbie.Dispatcher.PathElement.Widget) func.apply(scope || this, args ? [ element ].concat(args) : [ element ])
//            }, this)
//        }
        
        
    },
    
    
    continued : {
        
        methods : {
            
            run : function () {
                var via = this.getRoute().via
                
                via.call(this, this)
                
                this.prepareStepsMeta()
                this.prepareStepsInstance()
                this.activateSteps()
                this.finalizeSteps().now()
            },
            
            
            prepareStepsMeta : function () {
                this.CONTINUE()
            },
            
            
            prepareStepsInstance : function () {
                this.CONTINUE()
            },
            
            
            activateSteps : function () {
                this.CONTINUE()
            },
            
    
            finalizeSteps : function () {
                this.CONTINUE()
            }
            
        }
    }
    
})