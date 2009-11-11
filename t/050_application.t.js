StartTest(function(t) {
	
    t.plan(1)
    
    var async0 = t.beginAsync()
    
    use([ 'App' ], function () {
        
        //==================================================================================================================================================================================
        t.diag("Sanity")
        
        t.ok(App.my, "App.my is here")
        

        //==================================================================================================================================================================================
        t.diag("Application setup")
        
        App.my.setup()
        
        var root = App.my.root
        
        t.ok(root, "Root widget was created")
        t.ok(root.ID, "Root widget has an ID")
        t.ok(root.router, "Root widget has a router")
        
        
        //==================================================================================================================================================================================
        t.diag("Application launch")
        
        App.my.onReady()
        
        t.endAsync(async0)
    })
    
})