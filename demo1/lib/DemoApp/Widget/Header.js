Class('DemoApp.Widget.Header', {
    
    isa : Ext.Container,
    
    
    use : [ 'ExtX.Layout.ColumnFit', 'DemoApp.Control.Button' ],
    

    has : {
        slots       : true,
        
        cls         : 'demoapp-widget-header'
    },

    
    before : {
        
        initComponent : function () {
            
            Ext.apply(this, {
                
                layout : 'columnfit',
                
                items : [
                    //left column with news
                    {
                        xtype : 'DemoApp.Control.Button',
                        
                        iconCls : 'demoapp-icon-apricot',
                        
                        text    : 'Home',
                        
                        dispatchTo : '/home'
                    },
                    //eof main content area
                    
                    {
                        xtype : 'DemoApp.Control.Button',
                        
                        iconCls : 'demoapp-icon-bananas',
                        
                        text    : 'Sample',
                        
                        dispatchTo : '/sample/someValue'
                    },
                    
                    {
                        xtype : 'DemoApp.Control.Button',
                        
                        iconCls : 'demoapp-icon-berry',
                        
                        text    : 'Special offer',
                        
                        dispatchTo : '/special-offer'
                    },
                    
                    {
                        xtype : 'DemoApp.Control.Button',
                        
                        iconCls : 'demoapp-icon-lemon',
                        
                        text    : 'Not found',
                        
                        dispatchTo : '/not-exists'
                    },
                    
                    {
                        xtype : 'DemoApp.Control.Button',
                        
                        iconCls : 'demoapp-icon-bananas-bad',
                        
                        text    : 'Deferred error',
                        
                        dispatchTo : '/deferred-error'
                    }
                ]
            })
        }
        //eof initComponent
    },
    
    
    after : {
        
        onRender : function () {
            var div = Ext.DomHelper.createDom({
                tag : 'div',
                cls : 'demoapp-header-background'
            })
            
            this.el.appendChild(div)
        }
        //eof initComponent
    }
    
})