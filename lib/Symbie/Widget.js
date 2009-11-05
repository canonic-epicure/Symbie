Role('Symbie.Widget', {
    
    requires : [ 'initComponent' ],
    
    traits : [ 'Symbie.Meta.Widget', 'JooseX.CPS' ],

    
    has : {
        owner               : null
    },
    
    
    
    continued : {
    
        methods : {
            
            setup : function () {
            },
            
            
            dispatch : function (routePath) {
                var router = this.getRouter()
                
                this.TRY(function () {
                    router.dispatch(routePath)
                })
            }
        }
    },
    //eof continued
    
    
    after : {
        
        initialize : function (props) {
            
            
        }
    },
    
    
    methods : {
        
        getRouter : function () {
            return this.owner.getRouter()
        }
        
    }
    
})