StartTest(function(t) {
	
    t.plan(1)
    
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
                    
                    via : function (route) {
                        t.pass("'home' route was reached")
                    } 
                },
                
                
                allPictures : {
                    mapTo : '/pictures/all/:fromDate/:toDate',
                    
                    where : {
                        fromDate    : /\d\d-\d\d-\d{4}/,
                        toDate      : /.*/
                    },
                    
                    via : function (route) {
                    }
                },
                
                
                picture : {
                    mapTo : '/pictures/:id',
                    
                    where : {
                        id    : /\d+/
                    },
                    
                    via : function (route) {
                    }
                },
                
                
                editPicture : {
                    mapTo : '/pictures/:id/edit',
                    
                    where : {
                        id    : /\d+/
                    },
                    
                    via : function (route) {
                    }
                },
                
                
                editWiki : {
                    mapTo : '/wiki/edit',
                    
                    via : function (route) {
                    }
                },
                
                
                wikiPage : {
                    mapTo : '/wiki/:page',
                    
                    where : {
                        page    : /\d+/
                    },
                    
                    via : function (route) {
                    }
                },
                
                
                wiki : {
                    mapTo : '/wiki/*',
                    
                    via : function (route) {
                    }
                },
                
                
                index : {
                    mapTo : '/',
                    
                    via : function (route) {
                        route.forward('home')
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
        t.diag("Dispatching #1")
        
        var async2 = t.beginAsync()
        
        router.dispatch('/home').then(function () {
            
            t.endAsync(async2)
            
        }).now()
        
        t.endAsync(async1)
    })
    
})