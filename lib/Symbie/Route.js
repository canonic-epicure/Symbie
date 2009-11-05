Class('Symbie.Route', {
    
    trait : 'JooseX.CPS',
    
    has : {
        root                    : { is : 'rw', required : true },
        
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
        
    }
    
})
