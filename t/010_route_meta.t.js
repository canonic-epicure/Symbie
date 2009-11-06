StartTest(function(t) {
	
    t.plan(1)
    
    var async1 = t.beginAsync()
    
    use('Symbie.Meta.Route', function () {
        
        //==================================================================================================================================================================================
        t.diag("Sanity")
        
        t.ok(Symbie.Meta.Route, "Symbie.Meta.Route is here")
        
        
        //==================================================================================================================================================================================
        t.diag("Instantiation on simple route")
        
        var route = new Symbie.Meta.Route({
            mapTo : '/home',
            
            via : function (route) {
            } 
        })
        
        t.ok(route, "'Symbie.Meta.Route' was successfully instantiated")
        
        t.ok(route.tokens.length == 2, "Route has 2 tokens")
        t.ok(route.tokens[0] instanceof Symbie.Meta.Route.Token.Root, "The 1st token is a root token")
        t.ok(route.tokens[1] instanceof Symbie.Meta.Route.Token.String, "The 2nd token is a string token")
        
        
        t.endAsync(async1)
    })
    
})