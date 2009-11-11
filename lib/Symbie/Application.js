Class('Symbie.Application', {
    
    use : 'Symbie',
    
    
    does : [ 'Symbie.ID' ],
    
    
    has : {
        root            : null
    },
    
    
    methods : {
        
        run : function (routePath) {
            
            this.setup()
            
            var me = this
            
            Ext.onReady(function() {
                me.onReady(routePath).now()
            })
        },
        
        
        //XXX not from root use case
        onReady : function (routePath) {
            return this.root.dispatch(routePath)
        },
        
        
        setup : function () {
        }
        
    }
    
})