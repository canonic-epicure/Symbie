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
        prefix                  : { is : 'rw' },
        fullPrefix              : { is : 'rw' },
        
        parent                  : { required : true },
        
        // will be filled by meta
        controllers             : Joose.I.Object,
        
        contextClass            : Joose.I.FutureClass('Symbie.Context')
    },
    
    
    methods : {
        
        getParents : function (res) {
            res.unshift(this)
            
            if (this.parent) this.parent.getParents(res)
        },
        
        
        getRoot : function () {
            return this.parent && this.parent.getRoot() || this
        },
        
        
        // default value for prefix is being taken from meta
        // leading `./` is being stripped
        // missing trailing `/` is being added
        getPrefix : function () {
            var prefix      = this.prefix || this.meta.prefix
            
            return prefix.replace(/^\.\//, '').replace(/\/?$/, '/')
        },
        
        
        getFullPrefix : function () {
            var ownPrefix   = this.getPrefix()
            
            if (/^\//.test(ownPrefix)) return ownPrefix
            
            var prefix      = this.parent && this.parent.getFullPrefix() || '/'
            
            return prefix + ownPrefix
        },
        
        
        getOwnRoute : function (name) {
            return this.meta.getRoute(name)
        },
        
        
        getOwnRoutes : function () {
            return this.meta.getRoutes()
        },
        
        
        forEachController : function (func, scope) {
            return Joose.O.each(this.controllers, func, scope || this)
        },
        
        
        forEachRoute : function (func, scope) {
            var me      = this
            var self    = scope || this
            
            if (this.getOwnRoutes().each(function (route, name) {
                
                return func.call(self, route, name, me)
                
            }) === false) return false
            
            
            return this.forEachController(function (controller) {
                
                return controller.forEachRoute(func, scope)
            })
        },
        
        
        
        getMatchesPopulation : function (maxLength) {
            var matches = []
            
            this.forEachRoute(function (route, name, controller) {
                
                var tokens  = route.getTokensFor(controller.getFullPrefix())
                
                // add routes which has not much than `maxLength` tokens to population
                // exception is the index routes, which are allowed to have an extra token at the end
                if (tokens.length <= maxLength || tokens.length == maxLength + 1 && route.isIndex()) matches.push(new Symbie.Meta.Route.Match({
                    
                    controller      : controller,
                    tokens          : tokens,
                    route           : route    
                }))
                
            }, this)
            
            return matches
        },
        
        
        filterMatches : function (token, matches, index, length) {
            
            var filtered = []
            
            Joose.A.each(matches, function (match) {
                
                var survived = match.consumeToken(token, index, length)
                
                if (survived) filtered.push(match)
            })
            
            return filtered
        },
        
        
        findMatches : function (path) {
            var tokens = path.split('/')
            
            var matches = this.getMatchesPopulation(tokens.length)
            var length  = tokens.length
            
            Joose.A.each(tokens, function (token, index) {
                
                matches = this.filterMatches(token, matches, index, length)
            }, this)
            

            return matches
        },
        
        
        findMatch : function (path) {
            var matches     = this.findMatches(path)
            var length      = path.split('/').length
            
            if (!matches.length) throw "Can't find route for the path [" + path + "]"
            
            matches.sort(function (matchA, matchB) {
                return matchB.compareBySpecificity(matchA, length)
            })
                
            if (matches.length > 1 && matches[0].compareBySpecificity(matches[1], length) == 0) throw "Ambiguous route match"
                
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

            PRE     : function () {
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
                    dispatchParams      : params,
                    dispatchedFrom      : this,
                    
                    controller          : match.controller,
                    match               : match,
                    
                    query               : query,
                    path                : path
                })
                
                context.run().CATCH(function (e) {
                    
                    if (this.fireEvent('dispatchException', this, e) !== false) 
                        throw e
                    else
                        this.CONTINUE(context)
                    
                }, this).now()
            },
            
            
            setup : function () {
                
                this.forEachController(function (controller) {
                    
                    this.AND(function () {
                        controller.setup().now()
                    })
                })
                
                this.andTHEN(function () {
                    
                    this.fireEvent('ready', this)
                    
                    this.CONTINUE()
                })
            }
        }
    }
})
