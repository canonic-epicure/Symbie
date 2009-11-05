Role('Symbie.Router.Meta', {
    
    use : [ 'Symbie.Router.Property.Route' ],
    
    
    has : {
        routesMC      : Joose.FutureClass('Symbie.Router.Property.Route')
    },
    
    
    stem : {
        
        after : {
            
            initialize : function () {
                this.processOrder = this.processOrder.concat('routes')
                
                this.addProperty('routes', {})
                
                debugger
                
                this.ROUTES_ADDED = true
            }
        }
    },
    
    
    builder : {
        
        methods : {
            
            routes : function (meta, info) {
                Joose.O.each(info, function (value, name) {
                    value.meta = value.meta || meta.routesMC
                    
                    meta.stem.properties.routes.addProperty(name, value)
                })
            }
        }
    }
    
    
    
})