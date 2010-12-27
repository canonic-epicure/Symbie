Class('Symbie.Meta.Route.Match', {
    
    has : {
        tokens                  : { required : true },
        route                   : { required : true },
        controller              : { required : true },
        
        currentTokenIndex       : 0,
        
        parameters              : Joose.I.Object,
        paramsOrder             : Joose.I.Array
    },
    
    
    methods : {
        
        asString : function (params) {
            var str = this.route.asString(params)
            
            if (/^\//.test(str)) return str
            
            return this.controller.getFullPrefix() + str
        },
        
        
        consumeToken : function (token, index, length) {
            var currentToken    = this.tokens[ this.currentTokenIndex ]
            var parameters      = this.parameters
            var paramsOrder     = this.paramsOrder
            
            
            if (currentToken instanceof Symbie.Meta.Route.Token.WildCard) {
                if (!parameters.splat) {
                    parameters.splat    = []
                    
                    paramsOrder.push('splat')
                }
                
                parameters.splat.push(token)
                
                return true
            }
            
            this.currentTokenIndex++
            
            if (currentToken instanceof Symbie.Meta.Route.Token.String)
                return currentToken.match(token)
            
            if (currentToken instanceof Symbie.Meta.Route.Token.Parameter) {
                var match = currentToken.match(token)
                
                if (match) {
                    var paramName = currentToken.name
                    
                    
                    paramsOrder.push(paramName)
                    
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
        
        
        compareBySpecificity : function (another, pathLength) {
            
            var thisTokens      = this.tokens
            var anotherTokens   = another.tokens
            
            var thisLength      = thisTokens.length
            var anotherLength   = anotherTokens.length
            
            // weight index routes with extra token from actual path a bit less 
            if (thisLength == pathLength && anotherLength == pathLength + 1 && another.route.isIndex())
                return 5
            
            if (anotherLength == pathLength && thisLength == pathLength + 1 && this.route.isIndex())
                return -5
            
            if (thisLength < anotherLength) return -1
            if (thisLength > anotherLength) return 1
            
            for (var i = 0; i < thisTokens.length; i++ ) {
                
                var specDiff = thisTokens[i].specificity - anotherTokens[i].specificity
                
                if (specDiff) return specDiff
            }
            
            return 0
        }
    }
    
})
