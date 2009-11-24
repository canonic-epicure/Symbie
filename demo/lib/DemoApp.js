Class('DemoApp', {
    
    my : {
    
        isa : 'Symbie.Application',
        
        use : [ 'DemoApp.Widget.Root' ],
        
        
        has : {
            ID                  : 'DemoApp'
            
        },
        
        
        methods : {
            
            seed : function () {
                this.root = new DemoApp.Widget.Root({
                    owner : this
                })
            }
        }
    }
})