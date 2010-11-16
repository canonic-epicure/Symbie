Class('DemoApp.Widget.Root', {
    
    isa : Ext.Viewport,
    
    
    has : {
        slots   : true,
        
        app     : {
            required         : true
        },
        
        title   : 'Symbie test application',
        
        layout      : 'card',
        activeItem  : 0
    },
    
    
    methods : {
    
        fireResize : function (w, h) {
            this.doLayout()
        }
    }
    
    
})