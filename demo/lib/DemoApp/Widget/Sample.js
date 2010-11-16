Class('DemoApp.Widget.Sample', {
    
    isa : Ext.Container,
    
    use : [ 'ExtX.Layout.CenterBoth', 'ExtX.Shotenjin.Container' ],
    
    
    has : {
        slots       : true,
        
        sampleValue : null
    },

    
    before : {
        
        initComponent : function () {
            
            Ext.apply(this, {
                
                layout : 'center-both',
                
                items : [
                    {
                        xtype   : 'ExtX.Shotenjin.Container',
                        slot    : 'centered',
                        
                        cls     : 'demoapp-widget-sample-body',
                        
                        width   : 500,
                        height  : 330,
                        
                        templateData : {
                            value : this.sampleValue
                        },
                        
                        templateSources : {
                            /*tjfile(Sample.html)tjfile*/
                        }

                    }                        
                ]
            })
        }
        //eof initComponent
    },
    
    
    methods : {
        
        touch : function (context) {
            var params = context.getParams()
            
            if (params.value) this.slots.centered.refresh({ value : params.value })
        }
    }
    
})