Class('Symbie.Dispatcher.PathElement', {
    
    have : {
        path : null,
        
        token : null,
        
        params : null
    },
    
    
    methods : {
        
        pickupComponent : function () {
            throw "Abstract method 'pickupComponent' was called"
        }
        
    }
    
})


