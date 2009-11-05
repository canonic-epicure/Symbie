Class('App', {
    
    my : {
    
        isa : 'Symbie.Application',
        
        use : [ 'App.Widget.Root' ],
        
        has : {
            id      : 'App'
        },
        
        methods : {
            
            setup : function () {
                this.root = new App.Widget.Root()
            }
        }
    }
})