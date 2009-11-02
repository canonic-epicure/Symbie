Class('App.Widget', {
    
    xtype : 'app-widget',
    
    isa : Ext.Container,
    
    does : [ 'Symbie.Widget' ],
    
    
    id : {
        pkField : null
    },

    
    after : {
        
        initComponent : function () {
            this.on('click', this.onClick, this)
        },
        
        
        onClick : function () {
            this.router.dispatch('all-pictures', {
                fromDate : '01.10.10',
                toDate : '11.11.12'
            })
        },
        
        
        onRender : function () {
            this.el.update('App.Widget')
        }
        
    }
    
})