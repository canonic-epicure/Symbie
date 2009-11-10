Class('Symbie.Application', {
    
    use : 'Symbie',
    
    
    has : {
        
        ID              : null,
        
        root            : null
    },
    
    
    methods : {
        
        run : function () {
            this.setup()
            
            var me = this
            
            Ext.onReady(function() {
                me.onReady()
            })
        },
        
        
        //XXX not from root use case
        onReady : function () {
            this.root.dispatch(Symbie.my.extractRoutePath())
        },
        
        
        setup : function () {
        }
        
    }
    
})