Class('Symbie.Route', {
    
    trait : 'JooseX.CPS',
    
    has : {
        root                    : { is : 'rw', required : true },
        
        router                  : null,
        routeName               : null,
        
        path                    : null,
        
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
    },
    
    
    continued : {
        
        methods : {
            
            run : function () {
                
            }
            
        }
    }
    
})
