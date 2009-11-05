Role('Symbie.Router.Meta', {
    
    have : {
        routesMC      : Symbie.Router.Property.Route
    },
    
    
    after : {
        
        processStem : function () {
            this.addRole(Symbie.Router.Default)
        }
    },
    
    
    stem : {
        
        after : {
            
            initialize : function () {
                this.processOrder = this.processOrder.concat('routes')
                
                this.addProperty('routes', {
                    meta : Joose.Managed.PropertySet.Mutable
                })
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
    },
    
    
    
})