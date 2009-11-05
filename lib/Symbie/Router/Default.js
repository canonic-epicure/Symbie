Role('Symbie.Router.Default', {
    
    trait : 'Symbie.Router.Meta',
    
    
    routes : {
        
        'default' : {
            
            mapTo : '/*',
                
            via : function (route) {
                throw "Route [" + route.path + "] not found" 
            }
        }
        
    }
       
})
