Class('DemoApp.Widget.Home', {
    
    isa : Ext.Container,
    
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
                        xtype : 'DemoApp.Widget.News',
                        slot : 'news',
                        
                        width : '50%'
                    },
                    //eof main content area
                    
                    {
                        xtype : 'DemoApp.Widget.SpecialOffer',
                        slot : 'offer',
                        
                        width : '50%',
                        
                        height : 600
                    }
                ]
            })
        }
        //eof initComponent
    }    
})