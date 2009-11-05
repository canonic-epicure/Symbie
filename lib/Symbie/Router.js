Class('Symbie.Router', {
    
    traits : [ 'Symbie.Router.Meta', 'JooseX.CPS' ],
    
    does : [ 'Symbie.Router.Default' ],
    
    has : {
        root                    : { is : 'rw', required : true }
    },
    
    
    after : {
        initialize : function () {
        }
    },
    
    
    continued : {
    
        methods : {
            
            dispatch : function (routePath) {
            }
            
        }
    }
    
})
