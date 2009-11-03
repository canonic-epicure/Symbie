Class('App.Router', {
    
    isa : 'Symbie.Router',
    
    
    actions : {
        
        
        home : {
            mapTo : '/home',
            
            via : function (route) {
                route.activate('App.Layout.Site').slot('center').activate('App.Home')
            } 
        },
        
        
        allPictures : {
            mapTo : '/pictures/all/:fromDate/:toDate',
            
            where : {
                fromDate : /\d\d-\d\d-\d{4}/
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
            
            mapTo : '/picture/:id',
            
            via : function (route) {
                var params  = route.getParams()
                var root    = route.getRoot()
                
                root.activate('JooseJsOrg.Layout.Site').slot('center').activate('JooseJsOrg.Picture', {
                    id : params.id
                })
            }
        },
        
        
        index : {
            mapTo : '/',
            
            via : function (route) {
                
            }
        }
    }
    
    
    connect : {
        
        '/home' : {
            
            name : 'home',
            
            realize : function (route) {
                route.activate('App.Layout.Site').slot('center').activate('App.Home')
            } 
        }
    },
    
    
    root : {
        
//        name : 'root',
        
        realize : function (route) {
            route.forward('home')
        }
    },
    
    
    defaultRoute : {
            
        realize : function (route) {
            route.activate('App.Layout.FullScreen').activate('App.Widget.NotFound')
        }
    }
       
})



//        '/pictures/all/:fromDate/:toDate' : {
//            
//            name : 'all-pictures',
//            
////            use : [ 'JooseJsOrg.Layout.Site', 'JooseJsOrg.Pictures.All' ],
//            
//            realize : function (route) {
//                var params  = route.getParams()
//                var root    = route.getRoot()
//                
//                root.activate('JooseJsOrg.Layout.Site').slot('center').activate('JooseJsOrg.Pictures.All', {
//                    fromDate : params.fromDate,
//                    toDate : params.toDate
//                })
//            }
//        },
//            
//        '/picture/:id' : {
//            
//            realize : function (route) {
//                var params  = route.getParams()
//                var root    = route.getRoot()
//                
//                root.activate('JooseJsOrg.Layout.Site').slot('center').activate('JooseJsOrg.Picture', {
//                    id : params.id
//                })
//            }
//        }
//        
////        /picture/10/highlight/11
