Class('DemoApp', {
    
    isa         : 'Symbie.Application',

    trait       : 'JooseX.Class.Singleton',
    
    
    use         : [ 
//        'DemoApp.Widget.Root' 
    ],
    
    
    has : {
    },
    
    
    methods : {
        
        ACTIVATE : function () {
            Ext.getBody().update('')
        }
    },
    
    
    continued : {
        
        methods : {
            
            setup : function () {
                
                this.AND(function () {
                    
                    Ext.onReady(this.getCONTINUE())
                })
                
                this.SUPER().now()
            }
        }
    },
    
    
    routes : {
        
        '/' : function (context) {
            Ext.getBody().update('ROOT')
        },
        
        
        '/home' : function (context) {
            context.redirect('/')
        },
        
        
        '/sample/:value' : function (context, value) {
            Ext.getBody().update('VALUE: ' + value)
        },
        
        
        '/special-offer' : function (context) {
            Ext.getBody().update('Special offer page')
        },
        
        
        '/*' : function (context) {
            Ext.getBody().update('404 - Page not found')
        },
        
        
        '/error' : function (context) {
            throw "Ah, sometimes this happens"
        }
    }
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
