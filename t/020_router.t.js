StartTest(function(t) {
	
    t.plan(1)
    
    var async1 = t.beginAsync()
    
    use('App.Router', function () {
        
        //==================================================================================================================================================================================
        t.diag("Sanity")
        
        t.ok(App.Router, "App.Router is here")
        
        t.ok(App.Router.meta.hasRoute('default'), "'default' route was composed from 'Symbie.Router.Default'")
        
        
        t.endAsync(async1)
    })
    
})