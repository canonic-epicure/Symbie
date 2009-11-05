Class('Symbie.Router', {
    
    trait : 'Symbie.Router.Meta',
    
    has : {
        root                    : { is : 'rw', required : true }
    },
    
    
    after : {
        initialize : function () {
        }
    },
    
    
    methods : {
        
        dispatch : function (routePath) {
        }
        
    }
    
})
