Class('Symbie.Context.Step', {
    
//    trait : 'JooseX.CPS',
    
    has : {
        context         : { required : true },
        
        childSteps      : Joose.Array
    },
    
    
    methods : {
        
        addChild : function (step) {
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
        
        
        getDependencies : function () {
            return []
        },
          
        
        instantiate : function (state) {
        },
        
        
        activate : function (state) {
            throw "Abstract method 'activate' was called on [" + this + "]"
        },

        
        finalize : function (state) {
        },
        
        
    }
    
})