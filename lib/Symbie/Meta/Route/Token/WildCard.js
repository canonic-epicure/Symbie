Class('Symbie.Meta.Route.Token.WildCard', {
    
    isa : 'Symbie.Meta.Route.Token',
    
    has : {
        token               : '*',
        
        specificity         : 25
    },
    
    
    methods : {
        
        match : function (token) {
            return true
        },
        
        
        asString : function (parameters) {
            var splat       = parameters.splat
            
            if (splat instanceof Array) return splat.join('/')
            
            return ''
        }
    }
    
})


