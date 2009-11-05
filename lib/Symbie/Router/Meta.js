Role('Symbie.Router.Meta', {
    
    stem : {
        
        has : {
            routesMC      : Symbie.Router.Property.Route
        },
        
        
        after : {
            
            initialize : function () {
                this.processOrder = this.processOrder.concat('routes')
                
                this.addProperty('routes', {
                    meta : this.routesMC
                })
            }
        }
    },
    
    
    builder : {
        
        methods : {
            
            routes : function (meta, info) {
                
                
                
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