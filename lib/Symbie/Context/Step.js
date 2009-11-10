Class('Symbie.Context.Step', {
    
    trait : 'JooseX.CPS',
    
    has : {
        context         : null,
        
        parent          : null,
        childSteps      : Joose.Array
    },
    
    
    methods : {
        
        addChild : function (step) {
            step.parent     = this
            step.context    = this.context
            
            this.childSteps.push(step)
        },
        
        
        each : function (func, scope) {
            Joose.A.each(this.childSteps, func, scope || this)
            
            Joose.A.each(this.childSteps, function (step) {
                step.each(func, scope)
            })
        },
        
        
        eachR : function (func, scope) {
            var childSteps = this.childSteps
            
            for (var i = childSteps.length - 1; i >= 0; i--) 
                childSteps[i].eachR(func, scope)
                
            for (var i = childSteps.length - 1; i >= 0; i--) 
                func.call(scope || this, childSteps[i], i)
        },
        
        
        getUsedClasses : function () {
            return []
        },
          
        
        prepareStepSync : function () {
        },
        
        
        activateStep : function () {
            throw "Abstract method 'activateStep' was called on [" + this + "]"
        },

        
        finalizeStep : function () {
        }
    },
    
    
    continued : {
        
        methods : {
            
            prepareStepAsync : function () {
                this.CONTINUE()
            }
        }
    }
    
})