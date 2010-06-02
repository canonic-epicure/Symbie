Class('Symbie.Meta.Route.Token', {
    
    has : {
        token               : null,
        
        specificity         : 0
    },
    
    
    methods : {
        
        match : function (token) {
            throw "Abstract method 'match' was called on [" + this + "]"
        },
        
        
        asString : function () {
            throw "Abstract method 'asString' was called on [" + this + "]"
        }
    }
    
})


;
Class('Symbie.Meta.Route.Token.Parameter', {
    
    isa : 'Symbie.Meta.Route.Token',
    
    has : {
        name                : null,
        
        specificity         : 50,
        
        regex               : { required : true }
    },
    
    
    methods : {
        
        match : function (token) {
            return this.regex.exec(token)
        },
        
        
        asString : function (parameters) {
            var parameterValue = parameters && parameters[this.name]
            
            if (!parameterValue) throw "Parameter [" + this.token + "] wasn't supplied during token stringification"
            
            if (!this.regex.test(parameterValue)) throw "Supplied parameter [" + parameterValue + "] don't match the required regular expression in 'where'"
            
            return parameterValue
        }
    }
    
})


;
Class('Symbie.Meta.Route.Token.String', {
    
    isa : 'Symbie.Meta.Route.Token',
    
    has : {
        specificity         : 100
    },
    
    
    methods : {
        
        match : function (token) {
            return token == this.token
        },
        
        
        asString : function () {
            return this.token
        }
    }
    
})


;
Class('Symbie.Meta.Route.Token.Root', {
    
    isa : 'Symbie.Meta.Route.Token.String',
    
    has : {
        token               : ''
    }
    
})


;
Class('Symbie.Meta.Route.Token.WildCard', {
    
    isa : 'Symbie.Meta.Route.Token',
    
    has : {
        token               : '*',
        
        specificity         : 25
    },
    
    
    methods : {
        
        match : function (token) {
            return true
        },
        
        
        asString : function (parameters) {
            var path = parameters && parameters.path
            
            if (path instanceof Array) path = path.join('/')
            
            return path
        }
    }
    
})


