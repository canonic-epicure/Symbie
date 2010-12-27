Class('Symbie.Application', {
    
    isa     : 'Symbie.Controller',
    

    has : {
        parent                  : null,
        prefix                  : '/'
    },
    
    
    methods : {
        
    },
    
    
    continued : {
        
        methods : {
            
            launch : function (path) {
                this.dispatch(path).now()
            },
            
            
            run : function (path) {
                this.setup()
                
                this.launch(path || '/').now()
            }
        }
    }
    
})