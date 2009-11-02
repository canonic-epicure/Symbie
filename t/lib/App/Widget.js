Class('App.Widget', {
    
    xtype : 'app-widget',
    
    isa : Ext.Container,
    
    does : [ 'Symbie.Widget' ],
    
    
    id : {
        pkField : null
    },

    
    after : {
        
        onRender : function () {
            this.el.update('App.Widget')
        }
        
    }
    
})