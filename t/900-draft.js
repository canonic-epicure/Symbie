Class('App', {
    
    isa         : 'Symbie.Application',
    
    trait       : 'JooseX.Class.Singleton',
    
    
    // either directly specify routes here
    
    routes      : {
        
        '/pictures/all/:fromDate/:toDate' : function (context) {
        
        }
    },
    
    // or receive via role
    
    does        : [ 'App.Router.Pictures', 'App.Router.Users' ]
    
})




Role('App.Router.Pictures', {
    
    trait   : 'Symbie.Router',
    
    prefix  : '/pictures',
    
    routes  : {
        
        '/all/:fromDate/:toDate' : function (context) {
            var fromDate = context.get('fromDate')
        },
        
        
        '/pictures/:id' : {
            
            where : {
                id    : /\d+/
            },
            
            to : function (context) {
                var id = context.get('id')
            }
        }
    }

})


// first call - initialization
App({
    
})


// later in the app, to get the app instance:

App().dispatch('/pictures/all/01012010/10012010').now()