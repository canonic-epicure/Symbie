Class('Symbie.Router', {
    
    traits : [ 'Symbie.Meta.Router', 'JooseX.CPS' ],
    
    does : [ 'Symbie.Router.Default' ],
    
    use : [ 'Symbie.Route' ],
    
    
    
    has : {
        root                    : { is : 'rw', required : true },
        
        routeClass              : Joose.FutureClass('Symbie.Route')
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
