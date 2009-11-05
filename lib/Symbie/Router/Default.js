Role('Symbie.Router.Default', {
    
    trait : 'Symbie.Meta.Router',
    
    
    routes : {
        
        'default' : {
            
            mapTo : '/*',
                
            via : function (route) {
                throw "Route [" + route.path + "] not found" 
            }
        }
        
    }
       
})
