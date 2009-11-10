Class('App.Layout.Site', {
    
    isa : 'Symbie.Widget.Container',
    
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