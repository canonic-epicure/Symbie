Class('App.Widget.Home', {
    
    isa : 'Symbie.Widget.Container',
    
    after : {
        
        onRender : function (ct, position) {
            this.el.update('App.Home')
        }
        
    }
    
})