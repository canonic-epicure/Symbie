Class('Symbie.Meta.Route', {
    
    meta : Joose.Meta.Class,
    
    isa : Joose.Managed.Property,
    
    
    use : [ 'Symbie.Meta.Route.Token', 'Symbie.Meta.Route.Token.String', 'Symbie.Meta.Route.Token.Root', 'Symbie.Meta.Route.Token.Parameter', 'Symbie.Meta.Route.Token.WildCard' ],
    
    
    has : {
        mapTo                   : null,
        
        where                   : null,
        
        via                     : null,
        
        tokens                  : Joose.Array
    },
    
    
    after : {
        
        initialize : function (properties) {
            //Joose.Managed.Property do not inherit from Joose.Meta.Object
            Joose.Meta.Object.prototype.initialize.call(this, properties)
            
            var tokens = this.mapTo.split('/')
            
            Joose.A.each(tokens, function (token, index) {
                this.tokens.push(this.createToken(token, index))
            }, this)
        }
    },
    
    
    methods : {
        
        createToken : function (token, index) {
            if (token == '')        return new Symbie.Meta.Route.Token.Root()
            
            if (/^\*/.test(token))  return new Symbie.Meta.Route.Token.WildCard()
            
            if (/^:/.test(token))   return new Symbie.Meta.Route.Token.Parameter({ token : token, regex : '' })
            
            return new Symbie.Meta.Route.Token.String({ token : token })
        },
        
        
        matchTokenAt : function (token, index) {
            if (index >= this.tokens.length) return false
            
            return this.tokens[index].match(token)
        },
        
        
        prepareApply : function (targetClass) {
        },
        
        
        apply : function (target) {
        },
        
        
        unapply : function (from) {
        }
    }
    
})
