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
        map                     : null,
        
        where                   : null,
        
        action                  : null,
        
        tokens                  : null,
        
        use                     : null,
        
        ready                   : false
    },
    
    
    after : {
        
        initialize : function () {
            var map     = this.map  = this.map || this.name
            
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
            var me      = this
            var tokens  = []
            
            Joose.A.each(path.split('/'), function (token, index) {
                
                if (token == '.' && !index) return

                tokens.push(me.createToken(token, index))
            })
            
            return tokens
        },
        
        
        getTokens : function (prefix) {
            if (this.tokens[0] instanceof Symbie.Meta.Route.Token.Root) return this.tokens
            
            return me.stringToTokens(prefix).concat(this.tokens)
        },
        
        
        createToken : function (token, index) {
            if (token == '' && !index)      return new Symbie.Meta.Route.Token.Root()
            
            if (/^\*/.test(token))          return new Symbie.Meta.Route.Token.WildCard()
            
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
        }
    },
    
    
    continued : {
        
        methods : {
            
            prepare : function () {
                var CONTINUE = this.getCONTINUE()
                
                var me      = this
                var use     = this.use
                
                if (use)
                    use(use, function () {
                        
                        me.ready = true
                        
                        CONTINUE()
                    })
                else {
                    me.ready = true
                    
                    CONTINUE()
                }
            },
            
            
            execute : function () {
            }
        }
    }
})
