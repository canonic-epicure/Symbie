Class('App', {
    
    my : {
    
        isa : 'Symbie.Application',
        
        use : 'App.Widget.Root',
    
        
        methods : {
            
            setup : function () {
                this.root = new App.Widget.Root()
            }
        }
    }
})