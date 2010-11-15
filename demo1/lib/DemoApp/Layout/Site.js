Class('DemoApp.Layout.Site', {
    
    isa     : Ext.Panel,
    
    
    use     : [ 'ExtX.Layout.RowFit', 'ExtX.Layout.ColumnFit', 'ExtX.Layout.NBSP' ],
    
    
    has     : {
        slots       : true,
        
        title       : 'yo'
    },
    
    
    before : {
        
        initComponent : function () {
            
            Ext.apply(this, {
                
                tbar    : [
                    {
                        text    : 'yo',
                        
                        handler : function () {
                            
                            DemoApp().dispatch('/special-offer').now()
                        }
                    }
                ],
                
                
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
                                xtype   : 'container',
                                slot    : 'center',
                                
                                layout      : 'card',
                                activeItem  : 0
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