Class('Symbie.Context.Step.Widget', {
    
    isa : 'Symbie.Context.Step',
    
    has : {
        className       : null,
        classVersion    : null,
        config          : null,
        
        widget          : { is : 'rw' },
        container       : { is : 'rw' }
    },
    
    
    methods : {
        
        collectFrom : function (routeName) {
            var route = this.context.router.getRoute(routeName)
            
            this.collectFromRoute(route)
        },
        
        
        collectFromRoute : function (route) {
            var via = route.via
            
            via.call(this, this.context, this)
        },
        
        
        getContainer : function () {
            return this.widget
        },
        
        
        setContainer : function (value) {
            this.setWidget(value)
        },
        
        
        getUsedClasses : function () {
            if (this.classVersion) {
                var dependency = {}
                
                dependency[this.className] = this.classVersion
            } else
                var dependency = this.className
                
            return [ dependency ]
        },
        
        
        prepareStepSync : function () {
            var widgetClass     = eval(this.className)
            var meta            = widgetClass.meta
            
            if (meta instanceof Joose.Namespace.Keeper) throw "Class of widget [" + this.className + "] was not loaded"
            
            var ID = meta.computeID(this.parent.getWidget().ID, this.config)
            
            var container = this.parent.getContainer()
            
            var widget = container.items && container.items.find(function (item) { return item.ID == ID })
            
            if (!widget) {
                widget = new widgetClass(this.config)
                
                widget.owner = this.parent.getWidget()
                
                widget.computeID()
                
                container.add(widget)
            } 
            
            widget.touch(this.context, this)
            
            this.widget = widget
        },
        
        
        activateStep : function () {
            var widgetAsContainer = this.getContainer()
            
            var isLeaf = !this.childSteps.length
            
            if (widgetAsContainer instanceof Ext.Window) 
                widget.show()
            else {                    
                var layout = this.parent.getContainer().getLayout()
                
                if (layout.meta.hasMethod('setActiveItem'))
                    if (layout.activeItem != widgetAsContainer)
                        layout.setActiveItem(widgetAsContainer)                    
                    else 
                        //XXX highlight (just fire event instead?)
                        if (isLeaf) widgetAsContainer.getEl().highlight()
            }
        },

        
        finalizeStep : function () {
        },
        
        
        findOrCreate : function () {
            return this.activate.apply(this, arguments)
        },
        
        
        activate : function (className, config) {
            var classVersion
            
            if (typeof className != 'string') {
                config = className
                
                className = config.xtype || config.meta
                classVersion = config.VERSION
                
                delete config.xtype
                delete config.meta
                delete config.VERSION
            }
            
            config = config || {}
            
            return this.addChild(new Symbie.Context.Step.Widget({
                context         : this.context,
                
                className       : className,
                classVersion    : classVersion,
                config          : config
            }))
        },
        
        
        slot : function (slotName, config) {
            return this.addChild(new Symbie.Context.Step.Slot({
                context         : this.context,
                
                slotName        : slotName,
                
                config          : config
            }))
        },
        
        
        slotAndMark : function (slotMarkName, config) {
            return this.slot(slotMarkName, config).mark(slotMarkName)
        }
    },

    
    continued : {
        
        methods : {
            
            prepareStepAsync : function () {
                this.getWidget().setup(this.context, this).now()
            }
        }
    }
})