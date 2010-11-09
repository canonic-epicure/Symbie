Class('Symbie.Controller', {
    
    traits      : [ 
        'JooseX.CPS',
        
        'Symbie.Meta.Controller'
    ],
    

    use         : [ 
        'Symbie.Context', 
        'Symbie.Meta.Route.Match' 
    ],
    
    
    does    : [
        'JooseX.Observable'
    ],
    
    
    has : {
        prefix                  : null,
        prefixCache             : null,      
        
        parent                  : { required : true },
        
        // will be filled by meta
        controllers             : Joose.I.Object,
        
        contextClass            : Joose.I.FutureClass('Symbie.Context')
    },
    
    
    methods : {
        
        getParents : function (res) {
            res.push(self)
            
            if (this.parent) this.parent.getParents(res)
        },
        
        
        getPrefix : function () {
            if (this.prefixCache) return this.prefixCache
            
            var ownPrefix   = this.prefix || this.meta.prefix || this.buildOwnPrefix()
            
            var prefix = this.parent && this.parent.getPrefix() || ''
            
            return this.prefixCache = prefix + ownPrefix
        },
        
        
        buildOwnPrefix : function () {
            var parent  = this.parent
            
            if (!parent) return '/'
            
            // XXX
        },
        
        
        getOwnRoute : function (name) {
            return this.meta.getRoute(name)
        },
        
        
        getOwnRoutes : function () {
            return this.meta.getRoutes()
        },
        
        
        forEachController : function (func, scope) {
            return Joose.O.each(this.controllers, func, scope)
        },
        
        
        forEachRoute : function (func, scope) {
            var me      = this
            var self    = scope || this
            
            if (this.getOwnRoutes.each(function (route, name) {
                
                return func.call(self, route, name, me)
                
            }) === false) return false
            
            
            return this.forEachController(function (controller) {
                
                return controller.forEachRoute(func, scope)
            })
        },
        
        
        getMatchesPopulation : function (maxLength) {
            var matches = []
            
            this.forEachRoute().each(function (route, controller) {
                
                var tokens  = route.getTokens(controller.getPrefix())
                
                if (tokens.length <= maxLength) matches.push(new Symbie.Meta.Route.Match({
                    
                    tokens          : tokens,
                    route           : route    
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
        
        
        findMatches : function (path) {
            var tokens = path.split('/')
            
            var matches = this.getMatchesPopulation(tokens.length)
            
            Joose.A.each(tokens, function (token) {
                matches = this.filterMatches(token, matches)
            }, this)
            

            return matches
        },
        
        
        findMatch : function (path) {
            var matches = this.findMatches(path)
            
            if (!matches.length) throw "Can't find route for the path [" + path + "]"
            
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
        },
        
        
        ACTIVATE : function () {
        },
        
        
        FINALIZE : function () {
        }
    },
    
    
    continued : {
    
        methods : {

            PRE    : function () {
                this.CONTINUE()
            },
            
            
            BEGIN   : function () {
                this.CONTINUE()
            },
            
            
            END     : function () {
                this.CONTINUE()
            },
            
            
            dispatch : function (params) {
                if (typeof params == 'string') params = { path : params }
                
                //extracting trailing parameteres after '?'
                var res = /([^\?]*)(?:\?(.*))?/.exec(params.path)
                
                var path    = res[1]
                var query   = this.parseQuery(res[2] || '')
                
                try {
                    var match = this.findMatch(path)
                } catch (e) {
                    
                    if (this.fireEvent('dispatchException', this, e) !== false) 
                        throw e
                    else {
                        this.CONTINUE()
                        
                        return
                    }
                }
                
                var context = new this.contextClass({
                    controller          : this,
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
            },
            
            
            setup : function () {
                
                var me = this
                
                Joose.O.each(this.controllers, function (controller) {
                    
                    this.AND(function () {
                        controller.setup().now()
                    })
                })
                
                this.andThen(function () {
                    
                    this.fireEvent('ready', this)
                })
            }
        }
    }
})
