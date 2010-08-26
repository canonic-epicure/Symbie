Role('Symbie.Widget', {
    
    requires : [ 'initComponent' ],
    
    traits : [ 'Symbie.Meta.Widget', 'JooseX.CPS' ],
    
    does : [ 'Symbie.ID' ],

    
    
    methods : {
        
        touch : function (context, step) {
        },
        
        
        getRouter : function () {
            return this.owner.getRouter()
        }
    },
    
    
    continued : {
    
        methods : {
            
            dispatch : function (routePath) {
                this.getRouter().dispatch(routePath).now()
            },
            
            
            setup : function (context, step) {
                this.CONTINUE()
            }
        }
    }
})