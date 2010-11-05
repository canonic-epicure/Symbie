Role('Symbie.Router', {
    
    traits      : [ 
        'JooseX.CPS',
        'Symbie.Meta.Router'
    ],
    
    use         : [ 
        'Symbie.Context', 
        'Symbie.Meta.Route.Match' 
    ],
    
    
    has : {
        contextClass            : Joose.I.FutureClass('Symbie.Context')
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
        },
        
        
        parseQuery : function (queryStr) {
            var obj     = {}
            
            Joose.A.each(queryStr.split('&'), function (pair) {
                if (!pair) return
                
                var res = /([^=]*)(?:=(.*))?/.exec(pair)
                
                var name    = decodeURIComponent(res[1])
                var value   = decodeURIComponent(res[2]) || ''
                
                var already = obj[ name ]
                
                obj[ name ] = already != null ? [].concat(already, value) : value
            })
            
            return obj
        }
    },
    
    
    continued : {
    
        methods : {

            dispatch : function (params) {
                if (typeof params == 'string') params = { path : params }
                
                //extracting trailing parameteres after '?'
                var res = /([^\?]*)(?:\?(.*))?/.exec(params.path)
                
                var path    = res[1]
                var query   = this.parseQuery(res[2] || '')
                
                try {
                    var match = this.findMatch(routePath)
                } catch (e) {
                    
                    if (this.fireEvent('dispatchException', this, e) !== false) 
                        throw e
                    else {
                        this.CONTINUE()
                        
                        return
                    }
                }
                
                var context = new this.contextClass({
                    router              : this,
                    match               : match,
                    
                    query               : query,
                    path                : path
                })
                
                context.run().CATCH(function (e) {
                    
                    if (this.fireEvent('dispatchException', this, e) !== false) 
                        this.THROW(e)
                    else
                        this.CONTINUE()
                    
                }, this).now()
            }
            
        }
    },
    
    
    routes  : {
        
        '/*' : function (context) {
            throw "Abstract route [" + context.getRoute().name + "] reached" 
        }
    }
})
