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
    
    ACTION = []
    
    TestApp().dispatch('/').andThen(function () {
    
        t.isDeeply(ACTION, [
            'SymbieX.SomePlugin: PRE',
            'TestApp: PRE',
            'TestApp: ACTIVATE',
            'TestApp: BEGIN',
            'SymbieX.SomePlugin: BEGIN',
            'TestApp: /',
            'SymbieX.SomePlugin: END',
            'TestApp: END',
            'TestApp: FINALIZE'
            
        ], 'Correct dispatch flow')
    })
    
    
    //==================================================================================================================================================================================
    t.diag("Dispatch for '/home'")
    
    ACTION = []
    
    TestApp().dispatch('/home').andThen(function () {
    
        t.isDeeply(ACTION, [
            'SymbieX.SomePlugin: PRE',
            'TestApp: PRE',
            'TestApp: ACTIVATE',
            'TestApp: BEGIN',
            'SymbieX.SomePlugin: BEGIN',
            'TestApp: /home',
            'SymbieX.SomePlugin: END',
            'TestApp: END',
            'TestApp: FINALIZE'
            
        ], 'Correct dispatch flow')
    })

    
    //==================================================================================================================================================================================
    t.diag("Dispatch for '/pictures/all/12-34-1234/56-78-5678'")
    
    ACTION = []
    
    TestApp().dispatch('/pictures/all/12-34-1234/56-78-5678').andThen(function () {
    
        t.isDeeply(ACTION, [
            'SymbieX.SomePlugin: PRE',
            'TestApp: PRE',
            'TestApp.Controller.Pictures: PRE',
            
            'TestApp: ACTIVATE',
            'TestApp.Controller.Pictures: ACTIVATE',
            
            'TestApp.Controller.Pictures: BEGIN',
            'TestApp.Controller.Pictures: ./all/:fromDate/:toDate',
            'TestApp.Controller.Pictures: END',
            
            'TestApp.Controller.Pictures: FINALIZE',
            'TestApp: FINALIZE'
            
        ], 'Correct dispatch flow')
    })
    
    
    //==================================================================================================================================================================================
    t.diag("Dispatch for '/glob/picture'")
    
    ACTION = []
    
    TestApp().dispatch('/glob/picture').andThen(function () {
    
        t.isDeeply(ACTION, [
            'SymbieX.SomePlugin: PRE',
            'TestApp: PRE',
            'TestApp.Controller.Pictures: PRE',
            
            'TestApp: ACTIVATE',
            'TestApp.Controller.Pictures: ACTIVATE',
            
            'TestApp.Controller.Pictures: BEGIN',
            'TestApp.Controller.Pictures: /glob/picture',
            'TestApp.Controller.Pictures: END',
            
            'TestApp.Controller.Pictures: FINALIZE',
            'TestApp: FINALIZE'
            
        ], 'Correct dispatch flow')
    })
    
    
    //==================================================================================================================================================================================
    t.diag("Dispatch for '/pictures/wiki/'")
    
    ACTION = []
    
    TestApp().dispatch('/pictures/wiki/').andThen(function () {
    
        t.isDeeply(ACTION, [
            'SymbieX.SomePlugin: PRE',
            'TestApp: PRE',
            'TestApp.Controller.Pictures: PRE',
            'TestApp.Controller.WikiController: PRE',
            
            'TestApp: ACTIVATE',
            'TestApp.Controller.Pictures: ACTIVATE',
            'TestApp.Controller.WikiController: ACTIVATE',
            
            'TestApp.Controller.WikiController: BEGIN',
            'TestApp.Controller.WikiController: INDEX',
            'TestApp.Controller.WikiController: END',
            
            'TestApp.Controller.WikiController: FINALIZE',
            'TestApp.Controller.Pictures: FINALIZE',
            'TestApp: FINALIZE'
            
        ], 'Correct dispatch flow')
    })
    
    
    //==================================================================================================================================================================================
    t.diag("Dispatch for '/pictures/foobar/prefix/foobar/123/456'")
    
    ACTION = []
    
    TestApp().dispatch('/pictures/foobar/prefix/foobar/123/456').andThen(function () {
    
        t.isDeeply(ACTION, [
            'SymbieX.SomePlugin: PRE',
            'TestApp: PRE',
            'TestApp.Controller.Pictures: PRE',
            'SymbieX.Controller.FooBar: PRE',
            
            'TestApp: ACTIVATE',
            'TestApp.Controller.Pictures: ACTIVATE',
            'SymbieX.Controller.FooBar: ACTIVATE',
            
            'SymbieX.Controller.FooBar: BEGIN',
            'SymbieX.Controller.FooBar: foobar/*',
            'SymbieX.Controller.FooBar: END',
            
            'SymbieX.Controller.FooBar: FINALIZE',
            'TestApp.Controller.Pictures: FINALIZE',
            'TestApp: FINALIZE'
            
        ], 'Correct dispatch flow')
    })

    
    //==================================================================================================================================================================================
    t.diag("Dispatch for '/wiki/456'")
    
    ACTION = []
    
    TestApp().dispatch('/wiki/456').andThen(function () {
    
        t.isDeeply(ACTION, [
            'SymbieX.SomePlugin: PRE',
            'TestApp: PRE',
            'TestApp.Controller.WikiController: PRE',
            
            'TestApp: ACTIVATE',
            'TestApp.Controller.WikiController: ACTIVATE',
            
            'TestApp.Controller.WikiController: BEGIN',
            'TestApp.Controller.WikiController: wikiPage',
            'TestApp.Controller.WikiController: END',
            
            'TestApp.Controller.WikiController: FINALIZE',
            'TestApp: FINALIZE'
            
        ], 'Correct dispatch flow')
    })
    

    //==================================================================================================================================================================================
    t.diag("Dispatch for '/barbaz/foobar/prefix/foobar/123/456'")
    
    ACTION = []
    
    TestApp().dispatch('/barbaz/foobar/prefix/foobar/123/456').andThen(function () {
    
        t.isDeeply(ACTION, [
            'SymbieX.SomePlugin: PRE',
            'TestApp: PRE',
            'SymbieX.Controller.FooBar: PRE',
            
            'TestApp: ACTIVATE',
            'SymbieX.Controller.FooBar: ACTIVATE',
            
            'SymbieX.Controller.FooBar: BEGIN',
            'SymbieX.Controller.FooBar: foobar/*',
            'SymbieX.Controller.FooBar: END',
            
            'SymbieX.Controller.FooBar: FINALIZE',
            'TestApp: FINALIZE'
            
        ], 'Correct dispatch flow')
    })
    
    
        
  
    t.done()
})