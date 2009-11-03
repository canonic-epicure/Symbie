Class('Symbie.Router', {
    
    meta : 'Symbie.Router.Meta',
    
    has : {
        root                    : { is : 'rw', required : true },
        
        routePath               : null,
        
        chains                  : Joose.Array
    },
    
    
    after : {
        initialize : function () {
        }
    },
    
    
    methods : {
        
        activate : function (className, config) {
        },
        
        
        forward : function (actioName) {
        },
        
        
        getParams : function () {
        },
        
        
        getPath : function () {
        }
        
    }
    
})
