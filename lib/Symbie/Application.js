Class('Symbie.Application', {
    
    use : 'Symbie',
    
    
    does : [ 'Symbie.ID' ],
    
    
    has : {
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
            debugger
            
            this.root.dispatch(Symbie.my.extractRoutePath()).now()
        },
        
        
        setup : function () {
        }
        
    }
    
})