;
Class('Symbie.Meta.Route.Match', {
    
    has : {
        route                   : null,
        
        currentTokenIndex       : 0,
        
        parameters              : Joose.I.Object,
        
        path                    : Joose.I.Array
    },
    
    
    methods : {
        
        consumeToken : function (token) {
            var currentToken = this.route.tokens[this.currentTokenIndex]
            
            if (currentToken instanceof Symbie.Meta.Route.Token.WildCard) {
                this.path.push(token)
                
                return true
            }
            
            this.currentTokenIndex++
            
            if (currentToken instanceof Symbie.Meta.Route.Token.String)
                return currentToken.match(token)
            
            if (currentToken instanceof Symbie.Meta.Route.Token.Parameter) {
                var match = currentToken.match(token)
                
                if (match) {
                    var paramName = currentToken.name
                    var parameters = this.parameters
                    
                    if (match[1] != null && match[2] != null) 
                        parameters[paramName] = match
                    else
                        if (match[1] != null)
                            parameters[paramName] = match[1]
                        else
                            parameters[paramName] = token
                }
                
                return match
            }
            
            return false
        },
        
        
        compareBySpecificity : function (another) {
            
            var thisTokens      = this.route.tokens
            var anotherTokens   = another.route.tokens
            
            if (thisTokens.length < anotherTokens.length) return -1
            if (thisTokens.length > anotherTokens.length) return 1
            
            for (var i = 0; i < thisTokens.length; i++ ) {
                
                var specDiff = thisTokens[i].specificity - anotherTokens[i].specificity
                
                if (specDiff) return specDiff
            }
            
            return 0
        }
    }
    
})
;
Class('Symbie.Meta.Route', {
    
    meta : Joose.Meta.Class,
    
    isa : Joose.Managed.Property,
    
    use : [ 'Symbie.Meta.Route.Token.String', 'Symbie.Meta.Route.Token.Root', 'Symbie.Meta.Route.Token.Parameter', 'Symbie.Meta.Route.Token.WildCard' ],
    
    
    has : {
        mapTo                   : null,
        
        where                   : null,
        
        via                     : null,
        
        tokens                  : Joose.I.Array
    },
    
    
    after : {
        
        initialize : function (properties) {
            //Joose.Managed.Property do not inherit from Joose.Meta.Object, need to call this for advanced attributes initialization
            Joose.Meta.Object.prototype.initialize.call(this, properties)
            
            var tokens = typeof this.mapTo == 'string' && this.mapTo.split('/') || []
            
            Joose.A.each(tokens, function (token, index) {
                this.tokens.push(this.createToken(token, index))
            }, this)
        }
    },
    
    
    methods : {
        
        createToken : function (token, index) {
            if (token == '' && !index)      return new Symbie.Meta.Route.Token.Root()
            
            if (/^\*/.test(token))          return new Symbie.Meta.Route.Token.WildCard()
            
            if (/^:/.test(token)) {
                var name = /^:(.*)/.exec(token)[1]
                
                var regex = this.where && this.where[name] || /(.*)/
                
                return new Symbie.Meta.Route.Token.Parameter({ token : token, name : name, regex : regex })
            }
            
            return new Symbie.Meta.Route.Token.String({ token : token })
        },
        
        
        prepareApply : function (target) {
        },
        
        
        apply : function (target) {
        },
        
        
        unapply : function (from) {
        },
        
        
        asString : function (parameters) {
            var res = []
            
            Joose.A.each(this.tokens, function (token, index) {
                var str = token.asString(parameters)
                
                if (str != null) res.push(str)
            })
            
            return res.join('/')
        }
    }
    
})
;
Role('Symbie.Meta.Router', {
    
    use : [ 'Symbie.Meta.Route' ],
    
    
    has : {
        routes        : null,
        routesMC      : Joose.I.FutureClass('Symbie.Meta.Route')
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
        }
    },
    
    
    before : {
        processStem : function () {
            var superMeta = this.superClass.meta
            
            this.routes = Joose.O.getMutableCopy(superMeta.routes || {})
        }
    },
    
    
    stem : {
        
        after : {
            
            initialize : function () {
                this.processOrder = this.processOrder.concat('routes')
                
                var targetMeta = this.targetMeta
                
                //will be Joose.Managed.PropetySet.Mutable
                this.addProperty('routes', {
                    properties : targetMeta ? targetMeta.routes : {}
                })
            }
        }
    },
    
    
    builder : {
        
        methods : {
            
            routes : function (meta, info) {
                var routes = meta.stem.properties.routes
                
                Joose.O.each(info, function (value, name) {
                    value.meta = value.meta || meta.routesMC
                    
                    routes.addProperty(name, value)
                })
            }
        }
    }
});
Role('Symbie.Meta.Widget', {
    
});
Role('Symbie.Meta.ID', {
    
    use : 'Digest.MD5',
    
    
    has : {
        idDefinition : Joose.I.Array
    },
    
    
    builder : {
        
        methods : {
            
            id : function (targetMeta, info) {
                
                var id      = targetMeta.idDefinition
                var props   = {}
                
                Joose.O.each(info, function (value, name) {
                    if (typeof value != 'object' || value == null) value = { init : value }
                    
                    value.required = true
                    props[name] = value
                    
                    id.push(name)
                })
                
                this.has(targetMeta, props)
                
                id.sort()
            }
        }
    },
    
    
    methods : {
        
        computeID : function (ownerID, source) {
            var idMaterial = this.name + ':' + ownerID
            
            Joose.A.each(this.idDefinition, function (attrName) {
                idMaterial += ':' + source[attrName]
            }, this)
            
            return Digest.MD5.my.md5_hex(idMaterial)
        }
        
    }
});
Role('Symbie.ID', {
    
    traits : [ 'Symbie.Meta.ID' ],
    

    has : {
        ID                        : null,
        owner                     : null
    },
    
    
    methods : {
        
        computeID : function () {
            this.ID = this.meta.computeID(this.owner.ID, this)
        }
        
    }
    
});
Role('Symbie.Router.Default', {
    
    trait : 'Symbie.Meta.Router',
    
    
    routes : {
        
        'default' : {
            
            mapTo : '/*',
                
            via : function (context) {
                throw "Route [" + context.getRoute().mapTo + "] was mapped to abstract route" 
            }
        }
        
    }
       
})
;
Class('Symbie.Context.Step', {
    
    trait : 'JooseX.CPS',
    
    has : {
        context         : { required : true },
        
        parent          : null,
        childSteps      : Joose.I.Array
    },
    
    
    methods : {
        
        addChild : function (step) {
            step.parent = this
            
            this.childSteps.push(step)
            
            return step
        },
        
        
        each : function (func, scope) {
            func.call(scope || this, this)
            
            Joose.A.each(this.childSteps, function (step) {
                step.each(func, scope)
            })
        },
        
        
        eachR : function (func, scope) {
            var childSteps = this.childSteps
            
            for (var i = childSteps.length - 1; i >= 0; i--) childSteps[i].eachR(func, scope)
                
            func.call(scope || this, this)
        },
        
        
        getUsedClasses : function () {
            return []
        },
          
        
        prepareStepSync : function () {
        },
        
        
        activateStep : function () {
            throw "Abstract method 'activateStep' was called on [" + this + "]"
        },

        
        finalizeStep : function () {
        },
        
        
        mark : function (markName) {
            this.context.saveMark(markName, this)
            
            return this
        }
    },
    
    
    continued : {
        
        methods : {
            
            prepareStepAsync : function () {
                this.CONTINUE()
            }
        }
    }
    
});
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
                
                widget.setup(this)
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
                        //XXX workthrough the highlighting (just fire event instead?)
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
        
        
    }
});
Class('Symbie.Context.Step.Slot', {
    
    isa : 'Symbie.Context.Step.Widget',
    
    has : {
        slotName       : null
    },
    
    
    methods : {
        
        getContainer : function () {
            return this.container
        },
        
        
        setContainer : function (value) {
            this.container = value
        },
        
        
        getWidget : function () {
            return this.parent.getWidget()
        },
        
        
        setWidget : function () {
            throw "Step [" + this + "] can't contain widgets"
        },
        
        
        getUsedClasses : function () {
            return []
        },
        
        
        prepareStepSync : function () {
            var container   = this.parent.getContainer()
            var slotName    = this.slotName
            
            if (!container.slots) throw "Container [" + container + "] have no slots"
            
            var slot = container.slots[slotName]
            
            if (!slot) throw "Container [" + container + "] have no [" + slotName + "] slot"
            
            this.container = slot
            
            if (slot.meta.does(Symbie.Widget)) slot.touch(this)
        }
        
    }
    
});
Class('Symbie.Context.Step.Root', {
    
    isa : 'Symbie.Context.Step.Widget',
    
    
    methods : {
        
        getUsedClasses : function () {
            return []
        },
        
        
        prepareStepSync : function () {
            this.widget = this.context.router.root
        },
        
        
        activateStep : function () {
        },

        
        finalizeStep : function () {
            this.widget.doLayout()
        }
        
    }
});
Class('Symbie.Context', {
    
    trait : 'JooseX.CPS',
    
    use : [ 'Symbie.Context.Step.Slot', 'Symbie.Context.Step.Widget', 'Symbie.Context.Step.Root' ],
    
    
    has : {
        router                  : null,
        routePath               : null,
        
        match                   : null,
        
        queryParameters         : { is : 'rw', init : Joose.I.Object },
        
        stepsRoot               : function () {
            return new Symbie.Context.Step.Root({
                context : this
            })
        },
        
        marks                   : Joose.I.Object
    },
    
    
    methods : {
        
        saveMark : function (name, step) {
            var marks = this.marks
            
            if (marks[name]) throw "Mark [" + name + "] is already used"
            
            marks[name] = step
        },
        
        
        getMark : function (name) {
            return this.marks[name]
        },
        
        
        getParameters : function () {
            return this.match.parameters
        },
        
        
        getParams : function () {
            return this.getParameters()
        },
        
        
        getPath : function () {
            return this.match.path
        },
        
        
        getRoute : function () {
            return this.match.route
        },
        
        
        getRoot : function () {
            return this.stepsRoot
        },
        
        
        each : function (func, scope) {
            this.stepsRoot.each(func, scope)
        },
        
        
        eachR : function (func, scope) {
            this.stepsRoot.eachR(func, scope)
        },
        
        
        prepareStepsSync : function () {
            this.each(function (step) {
                step.prepareStepSync()
            })
        },
        
        
        activateSteps : function () {
            this.each(function (step) {
                step.activateStep()
            })
        },
        

        finalizeSteps : function () {
            this.eachR(function (step) {
                step.finalizeStep()
            })
        }
    },
    
    
    continued : {
        
        methods : {
            
            run : function () {
                this.stepsRoot.collectFromRoute(this.getRoute())
                
                this.prepareClasses()
                    
                this.prepareSteps()
                
                this.THEN(function () {
                    
                    this.activateSteps()
                    this.finalizeSteps()
                    
                    this.CONTINUE(this)
                }).NOW()
            },
            
            
            prepareClasses : function () {
                var classes = []
                
                this.each(function (step) {
                    classes.push.apply(classes, step.getUsedClasses())
                })
                
                use(classes, this.getCONTINUE())
            },
            
            
            prepareSteps : function () {
                this.prepareStepsSync()
                
                this.CONTINUE()

//XXX add 'AND' to JooseX.CPS
//                this.each(function (step) {
//                    this.AND(step.prepareStepAsync())
//                }, this)
//                
//                this.NOW()
                
            }
        }
    }
    
});
Class('Symbie.Router', {
    
    isa     : Ext.util.Observable,
    
    meta    : JooseX.Bridge.Ext,

    
    traits      : [ 'Symbie.Meta.Router', 'JooseX.CPS' ],
    
    does        : [ 'Symbie.Router.Default' ],
    
    use         : [ 'Symbie.Context', 'Symbie.Meta.Route.Match' ],
    
    
    has : {
        root                    : { is : 'rw', required : true },
        
        contextClass            : Joose.I.FutureClass('Symbie.Context'),
        matchClass              : Joose.I.FutureClass('Symbie.Meta.Route.Match')
    },
    
    
    after : {
        initialize : function () {
            this.addEvents('dispatchException')
        }
    },
    
    
    methods : {
        
        setup : function () {
        },
        
        
        getRoute : function (name) {
            return this.meta.getRoute(name)
        },
        
        
        getRoutes : function () {
            return this.meta.stem.properties.routes
        },
        
        
        getMatchesPopulation : function (maxLength) {
            var matches = []
            
            this.getRoutes().each(function (route) {
                
                var length = route.tokens.length
                
                if (0 < length && length <= maxLength) matches.push(new this.matchClass({
                    route   : route    
                }))
                
            }, this)
            
            return matches
        },
        
        
        filterMatches : function (token, matches) {
            
            var filtered = []
            
            Joose.A.each(matches, function (match) {
                
                var survived = match.consumeToken(token)
                
                if (survived) filtered.push(match)
            })
            
            return filtered
        },
        
        
        findMatches : function (routePath) {
            var tokens = routePath.split('/')
            
            var matches = this.getMatchesPopulation(tokens.length)
            
            Joose.A.each(tokens, function (token) {
                matches = this.filterMatches(token, matches)
            }, this)
            

            return matches
        },
        
        
        findMatch : function (routePath) {
            var matches = this.findMatches(routePath)
            
            if (!matches.length) throw "Can't find route for the path [" + routePath + "]"
            
            matches.sort(function (matchA, matchB) {
                return matchB.compareBySpecificity(matchA)
            })
                
            if (matches.length > 1 && matches[0].compareBySpecificity(matches[1]) == 0) throw "Ambiguous route match"
                
            return matches[0]
        }
        
    },
    
    
    continued : {
    
        methods : {

            
            launch : function (initialPath) {
                this.setup()
                
                this.dispatch(initialPath).now()
            },
            
            
            dispatch : function (params) {
                var routePath
                
                if (typeof params == 'string')
                    routePath = params
                else
                    routePath = params.routePath
                
                //extracting trailing parameteres after '?'
                var res = /([^\?]*)(?:\?(.*))?/.exec(routePath)
                
                routePath   = res[1]
                var params  = Ext.urlDecode(res[2] || '')
                delete params['']
                
                try {
                    var routeMatch = this.findMatch(routePath)
                } catch (exception) {
                    
                    if (this.fireEvent('dispatchException', this, exception) !== false) 
                        throw exception
                    else
                        return
                }
                
                var context = new this.contextClass({
                    router              : this,
                    match               : routeMatch,
                    
                    queryParameters     : params,
                    routePath           : routePath
                })
                
                context.run().CATCH(function (exception) {
                    
                    if (this.fireEvent('dispatchException', this, exception, context) !== false) 
                        this.THROW(exception)
                    else
                        this.CONTINUE()
                    
                }, this).now()
            }
            
        }
    }
    
    
})
;
Role('Symbie.Widget', {
    
    requires : [ 'initComponent' ],
    
    traits : [ 'Symbie.Meta.Widget', 'JooseX.CPS' ],
    
    does : [ 'Symbie.ID' ],
    
    
    continued : {
    
        methods : {
            
            dispatch : function (routePath) {
                this.getRouter().dispatch(routePath).now()
            }
        }
    },
    
    
//    after : {
//        
//        initialize : function (props) {
//            
//            
//        }
//    },
    
    
    methods : {
        
        touch : function (step) {
        },
        
        
        setup : function (step) {
        },
            
            
        getRouter : function () {
            return this.owner.getRouter()
        }
        
//        ,
//        highlight : function () {
//            this.getEl().highlight()
//        }
    }
    
});
Class('Symbie', {
    
    my : {
        
        methods : {
            
        }
    }
    
});
Class('Symbie.Application', {
    
    isa     : Ext.util.Observable,
    
    meta    : JooseX.Bridge.Ext,
    
    trait   : 'JooseX.CPS',
    
    does    : [ 'Symbie.ID' ],
    
    use     : 'Symbie',
    
    
    has : {
        root            : null
    },
    
    
    methods : {
        
        setup : function () {
            this.seed()
        },
        
        
        //'root' should be instantiated here
        seed  : function () {
            throw "Abstract 'seed' method of [" + this + "] was called" 
        }
        
    },
    
    
    continued : {
        
        methods : {
            
            dispatch : function (routePath) {
                this.root.dispatch(routePath).now()
            },
            
            
            launch : function (routePath) {
                this.root.launch(routePath).now()
            },
        
        
            run : function (routePath) {
                this.setup()
                
                var me = this
                
                // Seems Ext won't fire 'onReady' if its loaded already after 'onload' event (which is the case during debugging)
                // Should be addressed in Ext itself 
                if (this.__DOM_READY__)
                    me.launch(routePath).now()
                else
                    Ext.onReady(function() {
                        me.launch(routePath).now()
                    })
            }
        }
    }
});
