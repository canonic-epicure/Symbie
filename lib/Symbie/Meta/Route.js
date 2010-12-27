Class('Symbie.Meta.Route', {
    
    meta    : Joose.Meta.Class,
    
    isa     : Joose.Managed.Property,
        
    trait   : 'JooseX.CPS',
    
    use     : [ 
        'Symbie.Meta.Route.Token.String', 
        'Symbie.Meta.Route.Token.Root', 
        'Symbie.Meta.Route.Token.Parameter', 
        'Symbie.Meta.Route.Token.WildCard' 
    ],
    
    
    has : {
        action                  : { required : true },
        
        map                     : null,
        
        where                   : null,
        
        
        
        tokens                  : null,
        use                     : null,
        ready                   : false
    },
    
    
    after : {
        
        initialize : function () {
            var map     = this.map  = this.map != null ? this.map : this.name
            
            this.tokens = this.stringToTokens(map)
        }
    },
    
    
    methods : {
        
        prepareApply : function (target) {
        },
        
        
        apply : function (target) {
        },
        
        
        unapply : function (from) {
        },
        
        
        stringToTokens : function (path) {
            var me          = this
            var tokens      = []
            var segments    = path.replace(/\/+/, '/').split('/')
            
            Joose.A.each(segments, function (token, index) {
                
                if (token == '.' && !index) return

                tokens.push(me.createToken(token, index, segments.length))
            })
            
            return tokens
        },
        
        
        isIndex : function () {
            var lastToken = this.tokens[ this.tokens.length - 1 ]
            
            return lastToken instanceof Symbie.Meta.Route.Token.String && lastToken.token == ''
        },
        
        
        // route can be local, so this method should return tokens for passed prefix, which forms a absolute path
        // prefix will also have trailing `/` symbol, so remove it to avoid extra token
        getTokensFor : function (prefix) {
            if (this.tokens[0] instanceof Symbie.Meta.Route.Token.Root) return [].concat(this.tokens)
            
            return this.stringToTokens(prefix.replace(/\/$/, '')).concat(this.tokens)
        },
        
        
        createToken : function (token, index, length) {
            if (token == '' && !index && length > 1)    return new Symbie.Meta.Route.Token.Root()
            
            if (/^\*/.test(token))                      return new Symbie.Meta.Route.Token.WildCard()
            
            if (/^:/.test(token)) {
                var name = /^:(.*)/.exec(token)[1]
                
                var regex = this.where && this.where[name] || /(.*)/
                
                return new Symbie.Meta.Route.Token.Parameter({ token : token, name : name, regex : regex })
            }
            
            return new Symbie.Meta.Route.Token.String({ token : token })
        },
        
        
        asString : function (parameters) {
            var res = []
            
            Joose.A.each(this.tokens, function (token, index) {
                var str = token.asString(parameters)
                
                if (str != null) res.push(str)
            })
            
            return res.join('/')
        },
        
        
        doExecute : function (context) {
            var args = [ context ]
            
            Joose.A.each(context.getParamsOrder(), function (paramName) {
                
                args.push(context.getParam(paramName))
            })
            
            return this.execute.apply(this, args)
        }
    },
    
    
    continued : {
        
        methods : {
            
            prepare : function () {
                var CONTINUE = this.getCONTINUE()
                
                var me      = this
                var deps    = this.use
                
                if (deps)
                    use(deps, function () {
                        
                        me.ready = true
                        
                        CONTINUE()
                    })
                else {
                    me.ready = true
                    
                    CONTINUE()
                }
            },
            
            
            execute : function (context) {
                if (!this.ready) this.prepare()   // async
                
                this.TRY(this.action, context.controller, arguments).now()
            }
        }
    }
})
