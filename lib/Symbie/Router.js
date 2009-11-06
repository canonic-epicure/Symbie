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
    
    
    methods : {
        
        getRoutes : function () {
            return this.meta.stem.properties.routes
        },
        
        
        findRoute : function (routePath) {
            var tokens = routePath.split('/')
            
            Joose.A.each(tokens, function (token, index) {
                
            }, this)
            
        },
        
        
        findMatches : function (token, index, matches) {
            matches = matches || []
            
            this.getRoutes().each(function (route, name) {
                
            })
        }
        
    },
    
    
    continued : {
    
        methods : {
            
            dispatch : function (routePath) {
                //extracting trailing parameteres after ?
                var res = /([^\?]*)(?:\?(.*))?/.exec(routePath)
                
                routePath   = res[1]
                var params  = res[2]
                
                var route = this.findRoute(routePath)
                
                
                
            }
            
        }
    }
    
    
})
