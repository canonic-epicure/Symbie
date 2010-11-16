Class('DemoApp.Widget.SpecialOffer', {
    
    isa : Ext.Container,
    
    
    use : [ 'ExtX.Layout.CenterBoth' ],
    
    
    has : {
        slots       : true
    },

    
    before : {
        
        initComponent : function () {
            
            Ext.apply(this, {
                
                layout : 'center-both',
                
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