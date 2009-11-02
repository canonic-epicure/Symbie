Role('Symbie.Application', {
    
    methods : {
        
        run : function () {
            this.setup()
            
            var me = this
            
            Ext.onReady(function() {
                me.onReady()
            })
        },
        
        
        onReady : function () {
//            var route = this.initialRoute || Util.Cookies.my.get(this.name + '_current_route')
//            
//            this.dispatch(route)
        },
        
        
        
    }
    
})