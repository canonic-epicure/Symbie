Class('Symbie.Router', {
    
    traits : [ 'Symbie.Meta.Router', 'JooseX.CPS' ],
    
    does : [ 'Symbie.Router.Default' ],
    
    use : [ 'Symbie.Context' ],
    
    
    
    has : {
        root                    : { is : 'rw', required : true },
        
        routeClass              : Joose.FutureClass('Symbie.Context')
    },
    
    
    after : {
        initialize : function () {
        }
    },
    
    
    methods : {
        
        getRoutes : function () {
            return this.meta.stem.properties.routes
        },
        
        
        getContextsPopulation : function () {
            var contexts = []
            
            this.getRoutes().each(function (route, name) {
                
                contexts.push(new Symbie.Context({
                    router  : this,
                    
                    route   : route    
                }))
            }, this)
            
            return contexts
        },
        
        
        createContext : function (routePath) {
            var tokens = routePath.split('/')
            
            var contexts = this.getContextsPopulation()
            
            Joose.A.each(tokens, function (token) {
                contexts = this.filterContexts(token, contexts)
            }, this)
            
            
            var fullPathConsumed = [] 
            
            Joose.A.each(contexts, function (context) {
                
                if (context.matchedFullPath()) fullPathConsumed.push(context)
            })
            
            contexts = fullPathConsumed
            
            if (!contexts.length) throw "Can't create the context for the path [" + routePath + "]"
            
            
            contexts.sort(function (contextA, contextB) {
                return contextB.getSpecificity() - contextA.getSpecificity()
            })
                
            if (contexts.length > 1 && contexts[0].getSpecificity() == contexts[1].getSpecificity()) throw "Ambiguous route match"
                
            return contexts[0]
        },
        
        
        filterContexts : function (token, contexts) {
            
            var filtered = []
            
            Joose.A.each(contexts, function (context) {
                
                var survived = context.consumeToken(token)
                
                if (survived) filtered.push(context)
            })
            
            return filtered
        }
        
    },
    
    
    continued : {
    
        methods : {
            
            dispatch : function (routePath) {
                //extracting trailing parameteres after ?
                var res = /([^\?]*)(?:\?(.*))?/.exec(routePath)
                
                routePath   = res[1]
                var params  = res[2]
                
                var context = this.createContext(routePath)
                
                
                
            }
            
        }
    }
    
    
})
