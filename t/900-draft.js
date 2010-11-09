Class('App', {
    
    isa         : 'Symbie.Application',
    trait       : 'JooseX.Class.Singleton',
    
    plugins     : [
        'SymbieX.History',
        
        {
            'SymbieX.Tracker.GoogleAnalytics' : {
                option1         : 'value1',
                option2         : 'value2'
            }
        }
    ],
    
    config : {
        'SymbieX.History' : {
            option1         : 'value1',
            option2         : 'value2'
        } 
    },
    
    controllers        : [
        'SymbieX.Controller.Login',
        'Controller.Pictures', 
        {                                                                                                                                                                                                      
            'App.Controller.Users' : { ... },
            'App.Controller.Login' : { ... }
        } 
    ],
    
    // or directly specify routes here
    
    routes      : {
        
        // '' synonym
        INDEX   : function () {
        },
        
        
        '/pictures/all/:fromDate/:toDate' : function (context) {
        
        }
    }
    
    
})




Class('App.Controller.Pictures', {
    
    isa     : 'Symbie.Controller',
    
    prefix  : './pictures', // looks after Controller

    
    controllers        : [
        'App.Controller.Pictures', 
        {
            'App.Controller.Users' : { ... },
            'App.Controller.Login' : { ... }
        } 
    ],
    
    
    routes  : {
        
        picturesByDateRange : {
            map         : 'all/:fromDate/:toDate',
            
            where       : {
                fromDate        : /&^*&^*&/
            },
            
            action      : function (context, fromDate, toDate) {
                var fromDate = context.get('fromDate')
            } 
        },
        
        
        'all/:fromDate/:toDate' : function (context) {
            var fromDate = context.get('fromDate')
        },
        
        ':id' : {
            
            where   : {
                id    : /\d+/
            },
            
            use     : [ 'Some.Lazy.Dependency' ],
            
            action  : function (context, id) {
                // or var id = context.get('id')
                // context.app == this - instance of application
                
                context.redirectTo('/picture/123').now()
                
                this.CONTINUE()
            }
        }
    },
    
    
    methods : {
        
        ACTIVATE : function () {
        },
        
        
        FINALIZE : function () {
        }
    },
    
    
    continued : {
    
        methods : {
            
            PRE    : function () {
            },
            
            
            BEGIN   : function () {
            },
            
            
            END     : function () {
            }
        }
    }
})


// first call - initialization
App({
    
}).run('/initial/route').now() // default to '/'


// later in the app:

App().dispatch('/pictures/all/01012010/10012010').now()