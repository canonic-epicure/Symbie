StartTest(function(t) {
	
    //==================================================================================================================================================================================
    t.diag("Sanity")
    
    t.ok(TestApp, "TestApp is here")
    t.ok(TestApp.Controller.Pictures, "TestApp.Controller.Pictures is here")
    t.ok(TestApp.Controller.WikiController, "TestApp.Controller.WikiController is here")
    
    t.ok(SymbieX.Controller.FooBar, "SymbieX.Controller.FooBar is here")
    t.ok(SymbieX.SomePlugin, "SymbieX.SomePlugin is here")
        
        
//        //==================================================================================================================================================================================
//        t.diag("Class creation")
//        
//        
//        
//        t.ok(App.Router, "App.Router is here")
//        
//        
//        //==================================================================================================================================================================================
//        t.diag("Instantiation")
//        
//        var router = new App.Router({
//            root : new Ext.Container()
//        })
//        
//        t.ok(router, "'App.Router' was successfully instantiated")
//
//        
//        //==================================================================================================================================================================================
//        t.diag("Dispatching with nested error")
//        
//        var async2 = t.beginAsync()
//        
//        router.dispatch('/foo/bar').then(function () {
//            
//            t.fail("'THEN' reached after exception")
//        
//        }).except(function (e) {
//            
//            t.pass("'CATCH' reached after wrong dispatch")
//            
//            t.like(e + '', 'mapped to abstract route', "Exception value is correct")
//            
//            t.endAsync(async2)
//            
//        }).now()
//        
//        
//        //==================================================================================================================================================================================
//        t.diag("Dispatching #1")
//        
//        var async3 = t.beginAsync()
//        
//        router.dispatch('/home').then(function (context) {
//            
//            t.pass("'then' after '/home' route was reached")
//            
//            t.ok(context instanceof Symbie.Context, "'then' received with the instance of context created")
//            
//            t.endAsync(async3)
//            
//        }).now()
//        
//        
//        //==================================================================================================================================================================================
//        t.diag("Dispatching with the following error")
//        
//        var async4 = t.beginAsync()
//        
//        router.dispatch('/home').then(function () {
//            
//            t.pass("'THEN' reached after exception")
//            
//            throw "error"
//        
//        }).except(function (e) {
//            
//            t.pass("'CATCH' reached after throwed exception")
//            
//            t.ok(e == 'error', "Exception value is correct")
//            
//            this.CONTINUE()
//            
//        }).ensure(function () {
//            
//            t.pass("'FINALLY' was reached after throwed exception")
//            
//            t.endAsync(async4)
//            
//        }).now()
//        
//        
//        //==================================================================================================================================================================================
//        t.diag("Dispatching #2")
//        
//        var async5 = t.beginAsync()
//        
//        router.dispatch('/pictures/all/12-34-1234/56-78-5678').then(function () {
//            
//            t.pass("'then' after '/pictures/all/12-34-1234/56-78-5678' route was reached")
//            
//            this.CONTINUE()
//            
//        }).ensure(function () {
//            
//            t.pass("'FINALLY' was reached without exceptions")
//            
//            t.endAsync(async5)
//            
//        }).now()
  
    t.done()
})