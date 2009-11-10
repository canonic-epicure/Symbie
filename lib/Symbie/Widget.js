Role('Symbie.Widget', {
    
    requires : [ 'initComponent' ],
    
    traits : [ 'Symbie.Meta.Widget', 'JooseX.CPS' ],
    
    use : 'Digest.MD5',

    
    has : {
        ID                        : null,
        ownerWidget               : null
    },
    
    
    
    continued : {
    
        methods : {
            
            setup : function () {
                this.CONTINUE()
            },
            
            
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
        
        getRouter : function () {
            return this.ownerWidget.getRouter()
        },
        
        
        getOwnerID : function () {
            return this.ownerWidget.ID
        },
        
        
        computeID : function () {
            this.ID = this.meta.computeID(this.getOwnerID, this)
        }
        
    }
    
})