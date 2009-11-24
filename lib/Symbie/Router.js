Class('Symbie.Router', {
    
    isa     : Ext.util.Observable,
    
    meta    : JooseX.Bridge.Ext,

    
    traits      : [ 'Symbie.Meta.Router', 'JooseX.CPS' ],
    
    does        : [ 'Symbie.Router.Default' ],
    
    use         : [ 'Symbie.Context', 'Symbie.Meta.Route.Match' ],
    
    
    has : {
        root                    : { is : 'rw', required : true },
        
        contextClass            : Joose.FutureClass('Symbie.Context'),
        matchClass              : Joose.FutureClass('Symbie.Meta.Route.Match')
    },
    
    
    after : {
        initialize : function () {
            this.addEvents('dispatchException')
        }
    },
    
    
    methods : {
        
        getRoute : function (name) {
            return this.meta.getRoute(name)
        },
        
        
        getRoutes : function () {
            return this.meta.stem.properties.routes
        },
        
        
        getMatchesPopulation : function (maxLength) {
            var matches = []
            
            this.getRoutes().each(function (route) {
                
                var length = route.tokens.length
                
                if (0 < length && length <= maxLength) matches.push(new this.matchClass({
                    route   : route    
                }))
                
            }, this)
            
            return matches
        },
        
        
        filterMatches : function (token, matches) {
            
            var filtered = []
            
            Joose.A.each(matches, function (match) {
                
                var survived = match.consumeToken(token)
                
                if (survived) filtered.push(match)
            })
            
            return filtered
        },
        
        
        findMatches : function (routePath) {
            var tokens = routePath.split('/')
            
            var matches = this.getMatchesPopulation(tokens.length)
            
            Joose.A.each(tokens, function (token) {
                matches = this.filterMatches(token, matches)
            }, this)
            

            return matches
        },
        
        
        findMatch : function (routePath) {
            var matches = this.findMatches(routePath)
            
            if (!matches.length) throw "Can't find route for the path [" + routePath + "]"
            
            matches.sort(function (matchA, matchB) {
                return matchB.compareBySpecificity(matchA)
            })
                
            if (matches.length > 1 && matches[0].compareBySpecificity(matches[1]) == 0) throw "Ambiguous route match"
                
            return matches[0]
        }
        
    },
    
    
    continued : {
    
        methods : {

            
            launch : function (initialPath) {
                
            },
            
            
            dispatch : function (params) {
                var routePath
                
                if (typeof params == 'string')
                    routePath = params
                else
                    routePath = params.routePath
                
                //extracting trailing parameteres after ?
                var res = /([^\?]*)(?:\?(.*))?/.exec(routePath)
                
                routePath   = res[1]
                var params  = Ext.urlDecode(res[2] || '')
                delete params['']
                
                var routeMatch = this.findMatch(routePath)
                
                var context = new this.contextClass({
                    router              : this,
                    match               : routeMatch,
                    
                    queryParameters     : params,
                    routePath           : routePath
                })
                
                var me = this
                
                context.attachScope(this).run().CATCH(function (exception) {
                    if (me.fireEvent('dispatchException', me, exception) !== false) this.THROW(exception)
                }).now()
            }
            
        }
    }
    
    
})
