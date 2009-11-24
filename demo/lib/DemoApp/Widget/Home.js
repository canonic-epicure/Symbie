Class('DemoApp.Widget.Home', {
    
    isa : 'Symbie.Widget.Container',
    
    
    methods : {
        
        onClick : function () {
            this.dispatch('/sample').now()
        }
    },

    
    after : {
        
        onRender : function () {
            this.el.update('DemoApp.Widget.Home')
            
            this.el.on('click', this.onClick, this)
        }
        
    }    
})