Class('Symbie.Context', {
    
    trait : 'JooseX.CPS',
    
    use : [ 'Symbie.Context.Step.Slot', 'Symbie.Context.Step.Widget', 'Symbie.Context.Step.Root' ],
    
    
    has : {
        router                  : null,
        
        match                   : null,
        
        queryParameters         : { is : 'rw', init : Joose.Object },
        
        stepsRoot               : function () {
            return new Symbie.Context.Step.Root({
                context : this
            })
        }
    },
    
    
    methods : {
        
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
        
        
        getRoot : function () {
            return this.stepsRoot
        },
        
        
        each : function (func, scope) {
            Joose.A.each(this.steps, func, scope)
        },
        
        
        eachR : function (func, scope) {
            var steps = this.steps
            
            for (var i = steps.length - 1; i >= 0; i--) func.call(scope || this, steps[i], i)
        },
        
        
        instantiate : function () {
            var instantiationState = {
                context : this
            }
            
            this.each(function (step) {
                instantiationState = step.instantiate(instantiationState)
            })
        },
        
        
        renderSteps : function () {
            var activationState = {}
            
            this.each(function (step) {
                activationState = step.activate(activationState)
            })
        },
        

        finalizeSteps : function () {
            var finalizationState = {}
            
            this.eachR(function (step) {
                finalizationState = step.finalize(finalizationState)
            })
        }
    },
    
    
    continued : {
        
        methods : {
            
            run : function () {
                var via = this.getRoute().via
                
                via.call(this, this)
                
                this.prepareDependencies()
                    
                this.prepare()
                
                this.THEN(function () {
                    
                    this.renderSteps()
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
                this.instantiate()
                
                this.CONTINUE()
            }
            
            
//XXX add 'AND' to JooseX.CPS            
//            initAsync : function () {
//                Joose.A.each(this.steps, function (step) {
//                    this.AND(step.intiAsync())
//                }, this)
//                
//                this.now()
//            }
            
        }
    }
    
})