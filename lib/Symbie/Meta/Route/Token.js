Class('Symbie.Meta.Route.Token', {
    
    has : {
        token               : null,
        
        specificity         : 0
    },
    
    
    methods : {
        
        match : function (token) {
            throw "Abstract method 'match' was called on [" + this + "]"
        },
        
        
        asString : function () {
            throw "Abstract method 'asString' was called on [" + this + "]"
        }
    }
    
})


