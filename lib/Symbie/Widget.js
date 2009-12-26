Role('Symbie.Widget', {
    
    requires : [ 'initComponent' ],
    
    traits : [ 'Symbie.Meta.Widget', 'JooseX.CPS' ],
    
    does : [ 'Symbie.ID' ],
    
    
    continued : {
    
        methods : {
            
            dispatch : function (routePath) {
                this.getRouter().dispatch(routePath).now()
            }
        }
    },
    
    
//    after : {
//        
//        initialize : function (props) {
//            
//            
//        }
//    },
    
    
    methods : {
        
        touch : function (step) {
        },
        
        
        setup : function (step) {
        },
            
            
        getRouter : function () {
            return this.owner.getRouter()
        }
        
//        ,
//        highlight : function () {
//            this.getEl().highlight()
//        }
    }
    
})