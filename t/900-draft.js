Class('App', {
    
    isa         : 'Symbie.Application',
    
    trait       : 'JooseX.Class.Singleton',
    
    does        : [
        'SymbieX.History',
        'SymbieX.Tracker.GoogleAnalytics'
    ],
    
    // either directly specify routes here
    
    routes      : {
        
        '/pictures/all/:fromDate/:toDate' : function (context) {
        
        }
    },
    
    // or receive via role
    
    does        : [ 'App.Router.Pictures', 'App.Router.Users' ]
    
})




Role('App.Router.Pictures', {
    
    does    : 'Symbie.Router',
    
    prefix  : '/pictures',
    
    
    
    routes  : {
        
        '/all/:fromDate/:toDate' : function (context) {
            var fromDate = context.get('fromDate')
        },
        
        
        '/pictures/:id' : {
            
            where   : {
                id    : /\d+/
            },
            
            use     : [ 'Some.Lazy.Dependency' ],
            
            to : function (context) {
                var id = context.get('id')
                
                context.redirectTo('/picture/123').now()
                
                this.CONTINUE()
            }
        }
    }

})


// first call - initialization
App({
    
}).run('/initial/route') // default to '/'


// later in the app:

App().dispatch('/pictures/all/01012010/10012010').now()