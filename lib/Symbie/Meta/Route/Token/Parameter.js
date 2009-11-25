Class('Symbie.Meta.Route.Token.Parameter', {
    
    isa : 'Symbie.Meta.Route.Token',
    
    has : {
        name                : null,
        
        specificity         : 50,
        
        regex               : { required : true }
    },
    
    
    methods : {
        
        match : function (token) {
            return this.regex.exec(token)
        },
        
        
        asString : function (parameters) {
            var parameterValue = parameters && parameters[this.name]
            
            if (!parameterValue) throw "Parameter [" + this.token + "] wasn't supplied during token stringification"
            
            if (!this.regex.test(parameterValue)) throw "Supplied parameter [" + parameterValue + "] don't match the required regular expression in 'where'"
            
            return parameterValue
        }
    }
    
})


