Role('Symbie.Meta.Application', {
    
    before : {
        
        prepareProps : function (extend) {
            if (extend.plugins) {
                
                
                delete extend.plugins
            }
            
            if (extend.controllers) {
                
                
                delete extend.controllers
            }
        }
    },
    
    
    builder : {
        
        methods : {
            
        }
    }
})