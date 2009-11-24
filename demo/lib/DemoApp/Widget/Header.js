Class('DemoApp.Widget.Header', {
    
    isa : 'Symbie.Widget.Container',
    
    
    id : {
        headerPk : null
    },
    
    
    has : {
        slots       : true
    },

    
    after : {
        
        onRender : function () {
            this.el.update('Header')
        }
        
    }
    
})