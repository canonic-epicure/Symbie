Class('App.Router', {
    
    isa : 'Symbie.Router',
    
    
    routes : {
        
        
        home : {
            mapTo : '/home',
            
            via : function (context) {
                context.findOrCreate('App.Layout.Site').slot('center').findOrCreate('App.Home')
            } 
        },
        
        
        allPictures : {
            mapTo : '/pictures/all/:fromDate/:toDate',
            
            where : {
                fromDate    : /\d\d-\d\d-\d{4}/,
                toDate      : /.*/
            },
            
            via : function (context) {
                var params  = context.getParams()
                var root    = context.getRoot()
                
                t.ok(root == this)
                
                var siteLayout = this.findOrCreate('JooseJsOrg.Layout.Site')
                
                siteLayout.slot('center').findOrCreate('JooseJsOrg.Pictures.All', {
                    fromDate : params.fromDate,
                    toDate : params.toDate
                })
                
                siteLayout.slot('footer').findOrCreate('JooseJsOrg.Pictures.Footer', {
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
            
            via : function (context) {
                var params  = context.getParams()
                var root    = context.getRoot()
                
                root.findOrCreate('JooseJsOrg.Layout.Site').slot('center').findOrCreate('JooseJsOrg.Picture', {
                    id : params.id
                })
            }
        },
        
        
        editWiki : {
            mapTo : '/wiki/edit',
            
            via : function (context) {
                var path = context.getPath()
            }
        
        },
        
        
        wikiPage : {
            mapTo : '/wiki/:page',
            
            via : function (context) {
                var path = context.getPath()
            }
        
        },
        
        
        wiki : {
            mapTo : '/wiki/*',
            
            via : function (context) {
                var path = context.getPath()
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
