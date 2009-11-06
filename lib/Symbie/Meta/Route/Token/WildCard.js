Class('Symbie.Meta.Route.Token.WildCard', {
    
    isa : 'Symbie.Meta.Route.Token',
    
    has : {
        token               : '*',
        
        specificity         : 10
    },
    
    
    methods : {
        
        match : function (token) {
            
            
        }
    }
    
})


