Class('DemoApp.Widget.Home', {
    
    isa : 'Symbie.Widget.Container',
    
    use : [ 'DemoApp.Widget.SpecialOffer', 'DemoApp.Widget.News', 'ExtX.Layout.ColumnFit' ],
    
    
    has : {
        slots       : true
    },

    
    before : {
        
        initComponent : function () {
            
            Ext.apply(this, {
                
                layout : 'columnfit',
                
                
                items : [
                    //left column with news
                    {
                        xtype : 'demoapp-widget-news',
                        slot : 'news',
                        
                        width : '50%'
                    },
                    //eof main content area
                    
                    {
                        xtype : 'demoapp-widget-specialoffer',
                        slot : 'offer',
                        
                        width : '50%',
                        
                        height : 600
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