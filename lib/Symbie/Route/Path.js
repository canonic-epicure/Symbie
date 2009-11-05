//Class('Symbie.Dispatcher.Path', {
//    
//    use : [
//        'Symbie.Dispatcher.PathElement.Widget',
//        'Symbie.Dispatcher.PathElement.Slot',
//        'Symbie.Dispatcher.PathElement.Root'
//    ],
//
//    
//    has : {
//        dispatcher      : null,
//        request         : null,
//        
//        elements        : Joose.Array,
//        
//        path            : null
//    },
//    
//    
//    methods : {
//        
//        setPath : function (path) {
//            var elements = this.elements
//            
//            if (path.match(/^\//)) {
//                elements.push(new Symbie.Dispatcher.PathElement.Root({
//                    path : this
//                }))
//                
//                path = path.replace(/^\//, '')
//            }
//            
//            var match, params
//            
//            Joose.A.each(path.split('/'), function (part) {
//                
//                if (match = /(.*)\((.+)\)$/.exec(part)) {
//                    params = Ext.decode(match[2])
//                    part = match[1]
//                }
//                
//                if (part.match(/^\./)) 
//                    elements.push(new Symbie.Dispatcher.PathElement.Slot({
//                        path : this,
//                        token : part.replace(/^\./, ''),
//                        params : params
//                    }))
//                else
//                    elements.push(new Symbie.Dispatcher.PathElement.Widget({
//                        path : this,
//                        token : part,
//                        params : params
//                    }))
//            }, this)
//        },
//        
//        
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
//        
//        
//        eachWidget : function (func, scope, args) {
//            Joose.A.each(this.elements, function (element) {
//                if (element instanceof Symbie.Dispatcher.PathElement.Widget) func.apply(scope || this, args ? [ element ].concat(args) : [ element ])
//            }, this)
//        }
//        
//    }
//    
//})