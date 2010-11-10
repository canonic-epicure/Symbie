StartTest(function(t) {
	
    var async0 = t.beginAsync()
    
    use('TestApp', function () {
        
        //==================================================================================================================================================================================
        t.diag("Sanity")
        
        t.ok(TestApp, "TestApp is here")
        
        //==================================================================================================================================================================================
        t.diag("Collected dependencies from 'plugins' and 'controllers' builders")
        
        
        t.ok(TestApp.Controller.Pictures, "TestApp.Controller.Pictures is here")
        t.ok(TestApp.Controller.WikiController, "TestApp.Controller.WikiController is here")
        
        t.ok(SymbieX.Controller.FooBar, "SymbieX.Controller.FooBar is here")
        t.ok(SymbieX.SomePlugin, "SymbieX.SomePlugin is here")
        
        t.ok(TestApp.meta.does(SymbieX.SomePlugin), 'Plugin has been applied as role')
        
        t.isDeeply(TestApp.meta.config, {
            'SymbieX.SomePlugin' : {
                option1     : 'value1',
                option2     : 'value2'
            }
        }, 'Correct content for `config`')
        
        
        t.isDeeply(TestApp.meta.controllers, {
            'TestApp.Controller.Pictures' : {},
            
            'TestApp.Controller.WikiController' : {},
            
            'SymbieX.Controller.FooBar' : {
                prefix  : 'barbaz'
            }
        }, 'Correct content for `controllers`')
        
        
        
    //==================================================================================================================================================================================
    t.diag("Application")
        
        var app = TestApp()
        
        t.ok(app, "'TestApp' has been successfully instantiated")
        

        //==================================================================================================================================================================================
        t.diag("Finding route for '/home'")
        
        var match = app.findMatch('/home')
        
        t.ok(match, "Match for '/home' was found")
        t.ok(match.route == TestApp.meta.getRoute('home'), ".. and it has a correct route")
        t.ok(match.path.length == 0, ".. match contains 0 path elements")
        t.isDeeply(match.parameters, {}, ".. match contains no parameters")
    
        
        t.ok(match.asString() == '/home', 'Route was stringified correctly')
        
        
        //==================================================================================================================================================================================
        t.diag("Finding route for '/'")
        
        match = app.findMatch('/')
        
        t.ok(match, "Match for '/' was found")
        t.ok(match.route == TestApp.meta.getRoute('/'), ".. and it has a correct route")
        t.ok(match.path.length == 0, ".. match contains 0 path elements")
        t.isDeeply(match.parameters, {}, ".. match contains no parameters")
        
        
        t.ok(match.asString() == '/', 'Route was stringified correctly')
        
        
    //==================================================================================================================================================================================
    t.diag("Pictures controller")
        
        var picturesController = app.controllers[ 'TestApp.Controller.Pictures' ]
        
        t.isaOk(picturesController, TestApp.Controller.Pictures, 'Correct controller was instantiated')
        
        t.ok(picturesController.getFullPrefix() == '/pictures', 'Correct prefix for Pictures controller')
        
        
        //==================================================================================================================================================================================
        t.diag("Finding route for '/pictures/all/:fromDate/:toDate'")
        
        match = app.findMatch('/pictures/all/12-34-1234/56-78-5678')
        
        t.ok(match, "Match for '/pictures/all/12-34-1234/56-78-5678' was found")
        t.ok(match.route == TestApp.Controller.Pictures.meta.getRoute('./all/:fromDate/:toDate'), ".. and it has a correct route")
        t.ok(match.path.length == 0, ".. match contains 0 path elements")
        
        var fromDate = match.parameters.fromDate
        
        t.ok(fromDate[1] == '12', ".. 'fromDate' parameter is the result of regex match #1")
        t.ok(fromDate[2] == '34', ".. 'fromDate' parameter is the result of regex match #2")
        t.ok(fromDate[3] == '1234', ".. 'fromDate' parameter is the result of regex match #3")
        
        var toDate = match.parameters.toDate
        
        t.ok(toDate == '56-78-5678', ".. 'toDate' parameter was the only match and was passed directly")
        
        t.isDeeply(match.paramsOrder, [ 'fromDate', 'toDate' ], 'Correct params order in match')
        
        
        t.ok(match.asString({ fromDate : '12-34-1234', toDate : '56-78-5678' }) == '/pictures/all/12-34-1234/56-78-5678', 'Route was stringified correctly')
    
        
        //==================================================================================================================================================================================
        t.diag("Finding route for '/glob/picture'")
        
        match = app.findMatch('/glob/picture')
        
        t.ok(match, "Match for '/glob/picture' was found")
        t.ok(match.route == TestApp.Controller.Pictures.meta.getRoute('/glob/picture'), ".. and it has a correct route")
        
        t.ok(match.asString() == '/glob/picture', 'Route was stringified correctly')

        
        //==================================================================================================================================================================================
        t.diag("Finding route for '/pictures/:id/edit'")
        
        match = app.findMatch('/pictures/123/edit')
        
        t.ok(match, "Match for '/pictures/123/edit' was found")
        t.ok(match.route == TestApp.Controller.Pictures.meta.getRoute('editPicture'), ".. and it has a correct route")
        t.ok(match.path.length == 0, ".. match contains 0 path elements")
        t.ok(match.parameters.id == '123', ".. match contains correct parameter")
        
        
        t.ok(match.asString({ id : 123 }) == '/pictures/123/edit', 'Route was stringified correctly')
        

        //==================================================================================================================================================================================
        t.diag("Nested WikiController")
        
        var picturesWikiController = picturesController.controllers[ 'TestApp.Controller.WikiController' ]
        
        t.isaOk(picturesWikiController, TestApp.Controller.WikiController, 'Correct controller was instantiated')
        
        t.ok(picturesWikiController.getFullPrefix() == '/pictures/wiki', 'Correct prefix for nested WikiController controller')
        
        
        //==================================================================================================================================================================================
        t.diag("Finding route for '/pictures/wiki'")
        
        match = app.findMatch('/pictures/wiki/')
        
        t.ok(match, "Match for '/pictures/wiki' was found")
        t.ok(match.route == TestApp.Controller.WikiController.meta.getRoute('INDEX'), ".. and it has a correct route")
        
        t.ok(match.asString() == '/pictures/wiki/', 'Route was stringified correctly')

        
        //==================================================================================================================================================================================
        t.diag("Finding route for '/pictures/wiki/123'")
        
        match = app.findMatch('/pictures/wiki/123')
        
        t.ok(match, "Match for '/pictures/wiki/123' was found")
        t.ok(match.route == TestApp.Controller.WikiController.meta.getRoute('wikiPage'), ".. and it has a correct route")
        t.ok(match.parameters.page == '123', 'Correct parameter extracted')
        
        t.ok(match.asString({ page : 123 }) == '/pictures/wiki/123', 'Route was stringified correctly')

        
        //==================================================================================================================================================================================
        t.diag("Finding route for '/pictures/wiki/edit'")

        match = app.findMatch('/pictures/wiki/edit')
        
        t.ok(match, "Match for '/pictures/wiki/edit' was found")
        t.ok(match.route == TestApp.Controller.WikiController.meta.getRoute('editWiki'), ".. and it has a correct route")
        
        t.ok(match.asString() == '/pictures/wiki/edit', 'Route was stringified correctly')
        
        
        //==================================================================================================================================================================================
        t.diag("Finding route for '/pictures/wiki/foo/bar'")
        
        match = app.findMatch('/pictures/wiki/foo/bar')
        
        t.ok(match, "Match for '/pictures/wiki/foo/bar' was found")
        t.ok(match.route == TestApp.Controller.WikiController.meta.getRoute('catchAll'), ".. and it has a correct route")
        t.isDeeply(match.path, [ 'foo', 'bar' ], ".. Correct path extracted from wildcard match")
        
        t.ok(match.asString(match.path) == '/pictures/wiki/foo/bar', 'Route was stringified correctly')
        

        //==================================================================================================================================================================================
        t.diag("Nested SymbieX controller")
        
        var picturesSymbieXController = picturesController.controllers[ 'SymbieX.Controller.FooBar' ]
        
        t.isaOk(picturesSymbieXController, SymbieX.Controller.FooBar, 'Correct controller was instantiated')
        
        t.ok(picturesSymbieXController.getFullPrefix() == '/pictures/foobar/prefix', 'Correct prefix for nested SymbieX controller')
        
        
        //==================================================================================================================================================================================
        t.diag("Finding route for '/pictures/foobar/prefix/foobar/123/456'")
        
        match = app.findMatch('/pictures/foobar/prefix/foobar/123/456')
        
        t.ok(match, "Match for '/pictures/foobar/prefix/foobar/123/456' was found")
        t.ok(match.route == SymbieX.Controller.FooBar.meta.getRoute('foobar/*'), ".. and it has a correct route")
        t.isDeeply(match.path, [ '123', '456' ], ".. Correct path extracted from wildcard match")
        
        t.ok(match.asString(match.path) == '/pictures/foobar/prefix/foobar/123/456', 'Route was stringified correctly')
        
        
    //==================================================================================================================================================================================
    t.diag("WikiController")
        
        
        //==================================================================================================================================================================================
        t.diag("Finding route for '/wiki/'")
        
        match = app.findMatch('/wiki/')
        
        t.ok(match, "Match for '/wiki/' was found")
        t.ok(match.route == TestApp.Controller.WikiController.meta.getRoute('INDEX'), ".. and it has a correct route")
        
        t.ok(match.asString() == '/wiki/', 'Route was stringified correctly')
        
        
    //==================================================================================================================================================================================
    t.diag("Missing route")
        
        t.throws_ok(function () {
            
            match = app.findMatch('')
            
        }, "Can't find route for the path", 'Missing route was detected')
        
    
        
        t.endAsync(async0)
        t.done()
    })
})