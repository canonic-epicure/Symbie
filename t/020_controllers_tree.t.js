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
        
        
        
        
//        //==================================================================================================================================================================================
//        t.diag("Class creation")
//        
//        t.ok(App.Router, "App.Router is here")
//        
//        t.ok(App.Router.meta.hasRoute('default'), "'default' route was inheried from 'Symbie.Router' (and composed from 'Symbie.Router.Default')")
//        
//        var defaultRoute = App.Router.meta.getRoute('default')
//        
//        t.ok(defaultRoute instanceof Symbie.Meta.Route, "'default' route isa Symbie.Meta.Route")
//        
//        t.ok(App.Router.meta.hasRoute('home'), "Route 'home' was defined via 'routes' builder")
//        t.ok(App.Router.meta.hasRoute('index'), "Route 'index' was defined via 'routes' builder")
//        
//        
//        //==================================================================================================================================================================================
//        t.diag("Instantiation")
//        
//        var router = new App.Router({
//            root : {}
//        })
//        
//        t.ok(router, "'App.Router' was successfully instantiated")
//    
//        
//        //==================================================================================================================================================================================
//        t.diag("Finding route for '/home'")
//        
//        var match = router.findMatch('/home')
//        
//        t.ok(match, "Match for '/home' was found")
//        t.ok(match.route == App.Router.meta.getRoute('home'), ".. and it has a correct route")
//        t.ok(match.path.length == 0, ".. match contains 0 path elements")
//        t.ok(Joose.O.isEmpty(match.parameters), ".. match contains no parameters")
//        
//    
//        t.ok(match.route.asString() == '/home', 'Route was stringified correctly')
//        
//        
//        //==================================================================================================================================================================================
//        t.diag("Finding route for '/wiki/*'")
//        
//        match = router.findMatch('/wiki/foo/bar')
//        
//        t.ok(match, "Match for '/wiki/foo/bar' was found")
//        t.ok(match.route == App.Router.meta.getRoute('wiki'), ".. and it has a correct route")
//        t.ok(match.path.length == 2, ".. match contains 2 path elements")
//        t.ok(match.path[0] == 'foo' && match.path[1] == 'bar', ".. match contains 2 correct path elements")
//        t.ok(Joose.O.isEmpty(match.parameters), ".. match contains no parameters")
//        
//        
//        t.ok(match.route.asString() == '/wiki', 'Route was stringified correctly')
//        
//        
//        //==================================================================================================================================================================================
//        t.diag("Finding route for '/wiki/edit'")
//        
//        match = router.findMatch('/wiki/edit')
//        
//        t.ok(match, "Match for '/wiki/edit' was found")
//        t.ok(match.route == App.Router.meta.getRoute('editWiki'), ".. and it has a correct route")
//        t.ok(match.path.length == 0, ".. match contains 0 path elements")
//        t.ok(Joose.O.isEmpty(match.parameters), ".. match contains no parameters")
//        
//        
//        t.ok(match.route.asString({ path : 'edit' }) == '/wiki/edit', 'Route was stringified correctly')
//    
//        
//        //==================================================================================================================================================================================
//        t.diag("Finding route for '/wiki/:page'")
//        
//        match = router.findMatch('/wiki/123')
//        
//        t.ok(match, "Match for '/wiki/123' was found")
//        t.ok(match.route == App.Router.meta.getRoute('wikiPage'), ".. and it has a correct route")
//        t.ok(match.path.length == 0, ".. match contains 0 path elements")
//        t.ok(match.parameters.page == '123', ".. match contains correct parameters")
//    
//        t.ok(match.route.asString({ page : 123 }) == '/wiki/123', 'Route was stringified correctly')
//        
//        
//        //==================================================================================================================================================================================
//        t.diag("Finding route for '/pictures/all/:fromDate/:toDate'")
//        
//        match = router.findMatch('/pictures/all/12-34-1234/56-78-5678')
//        
//        t.ok(match, "Match for '/pictures/all/12-34-1234/56-78-5678' was found")
//        t.ok(match.route == App.Router.meta.getRoute('allPictures'), ".. and it has a correct route")
//        t.ok(match.path.length == 0, ".. match contains 0 path elements")
//        
//        var fromDate = match.parameters.fromDate
//        
//        t.ok(fromDate[1] == '12', ".. 'fromDate' parameter is the result of regex match #1")
//        t.ok(fromDate[2] == '34', ".. 'fromDate' parameter is the result of regex match #2")
//        t.ok(fromDate[3] == '1234', ".. 'fromDate' parameter is the result of regex match #3")
//        
//        var toDate = match.parameters.toDate
//        
//        t.ok(toDate == '56-78-5678', ".. 'toDate' parameter was the only match and was passed directly")
//        
//        
//        t.ok(match.route.asString({ fromDate : '12-34-1234', toDate : '56-78-5678' }) == '/pictures/all/12-34-1234/56-78-5678', 'Route was stringified correctly')
//    
//        
//        //==================================================================================================================================================================================
//        t.diag("Finding route for '/pictures/:id/edit'")
//        
//        match = router.findMatch('/pictures/123/edit')
//        
//        t.ok(match, "Match for '/pictures/123/edit' was found")
//        t.ok(match.route == App.Router.meta.getRoute('editPicture'), ".. and it has a correct route")
//        t.ok(match.path.length == 0, ".. match contains 0 path elements")
//        t.ok(match.parameters.id == '123', ".. match contains correct parameter")
//        
//        
//        t.ok(match.route.asString({ id : 123 }) == '/pictures/123/edit', 'Route was stringified correctly')
//        
//        
//        //==================================================================================================================================================================================
//        t.diag("Finding route for '/'")
//        
//        match = router.findMatch('/')
//        
//        t.ok(match, "Match for '/' was found")
//        t.ok(match.route == App.Router.meta.getRoute('index'), ".. and it has a correct route")
//        t.ok(match.path.length == 0, ".. match contains 0 path elements")
//        t.ok(Joose.O.isEmpty(match.parameters), ".. match contains no parameters")
//        
//        
//        t.ok(match.route.asString() == '/', 'Route was stringified correctly')
//        
//        
//        //==================================================================================================================================================================================
//        t.diag("Missing route")
//        
//        t.throws_ok(function () {
//            
//            match = router.findMatch('')
//            
//        }, "Can't find route for the path", 'Missing route was detected')
        
    
        
        t.endAsync(async0)
        t.done()
    })
})