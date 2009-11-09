Class('Symbie.Context.Step', {
    
    has : {
        context         : { required : true }
    },
    
    
    methods : {
        
        process : function () {
            throw "Abstract method 'process' was called on [" + this + "]"
        }
        
        
        
        
    }
    
})