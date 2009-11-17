Class('Symbie.Application', {
    
    use : 'Symbie',
    
    
    does : [ 'Symbie.ID' ],
    
    
    has : {
        root            : null,
        
        configuration   : null
    },
    
    
    methods : {
        
        run : function (routePath) {
            
            this.setup()
            
            var me = this
            
            Ext.onReady(function() {
                me.onReady(routePath)
            })
        },
        
        
        onReady : function (routePath) {
            this.root.dispatch(routePath).now()
        },
        
        
        setup : function () {
        }
        
    }
    
})