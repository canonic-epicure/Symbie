Class('DemoApp.Widget.SpecialOffer', {
    
    xtype   : 'demoapp-widget-specialoffer',
    
    isa : 'Symbie.Widget.Container',
    
    use : [ 'ExtX.Layout.Center' ],
    
    
    has : {
        slots       : true
    },

    
    before : {
        
        initComponent : function () {
            
            Ext.apply(this, {
                
                layout : 'center',
                
                items : [
                    {
                        title : 'Special offer',
                        
                        xtype : 'panel',
                        
                        width : '100%',
                        height : 330,
                        
                        
                        bodyCssClass : 'demoapp-special-offer-body',
                        
                        buttons : [
                            {
                                text : 'Buy'
                            }
                        ],
                        
                        buttonAlign : 'center'
                    }                        
                ]
            })
        }
        //eof initComponent
    }
    
})