Class('DemoApp.Widget.NotFound', {
    
    xtype   : 'demoapp-widget-notfound',
    
    isa : 'Symbie.Widget.Container',
    
    use : [ 'ExtX.Layout.Center' ],
    

    before : {
        
        initComponent : function () {
            
            Ext.apply(this, {
                
                layout : 'center',
                
                items : [
                    {
                        xtype : 'panel',
                        
                        width : 500,
                        height : 330,
                        
                        title : 'Sorry, this page is missed',
                        
                        bodyCssClass : 'demoapp-not-found-body',
                        
                        buttons : [
                            {
                                text : 'Go back',
                                
                                handler : function () {
                                    history.go(-1)
                                }
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