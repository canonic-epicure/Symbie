Class('App', {
    
    my : {
    
        isa : 'Symbie.Application',
        
        use : 'App.Root',
    
        
        methods : {
            
            setup : function () {
                this.root = new App.Root()
            }
        }
    }
})