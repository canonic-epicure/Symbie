Class('DemoApp', {
    
    isa         : 'Symbie.Application',

    trait       : 'JooseX.Class.Singleton',
    
    plugins     : [
        'SymbieX.History'
    ],
    
    
    use         : [ 
//        'DemoApp.Widget.Root' 
    ],
    
    
    has : {
    },
    
    
    methods : {
        
        createPath : function (str) {
            
        },
        
        
        ACTIVATE : function () {
        }
    },
    
    
    continued : {
        
        methods : {
            
            setup : function () {
                
                this.AND(function () {
                    
                    var CONTINUE = this.getCONTINUE()
                    
                    Ext.onReady(function () {
                        
                        Ext.getBody().createChild({
                            tag     : 'div',
                            id      : 'content'
                        })
                        
                        CONTINUE()
                    })
                })
                
                this.SUPER().now()
            }
        }
    },
    
    
    routes : {
        
        '/' : function (context) {
            
            context.call('/')
            
            this.CONTINUE()
        },
        
        
        '/home' : function (context) {
            Ext.get('content').update('HOME')
            
            this.CONTINUE()
        },
        
        
        '/sample/:value' : function (context, value) {
            Ext.get('content').update('VALUE: ' + value)
            
            this.CONTINUE()
        },
        
        
        '/special-offer' : function (context) {
            Ext.get('content').update('Special offer page')
            
            this.CONTINUE()
        },
        
        
        '/*' : function (context) {
            Ext.get('content').update('404 - Page not found')
            
            this.CONTINUE()
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
