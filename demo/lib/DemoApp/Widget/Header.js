Class('DemoApp.Widget.Header', {
    
    isa : 'Symbie.Widget.Container',
    
    
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
                        xtype : 'demoapp-control-button',
                        
                        iconCls : 'demoapp-icon-apricot',
                        
                        text    : 'Home',
                        
                        dispatchTo : '/home'
                    },
                    //eof main content area
                    
                    {
                        xtype : 'demoapp-control-button',
                        
                        iconCls : 'demoapp-icon-bananas',
                        
                        text    : 'Sample',
                        
                        dispatchTo : '/sample'
                    },
                    
                    {
                        xtype : 'demoapp-control-button',
                        
                        iconCls : 'demoapp-icon-berry',
                        
                        text    : 'Special offer',
                        
                        dispatchTo : '/special-offer'
                    },
                    
                    {
                        xtype : 'demoapp-control-button',
                        
                        iconCls : 'demoapp-icon-lemon',
                        
                        text    : 'Error',
                        
                        dispatchTo : '/not-exists'
                    },
                    
                    {
                        xtype : 'demoapp-control-button',
                        
                        iconCls : 'demoapp-icon-kiwi',
                        
                        text    : 'Deferred error',
                        
                        dispatchTo : '/deferred-error'
                    }
                ]
            })
        }
        //eof initComponent
    },
    
    
    after : {
        
        initComponent : function () {
            
        }
        //eof initComponent
    }
    
})