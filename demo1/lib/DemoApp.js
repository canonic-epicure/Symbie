Class('DemoApp', {
    
    isa         : 'Symbie.Application',

    trait       : 'JooseX.Class.Singleton',
    
    plugins     : [
        'SymbieX.History'
    ],
    
    
    use         : [ 
        'DemoApp.Widget.Root',
        'DemoApp.Layout.Site',
        'DemoApp.Widget.Header',
        'DemoApp.Widget.Footer',
        'DemoApp.Widget.Home'
    ],
    
    
    has : {
        root            : null
    },
    
    
    methods : {
        
        createMainLayout : function (root) {
            var layout          = root.add({ 
                xtype       : 'DemoApp.Layout.Site',
                
                slot        : 'siteLayout'
            })
            
            var layoutSlots     = layout.slots 
            
            layoutSlots.header.add({ xtype : 'DemoApp.Widget.Header' })
            layoutSlots.footer.add({ xtype : 'DemoApp.Widget.Footer' })
        },
        
        
        ACTIVATE : function (c) {
            var root = c.stash.root = this.root
            
            root.removeAll()
        },
        
        
        FINALIZE : function (c) {
            var root = c.stash.root
            
//            root.slots.siteLayout.slots.center.layout.setActiveItem(root.slots.siteLayout.slots.home)
            root.setActiveSlot('siteLayout')
            
            root.doLayout()
        }
    },
    
    
    continued : {
        
        methods : {
            
            setup : function () {
                var me      = this
                
                this.AND(function () {
                    
                    var CONTINUE = this.getCONTINUE()
                    
                    Ext.onReady(function () {
                        
                        me.root = new DemoApp.Widget.Root({
                            app   : this
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
            
            var root = context.stash.root
            
            this.createMainLayout(root)
            
            var home = root.slots.siteLayout.slots.center.add({ xtype : 'DemoApp.Widget.Home', slot : 'home' })
            
//            root.slots.siteLayout.slots.center.layout.setActiveItem(home)
            
            this.CONTINUE()
        },
        
        
        '/home' : function (context) {
            
            var root = context.stash.root
            
            this.createMainLayout(root)
            
            root.slots.siteLayout.slots.center.add({ xtype : 'DemoApp.Widget.Home' })
            
            this.CONTINUE()
        },
        
        
        '/sample/:value' : function (context, value) {
            Ext.get('content').update('VALUE: ' + value)
            
            this.CONTINUE()
        },
        
        
        '/special-offer' : function (context) {
//            Ext.get('content').update('Special offer page')
            
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
