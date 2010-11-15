Class('DemoApp.Widget.Root', {
    
    isa : Ext.Viewport,
    
    
    has : {
        app     : {
            required         : true
        },
        
        title   : 'Symbie test application',
        
        layout  : 'card'
    },
    
    
    methods : {
    
        fireResize : function (w, h) {
            this.doLayout()
        }
    }
    
    
})