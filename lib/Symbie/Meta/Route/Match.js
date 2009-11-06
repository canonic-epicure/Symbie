Class('Symbie.Meta.Route.Match', {
    
    has : {
        route                   : null,
        
        currentTokenIndex       : 0,
        
        parameters              : Joose.Object,
        
        path                    : Joose.Array
    },
    
    
    methods : {
        
        consumeToken : function (token) {
            var currentToken = this.route.tokens[this.currentTokenIndex]
            
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
                    
                    if (match[1] != null) 
                        this.parameters[paramName] = match
                    else
                        this.parameters[paramName] = token
                }
                
                return match
            }
        },
        
        
        matchedFullPath : function () {
            var currentToken = this.route.tokens[this.currentTokenIndex]
            
            return (currentToken instanceof Symbie.Meta.Route.Token.WildCard) || this.currentTokenIndex == this.route.tokens.length 
        },
        
        
        getSpecificity : function () {
            var specificity = 0
            
            Joose.A.each(this.route.tokens, function (token) {
                specificity += token.specificity
            })
            
            return specificity
        }
    }
    
})





//Class('Symbie.Dispatcher.Request', {
//    
//    use : [ 'Symbie.Dispatcher.Path' ],
//    
//    has : {
//        dispatcher              : null,
//        
//        path                    : null,
//        
//        callback                : null,
//        scope                   : null,
//        
//        root                    : null
//    },
//    
//    
//    methods : {
//        
//        setPath : function (path) {
//            if (typeof path == 'string') path = new Symbie.Dispatcher.Path({
//                path : path,
//                request : this,
//                dispatcher : this.dispatcher
//            })
//            
//            this.path = path
//        },
//        
//        
//        prepareClasses : function (callback, scope, args) {
//            this.path.prepareClasses(callback, scope, args)
//        },
//        
//        
//        instantiate : function (callback, scope, args) {
//            this.path.instantiate(callback, scope, args)
//        },
//        
//        
//        prepareInstances : function () {
//        },
//        
//        
//        activate : function (callback, scope, args) {
//            this.path.activate(callback, scope, args)
//        },
//        
//
//        finalize : function () {
//            if (this.callback) this.callback.call(this.scope || this)
//        }
//    }
//    
//})
