Class('Symbie.Context.Step', {
    
    has : {
        context         : { required : true }
    },
    
    
    methods : {
        
        getDependencies : function () {
            return []
        },
          
        
        prepare : function () {
        },
        
        
        process : function () {
            throw "Abstract method 'process' was called on [" + this + "]"
        },

        
        finalize : function () {
        }
        
    }
    
})