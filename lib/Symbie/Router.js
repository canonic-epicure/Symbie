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
        
        
        getRoutesArray : function () {
            var array = []
            
            this.getRoutes().each(function (value, name) {
                array.push(value)
            })
            
            return array
        },
        
        
        findRoute : function (routePath) {
            var tokens = routePath.split('/')
            
            var matches = this.getRoutesArray()
            
            for (var i = 0; i < tokens.length; i++) {
                var token = tokens[i] 
                
                var furtherMatches = this.findMatches(token, i, matches)
                
                if (!furtherMatches.length) {
                    if (!matches.length || index < tokens.length - 1) throw "Can't find route for the path [" + routePath + "]" 
                    
                    if (matches.length > 1) throw "Ambiguous route match"
                    
                    return matches[0]
                }
                
                matches = furtherMatches
            }
            
            throw "Can't find route for the path [" + routePath + "]"
        },
        
        
        findMatches : function (token, index, among) {
            var matches = []
            
            Joose.A.each(among, function (route) {
                if (route.matchTokenAt(token, index)) matches.push(route)
            })
            
            matches.sort(function (routeA, routeB) {
                return routeA.getSpecificityAt(index) - routeB.getSpecificityAt(index)
            })
            
            return matches
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
