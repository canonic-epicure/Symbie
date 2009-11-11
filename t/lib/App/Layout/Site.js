Class('App.Layout.Site', {
    
    isa : 'Symbie.Widget.Container',
    
    has : {
        slots       : true
    },
    
    before : {
        
        initComponent : function () {
            
            Ext.apply(this, {
                items : [
                    {
                        xtype : 'container',
                        slot : 'header',
                        
                        height : 300
                    },
                    
                    {
                        xtype : 'container',
                        slot : 'center',
                        
                        layout : 'card',
                        
                        height : 600
                    },
                    
                    {
                        xtype : 'container',
                        slot : 'footer',
                        
                        height : 300
                    }
                ]
            })
        }
        //eof initComponent
    }
})