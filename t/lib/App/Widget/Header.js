Class('App.Widget.Header', {
    
    xtype : 'app-widget-header',
    
    isa : 'Symbie.Widget.Container',
    
    
    id : {
        headerPk : null
    },
    
    
    has : {
        slots       : true,
        
        touchCalled : false
    },

    
    after : {
        
        onRender : function () {
            this.el.update('Header')
        }
        
    },
    
    
    methods : {
        
        touch : function (step) {
            this.touchCalled = true
        }
    }
    
})