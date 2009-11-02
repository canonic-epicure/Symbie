Role('Symbie.Router.Meta', {
    
    builder : {
        
        methods : {
            
            connect : function (targetMeta, info) {
            },
            
            
            index : function (targetMeta, info) {
            },
            
            
            root : function (targetMeta, info) {
                this.index.apply(this, arguments)
            },
            
            
            'default' : function (targetMeta, info) {
            },
            
            
            defaultRoute : function (targetMeta, info) {
                this['default'].apply(this, arguments)
            } 
            
        }
        
    }
})