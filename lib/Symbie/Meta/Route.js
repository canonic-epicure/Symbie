Class('Symbie.Meta.Route', {
    
    meta : Joose.Meta.Class,
    
    isa : Joose.Managed.Property,
    
    //XXX remove 'Symbie.Meta.Route.Token' after fixing bug in JX.N.D
    use : [ 'Symbie.Meta.Route.Token', 'Symbie.Meta.Route.Token.String', 'Symbie.Meta.Route.Token.Root', 'Symbie.Meta.Route.Token.Parameter', 'Symbie.Meta.Route.Token.WildCard' ],
    
    
    has : {
        mapTo                   : null,
        
        where                   : null,
        
        via                     : null,
        
        tokens                  : Joose.Array,
        
        isWildCardRoute         : false
    },
    
    
    after : {
        
        initialize : function (properties) {
            //Joose.Managed.Property do not inherit from Joose.Meta.Object
            Joose.Meta.Object.prototype.initialize.call(this, properties)
            
            var tokens = this.mapTo.split('/')
            
            Joose.A.each(tokens, function (token, index) {
                
                if (this.isWildCardRoute) throw "Can't add any tokens after the wildcard token"
                
                var token = this.createToken(token, index)
                
                if (token instanceof Symbie.Meta.Route.Token.WildCard) this.isWildCardRoute = true  
                
                this.tokens.push(token)
            }, this)
        }
    },
    
    
    methods : {
        
        createToken : function (token, index) {
            if (token == '' && !index)      return new Symbie.Meta.Route.Token.Root()
            
            if (/^\*/.test(token))          return new Symbie.Meta.Route.Token.WildCard()
            
            if (/^:/.test(token)) {
                var name = /^:(.*)/.exec(token)[1]
                
                var regex = this.where && this.where[name] || /(.*)/
                
                return new Symbie.Meta.Route.Token.Parameter({ token : token, regex : regex })
            }
            
            return new Symbie.Meta.Route.Token.String({ token : token })
        },
        
        
        matchTokenAt : function (token, index) {
            if (this.isWildCardRoute) return true
            
            if (index >= this.tokens.length) return false
            
            return this.tokens[index].match(token)
        },
        
        
        getSpecificityAt : function (index) {
            var tokens = this.tokens
            
            if (this.isWildCardRoute) return tokens[tokens.length - 1].specificity
            
            return tokens[index].specificity
        },
        
        
        prepareApply : function (targetClass) {
        },
        
        
        apply : function (target) {
        },
        
        
        unapply : function (from) {
        }
    }
    
})
