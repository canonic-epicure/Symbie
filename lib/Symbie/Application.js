Class('Symbie.Application', {
    
    trait   : 'JooseX.CPS',
    
    does    : [
        'JooseX.Observable',
        'Symbie.Router'
    ],
    
    
    has : {
        name            : 'Symbie.Application'
    },
    
    
    methods : {
        
        setup : function () {
        }
    },
    
    
    continued : {
        
        methods : {
            
            run : function (routePath) {
                this.setup()
                
                this.dispatch(routePath || '/')
            }
        }
    }
})