Class('Symbie.Context', {
    
    trait : 'JooseX.CPS',
    
    use : [ 'Symbie.Context.Step.Slot', 'Symbie.Context.Step.Widget' ],
    
    
    has : {
        router                  : null,
        
        match                   : null,
        
        queryParameters         : Joose.Object,
        
        steps                   : Joose.Array
    },
    
    
    methods : {
        
        activate : function (className, config) {
            
            if (typeof className != 'string') {
                config = className
                
                className = config.xtype || config.meta
                
                delete config.xtype
                delete config.meta
            }
            
            config = config || {}
            
            this.steps.push(new Symbie.Context.Step({
                context         : this,
                className       : className,
                config          : config
            }))
        },
        
        
        forward : function (actioName) {
        },
        
        
        getParams : function () {
        },
        
        
        getPath : function () {
        },
        
        
        getRoute : function () {
            return this.match.route
        }
        
        
//        eachWidget : function (func, scope, args) {
//            Joose.A.each(this.elements, function (element) {
//                if (element instanceof Symbie.Dispatcher.PathElement.Widget) func.apply(scope || this, args ? [ element ].concat(args) : [ element ])
//            }, this)
//        }
        
        
    },
    
    
    continued : {
        
        methods : {
            
            run : function () {
                var via = this.getRoute().via
                
                via.call(this, this)
                
                this.prepareClasses()
                this.instantiate()
                this.prepareInstances()
                this.activate()
                this.finalize().now()
            },
            
            
            prepareClasses : function () {
            },
            
            
            instantiate : function (callback, scope, args) {
            },
            
            
            prepareInstances : function () {
            },
            
            
            activate : function () {
            },
            
    
            finalize : function () {
            }
            
        }
    }
    
})


//        prepareClasses : function (callback, scope, args) {
//            var depsInfo = []
//            
//            this.eachWidget(function (element) {
//                depsInfo.push(element.token)
//            })
//            
//            use(depsInfo, function () {
//                callback.apply(scope, args)
//            })
//        },
//        
//        
//        instantiate : function (callback, scope, args) {
//            var waitingFor = {}
//            
//            this.eachWidget(function (element) {
//                var widgetClass = eval(element.token)
//                
//                var widgetId = widgetClass.my.constructId(element.params)
//                
//                var widget = Ext.getCmp(widgetId) || new widgetClass(params)
//                
//                waitingFor[widgetId] = widget
//            })
//            
//            
//            Joose.O.each(Joose.O.copy(waitingFor), function (widget) {
//                
//                widget.prepareInstance(this.request, function () {
//                    delete waitingFor[widget.id]
//                    
//                    if (Joose.O.isEmpty(waitingFor)) callback.apply(scope, args)
//                })
//                
//            }, this)
//            
//            request.prepareInstances()
//        },
//        
//        
//        activate : function (callback, scope, args) {
//            var parent = null
//            
//            Joose.A.each(this.elements, function (element) {
//                
//                //1st element
//                if (!parent) parent = element.pickupComponent()
//                
//                
//            }, this)
//        },
