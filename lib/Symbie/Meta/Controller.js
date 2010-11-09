Role('Symbie.Meta.Controller', {
    
    use : [ 'Symbie.Meta.Route' ],
    
    
    has : {
        controllerInitialized       : false,
        
        prefix          : null,
        
        controllers     : Joose.I.Object,
        config          : Joose.I.Object,
        
        routes          : null,
        routesMC        : Joose.I.FutureClass('Symbie.Meta.Route')
    },
    
    
    methods : {
        
        hasRoute : function (name) {
            return this.stem.properties.routes.haveProperty(name)
        },
        
        
        hasOwnRoute : function (name) {
            return this.stem.properties.routes.haveOwnProperty(name)
        },
        
        
        getRoute : function (name) {
            return this.stem.properties.routes.getProperty(name)
        },
        
        
        getRoutes : function () {
            return this.stem.properties.routes
        }
    },
    
    
    after : {
        
        initInstance : function (instance, config) {
            var controllers = instance.controllers
            
            Joose.O.each(this.controllers, function (params, name) {
                
                controllers[ name ] = new (eval(name))(Joose.O.copy(params, { parent : instance }))
            })
        }
    },
    
    
    before : {
        
        prepareProps : function (props) {
            var does    = props.does    = [].concat(props.does || [])
            
            var config  = this.config   = props.config || {}
            delete props.config
            
            Joose.A.each(Joose.O.wantArray(props.plugins || []), function (pluginsDesc) {
                
                if (typeof pluginsDesc == 'string')
                    does.push(eval(pluginsDesc))
                else
                    Joose.O.each(pluginsDesc, function (params, name) {
                        does.push(eval(name))
                        
                        config[ name ] = params
                    })
            })
            
            delete props.plugins
            
            var controllers = this.controllers
            
            Joose.A.each(Joose.O.wantArray(props.controllers || []), function (value) {
                
                if (typeof value == 'string')
                    controllers[ value ] = {}
                else
                    Joose.O.each(value, function (params, name) {
                        controllers[ name ] = params
                    })
            })
            
            delete props.controllers
        },
        
        
        processStem : function () {
            var superMeta = this.superClass.meta
            
            this.routes = Joose.O.getMutableCopy(superMeta.routes || {})
        }
    },
    
    
    stem : {
        
        after : {
            
            initialize : function () {
                if (!this.controllerInitialized) {
                    
                    this.controllerInitialized  = true
                    this.processOrder           = this.processOrder.concat('routes')
                    
                    var targetMeta              = this.targetMeta
                    
                    //will be Joose.Managed.PropetySet.Mutable
                    this.addProperty('routes', {
                        properties : targetMeta ? targetMeta.routes : {}
                    })
                }
            }
        }
    },
    
    
    builder : {
        
        methods : {
            
            routes : function (meta, info) {
                var routes = meta.stem.properties.routes
                
                Joose.O.each(info, function (props, name) {
                    if (typeof props == 'function') props = {
                        action : props
                    }
                    
                    props.meta = props.meta || meta.routesMC
                    
                    routes.addProperty(name, props)
                })
            },
            
            
            prefix  : function (meta, info) {
                meta.prefix = info
            }
        }
    }
})