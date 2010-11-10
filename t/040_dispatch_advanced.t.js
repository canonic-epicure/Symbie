StartTest(function(t) {
    
    //==================================================================================================================================================================================
    t.diag("Sanity")
    
    t.ok(TestApp, "TestApp is here")
    t.ok(TestApp.Controller.Pictures, "TestApp.Controller.Pictures is here")
    t.ok(TestApp.Controller.WikiController, "TestApp.Controller.WikiController is here")
    
    t.ok(SymbieX.Controller.FooBar, "SymbieX.Controller.FooBar is here")
    t.ok(SymbieX.SomePlugin, "SymbieX.SomePlugin is here")
        
    
    //==================================================================================================================================================================================
    t.diag("Dispatch for '/pictures/all/12-34-1234/56-78-5678'")
    
    ACTION = []
    
    TestApp().dispatch({
        
        path    : '/pictures/all/12-34-1234/56-78-5678',
        
        t       : t
        
    }).andThen(function () {
    
    })
    
        
  
    t.done()
})