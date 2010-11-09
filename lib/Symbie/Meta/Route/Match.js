Class('Symbie.Meta.Route.Match', {
    
    has : {
        tokens                  : { required : true },
        route                   : { required : true },
        
        currentTokenIndex       : 0,
        
        parameters              : Joose.I.Object,
        paramsOrder             : Joose.I.Array,
        
        path                    : Joose.I.Array
    },
    
    
    methods : {
        
        consumeToken : function (token) {
            var currentToken = this.tokens[ this.currentTokenIndex ]
            
            if (currentToken instanceof Symbie.Meta.Route.Token.WildCard) {
                this.path.push(token)
                
                return true
            }
            
            this.currentTokenIndex++
            
            if (currentToken instanceof Symbie.Meta.Route.Token.String)
                return currentToken.match(token)
            
            if (currentToken instanceof Symbie.Meta.Route.Token.Parameter) {
                var match = currentToken.match(token)
                
                if (match) {
                    var paramName = currentToken.name
                    var parameters = this.parameters
                    
                    this.paramsOrder.push(paramName)
                    
                    if (match[1] != null && match[2] != null) 
                        parameters[paramName] = match
                    else
                        if (match[1] != null)
                            parameters[paramName] = match[1]
                        else
                            parameters[paramName] = token
                }
                
                return match
            }
            
            return false
        },
        
        
        compareBySpecificity : function (another) {
            
            var thisTokens      = this.tokens
            var anotherTokens   = another.tokens
            
            if (thisTokens.length < anotherTokens.length) return -1
            if (thisTokens.length > anotherTokens.length) return 1
            
            for (var i = 0; i < thisTokens.length; i++ ) {
                
                var specDiff = thisTokens[i].specificity - anotherTokens[i].specificity
                
                if (specDiff) return specDiff
            }
            
            return 0
        }
    }
    
})
