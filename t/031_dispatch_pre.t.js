StartTest(function(t) {
	
    //==================================================================================================================================================================================
    t.diag("Sanity")
    
    t.ok(TestApp, "TestApp is here")
    t.ok(TestApp.Controller.Pictures, "TestApp.Controller.Pictures is here")
    t.ok(TestApp.Controller.WikiController, "TestApp.Controller.WikiController is here")
    
    t.ok(SymbieX.Controller.FooBar, "SymbieX.Controller.FooBar is here")
    t.ok(SymbieX.SomePlugin, "SymbieX.SomePlugin is here")
        

    //==================================================================================================================================================================================
    t.diag("Dispatch for '/'")
    
    ACTION      = []
    TEST_PRE    = true
    
    TestApp().dispatch('/').andThen(function () {
    
        t.isDeeply(ACTION, [
            'SymbieX.SomePlugin: PRE',
            'TestApp: PRE'
            
        ], 'Returning `false` from PRE action skips the processing chain')
    })
    
  
    t.done()
})