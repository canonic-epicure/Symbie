Class('Symbie.Meta.Route.Token.Parameter', {
    
    isa : 'Symbie.Meta.Route.Token',
    
    has : {
        token               : null,
        
        specificity         : 10,
        
        regex               : null
    },
    
    
    methods : {
        
        match : function (token) {
            return regex.test(token)
        }
    }
    
})


