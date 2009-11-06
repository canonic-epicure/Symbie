Class('App.Router', {
    
    isa : 'Symbie.Router',
    
    
    routes : {
        
        
        home : {
            mapTo : '/home',
            
            via : function (route) {
                route.activate('App.Layout.Site').slot('center').activate('App.Home')
            } 
        },
        
        
        allPictures : {
            mapTo : '/pictures/all/:fromDate/:toDate',
            
            where : {
                fromDate    : /\d\d-\d\d-\d{4}/,
                toDate      : /.*/
            },
            
            via : function (route) {
                var params  = route.getParams()
                var root    = route.getRoot()
                
                root.activate('JooseJsOrg.Layout.Site').slot('center').activate('JooseJsOrg.Pictures.All', {
                    fromDate : params.fromDate,
                    toDate : params.toDate
                })
            }
        },
        
        
        picture : {
            mapTo : '/pictures/:id',
            
            where : {
                id    : /\d+/
            },
            
            routeClass : 'App.Custom.Route',
            
            via : function (route) {
                var params  = route.getParams()
                var root    = route.getRoot()
                
                root.activate('JooseJsOrg.Layout.Site').slot('center').activate('JooseJsOrg.Picture', {
                    id : params.id
                })
            }
        },
        
        
        editWiki : {
            mapTo : '/wiki/edit',
            
            via : function (route) {
                var path = route.getPath()
            }
        
        },
        
        
        wikiPage : {
            mapTo : '/wiki/:page',
            
            via : function (route) {
                var path = route.getPath()
            }
        
        },
        
        
        wiki : {
            mapTo : '/wiki/*',
            
            via : function (route) {
                var path = route.getPath()
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
