Class('DemoApp.Widget.Root', {
    
    isa : Ext.Viewport,
    
    does : 'Symbie.Widget.Root',
    
    use : [ 'DemoApp.Router' ],
    
    
    has : {
        routerClass : Joose.FutureClass('DemoApp.Router'),
        
        title : 'Symbie test application',
        
        layout : 'card'
    },
    
    
    methods : {
    
        fireResize : function (w, h) {
            this.doLayout()
        }
    }
    
    
})