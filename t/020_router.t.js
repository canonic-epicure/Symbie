StartTest(function(t) {
	
    t.plan(1)
    
    var async1 = t.beginAsync()
    
    use('App.Router', function () {
        
        //==================================================================================================================================================================================
        t.diag("Sanity")
        
        t.ok(App.Router, "App.Router is here")
        
        
        t.endAsync(async1)
    })
    
})