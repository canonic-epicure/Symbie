StartTest(function(t) {
	
    t.plan(7)
    
    var async1 = t.beginAsync()
    
    use('Symbie.Router', function () {
        
        //==================================================================================================================================================================================
        t.diag("Sanity")
        
        t.ok(Symbie.Router, "Symbie.Router is here")
        
        //==================================================================================================================================================================================
        t.diag("Class creation")
        
        
        Class('App.Router', {
            
            isa : 'Symbie.Router',
            
            
            routes : {
                
                home : {
                    mapTo : '/home',
                    
                    via : function (context) {
                        t.pass("'home' context was reached")
                    } 
                },
                
                
                allPictures : {
                    mapTo : '/pictures/all/:fromDate/:toDate',
                    
                    where : {
                        fromDate    : /\d\d-\d\d-\d{4}/,
                        toDate      : /.*/
                    },
                    
                    via : function (context) {
                    }
                },
                
                
                picture : {
                    mapTo : '/pictures/:id',
                    
                    where : {
                        id    : /\d+/
                    },
                    
                    via : function (context) {
                    }
                },
                
                
                editPicture : {
                    mapTo : '/pictures/:id/edit',
                    
                    where : {
                        id    : /\d+/
                    },
                    
                    via : function (context) {
                    }
                },
                
                
                editWiki : {
                    mapTo : '/wiki/edit',
                    
                    via : function (context) {
                    }
                },
                
                
                wikiPage : {
                    mapTo : '/wiki/:page',
                    
                    where : {
                        page    : /\d+/
                    },
                    
                    via : function (context) {
                    }
                },
                
                
                wiki : {
                    mapTo : '/wiki/*',
                    
                    via : function (context) {
                    }
                },
                
                
                index : {
                    mapTo : '/',
                    
                    via : function (context) {
                        context.forward('home')
                    }
                }
                
            }
            //eof routes
        })
        
        t.ok(App.Router, "App.Router is here")
        
        
        //==================================================================================================================================================================================
        t.diag("Instantiation")
        
        var router = new App.Router({
            root : {}
        })
        
        t.ok(router, "'App.Router' was successfully instantiated")

        
        //==================================================================================================================================================================================
        t.diag("Dispatching with error")
        
        var async2 = t.beginAsync()
        
        router.dispatch('/foo/bar').CATCH(function (e) {
            
            t.pass("'CATCH' reached after wrong dispatch")
            
            t.like(e + '', 'mapped to abstract route', "Exception value is correct")
            
            t.endAsync(async2)
            
        }).now()
        
        
        //==================================================================================================================================================================================
        t.diag("Dispatching #1")
        
        var async3 = t.beginAsync()
        
        router.dispatch('/home').then(function () {
            
            t.pass("'then' after '/home' route was reached")
            
            t.endAsync(async3)
            
        }).now()
        
        
        
        t.endAsync(async1)
    })
    
})