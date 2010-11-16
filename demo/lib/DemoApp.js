Class('DemoApp', {
    
    isa         : 'Symbie.Application',

    trait       : 'JooseX.Class.Singleton',
    
    plugins     : [
        'SymbieX.History',
        'SymbieX.ExtJS.Widget',
        'SymbieX.ExtJS.DomReady',
        'SymbieX.ExtJS.Shotenjin'
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
    
    
    after : {
        initialize : function () {
            this.on('dispatchException', this.onDispatchException, this)
        }
    },
    
    
    methods : {
        
        onDispatchException : function (router, exception) {
            
            Ext.Msg.show({
               title    : 'Error:',
               msg      : exception,
               
               buttons  : Ext.Msg.OK,
               icon     : Ext.MessageBox.ERROR
            })
            
            return false
        },
        
        
        createMainLayout : function (context) {
            
            context.stash.root.activate(context, { 
                xtype       : 'DemoApp.Layout.Site',
                
                slot        : 'mainLayout',

                children    : {
                    header  : { xtype : 'DemoApp.Widget.Header' },
                    
                    footer  : { xtype : 'DemoApp.Widget.Footer' }
                }
            })
        },
        
        
        ACTIVATE : function (c) {
            var root = c.stash.root = this.root
        },
        
        
        FINALIZE : function (c) {
            var root = c.stash.root
            
            root.doLayout()
        },
        
        
        onDomReady : function () {
            this.root = new DemoApp.Widget.Root({
                app   : this
            })
        }
    },
    
    
    routes : {
        
        '/' : function (context) {
            context.call('/home').now()
        },
        
        
        '/home' : function (context) {
            var root = context.stash.root
            
            this.createMainLayout(context)
            
            root.slots.mainLayout.slots.center.activate(context, {
                xtype : 'DemoApp.Widget.Home'
            })
            
            this.CONTINUE()
        },
        
        
        '/sample/:value' : {
            use     : 'DemoApp.Widget.Sample',
            
            action  : function (context, value) {
                var root = context.stash.root
                
                this.createMainLayout(context)
                
                root.slots.mainLayout.slots.center.activate(context, {
                    xtype : 'DemoApp.Widget.Sample'
                })
                
                this.CONTINUE()
            }
        },
        
        
        '/special-offer' : {
            use     : 'DemoApp.Widget.SpecialOffer',
            
            action  : function (context) {
                var root = context.stash.root
                
                this.createMainLayout(context)
                
                root.slots.mainLayout.slots.center.activate(context, {
                    xtype : 'DemoApp.Widget.SpecialOffer'
                })
                
                this.CONTINUE()
            }
        }, 
        
        
        '/*' : {
            use     : 'DemoApp.Widget.NotFound',
            
            action  : function (context) {
                var root = context.stash.root
                
                root.activate(context, { 
                    xtype       : 'DemoApp.Widget.NotFound'
                })
                
                this.CONTINUE()
            }
        },
        
        
        '/error' : function (context) {
            throw "Ah, sometimes this happens"
        }
    }
})
