Class('Symbie.Router.Meta', {
    
    meta : Joose.Meta.Class,
    
    isa  : Joose.Meta.Class,
    
    
    builder : {
        
        methods : {
            
            connect : function (meta, info) {
            },
            
            
            index : function (meta, info) {
            },
            
            
            root : function (meta, info) {
                this.index.apply(this, arguments)
            },
            
            
            'default' : function (meta, info) {
            },
            
            
            defaultRoute : function (meta, info) {
                this['default'].apply(this, arguments)
            } 
            
        }
        
    }
})