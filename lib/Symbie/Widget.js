Role('Symbie.Widget', {
    
    requires : [ 'initComponent' ],
    
    traits : [ 'Symbie.Meta.Widget', 'JooseX.CPS' ],
    
    does : [ 'Symbie.ID' ],
    
    
    continued : {
    
        methods : {
            
            dispatch : function (routePath) {
                var router = this.getRouter()
                
                router.attachScope(this).dispatch(routePath).now()
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
        
        setup : function (context) {
        },
            
            
        getRouter : function () {
            return this.owner.getRouter()
        },
        
        
        highlight : function () {
            this.getEl().highlight()
        }
    }
    
})