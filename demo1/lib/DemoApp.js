Class('DemoApp', {
    
    isa         : 'Symbie.Application',

    trait       : 'JooseX.Class.Singleton',
    
    
    use         : [ 
        'DemoApp.Widget.Root' 
    ],
    
    
    has : {
    },
    
    
    methods : {
        
        mainLayout : function (context, root) {
        }
    },
    
    
    continued : {
        methods : {
        }
    },
    
    
    routes : {
        
        '/' : function (context) {
        },
        
        
        '/home' : function (context) {
        },
        
        
        '/sample/:value' : function (context) {
        },
        
        
        '/special-offer' : function (context) {
        },
        
        
        '/*' : function (context) {
        },
        
        
        '/immediate-error' : function (context) {
            throw "Ah, sometimes this happens"
        },
        
        
        '/deferred-error' : function (context) {
        }
    }
    //eof routes
    
})


//    after : {
//        initialize : function () {
//            this.on('dispatchException', this.onDispatchException, this)
//        }
//    },
//    
//    
//    methods : {
//        
//        onDispatchException : function (router, exception) {
//            
//            Ext.Msg.show({
//               title    : 'Error:',
//               msg      : exception,
//               
//               buttons  : Ext.Msg.OK,
//               icon     : Ext.MessageBox.ERROR
//            })
//            
//            return false
//        }
//    }
