Class('DemoApp.Layout.Site', {
    
    isa : 'Symbie.Widget.Container',
    
    use : [ 'ExtX.Layout.RowFit', 'ExtX.Layout.ColumnFit', 'ExtX.Layout.NBSP' ],
    
    has : {
        slots       : true
    },
    
    before : {
        
        initComponent : function () {
            
            Ext.apply(this, {
                
                layout : 'columnfit',
                
                
                items : [
                    {
                        xtype : 'nbsp',
                        width : '50%'
                    },
                    
                    //main content area
                    {
                        xtype : 'container',
                        width : 980,
                        
                        cls : 'main-content',
                        
                        layout : 'rowfit',
                        
                        items : [
                            {
                                xtype : 'container',
                                slot : 'header',
                                
                                height : 150
                            },
                            
                            {
                                xtype : 'container',
                                slot : 'center',
                                
                                layout : 'card'
                            },
                            
                            {
                                xtype : 'container',
                                slot : 'footer',
                                
                                height : 50
                            }
                        ]
                    },
                    //eof main content area
                    
                    {
                        xtype : 'nbsp',
                        width : '50%'
                    }
                ]
            })
        }
        //eof initComponent
    }
})