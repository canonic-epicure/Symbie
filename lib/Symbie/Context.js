Class('Symbie.Context', {
    
    trait : 'JooseX.CPS',
    
    use : [ 'Symbie.Context.Step.Slot', 'Symbie.Context.Step.Widget', 'Symbie.Context.Step.Root' ],
    
    
    has : {
        router                  : null,
        routePath               : null,
        
        match                   : null,
        
        queryParameters         : { is : 'rw', init : Joose.I.Object },
        
        stepsRoot               : function () {
            return new Symbie.Context.Step.Root({
                context : this
            })
        },
        
        marks                   : Joose.I.Object,
        
        redirected              : false
    },
    
    
    methods : {
        
        saveMark : function (name, step) {
            var marks = this.marks
            
            if (marks[name]) throw "Mark [" + name + "] is already used"
            
            marks[name] = step
        },
        
        
        getMark : function (name) {
            return this.marks[name]
        },
        
        
        getParameters : function () {
            return this.match.parameters
        },
        
        
        getParams : function () {
            return this.getParameters()
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
            this.stepsRoot.each(func, scope)
        },
        
        
        eachR : function (func, scope) {
            this.stepsRoot.eachR(func, scope)
        },
        
        
        prepareStepsSync : function () {
            this.each(function (step) {
                step.prepareStepSync()
            })
        },
        
        
        activateSteps : function () {
            this.each(function (step) {
                step.activateStep()
            })
        },
        

        finalizeSteps : function () {
            this.eachR(function (step) {
                step.finalizeStep()
            })
        },
        
        
        redirectTo : function (path) {
            this.redirected = true
            
            this.router.dispatch({
                routePath       : path,
                prevContext     : this
            }).now()
        }
    },
    
    
    continued : {
        
        methods : {
            
            run : function () {
                this.stepsRoot.collectFromRoute(this.getRoute())
                
                if (this.redirected) return
                
                
                this.prepareClasses()
                    
                this.prepareSteps()
                
                this.THEN(function () {
                    
                    this.activateSteps()
                    this.finalizeSteps()
                    
                    this.CONTINUE(this)
                }).NOW()
            },
            
            
            prepareClasses : function () {
                var classes = []
                
                this.each(function (step) {
                    classes.push.apply(classes, step.getUsedClasses())
                })
                
                use(classes, this.getCONTINUE())
            },
            
            
            prepareSteps : function () {
                this.prepareStepsSync()
                
                var CONT = this.CONT
                
                this.each(function (step) {
                    
                    CONT.AND(function () {
                        step.prepareStepAsync().now()
                    })
                })
                
                this.NOW()
            }
        }
    }
    
})