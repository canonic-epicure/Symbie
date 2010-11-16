Class('DemoApp.Widget.Home', {
    
    isa : Ext.Panel,
    
//    use : [ 'DemoApp.Widget.SpecialOffer', 'DemoApp.Widget.News', 'ExtX.Layout.ColumnFit' ],
    
    
    has : {
        slots       : true
    },

    
    before : {
        
        initComponent : function () {
            
            Ext.apply(this, {
                title   : 'Home page',
                
                tbar    : [
                    {
                        text    : 'Special offer',
                        
                        handler : function () {
                            
                            DemoApp().dispatch('/special-offer').now()
                        }
                    },
                    {
                        text    : 'Sample',
                        
                        handler : function () {
                            
                            DemoApp().dispatch('/sample/123').now()
                        }
                    },
                    {
                        text    : 'CatchAll',
                        
                        handler : function () {
                            
                            DemoApp().dispatch('/123').now()
                        }
                    }
                ],
                
                buttons : [
                    {
                        text    : 'Ok'
                    }
                ]
                
//                layout : 'columnfit',
//                
//                
//                items : [
//                    //left column with news
//                    {
//                        xtype : 'DemoApp.Widget.News',
//                        slot : 'news',
//                        
//                        width : '50%'
//                    },
//                    //eof main content area
//                    
//                    {
//                        xtype : 'DemoApp.Widget.SpecialOffer',
//                        slot : 'offer',
//                        
//                        width : '50%',
//                        
//                        height : 600
//                    }
//                ]
            })
        }
        //eof initComponent
    }    
})