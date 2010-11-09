Class('Symbie.Context', {
    
    trait : 'JooseX.CPS',
    
    has : {
        stash                   : Joose.I.Object,
        
        controller              : { required : true },
        
        match                   : { required : true },
        
        compChain               : Joose.I.Array
    },
    
    
    methods : {
        
        initialize : function () {
            this.controller.getParents(this.compChain)
            
            this.compChain.reverse()
        },
        
        
        getParameters : function () {
            return this.match.parameters
        },
        
        
        getParams : function () {
            return this.getParameters()
        },
        
        
        getParamsOrder : function () {
            return this.match.paramsOrder
        },
        
        
        getParam : function (name) {
            return this.getParameters()[ name ]
        },
        
        
        getPath : function () {
            return this.match.path
        },
        
        
        getRoute : function () {
            return this.match.route
        },
        
        
        eachComp : function (func, scope) {
            return Joose.A.each(this.compChain, func, scope || this)
        },
        
        
        eachCompR : function (func, scope) {
            var compChain = this.compChain
            
            for (var i = compChain.length - 1; i >= 0; i--)
                if (func.call(scope || this, compChain[i], i) === false) return false
        },
        
        
        runACTIVATE : function () {
            
            this.eachComp(function (controller) {
                
                controller.ACTIVATE(this)
            })
        },
        
        
        runFINALIZE : function () {
            
            this.eachCompR(function (controller) {
                
                controller.FINALIZE(this)
            })
        }
        
//        ,
//        redirectTo : function (path) {
//            this.redirected = true
//            
//            var me = this
//            
//            this.router.dispatch({
//                routePath       : path,
//                prevContext     : this
//            }).andThen(function () {
//                
//                this.CONTINUE(me)
//            })
//        }
    },
    
    
    continued : {
        
        methods : {
            
            run : function () {
                var me          = this
                var route       = this.getRoute()
                var controller  = this.controller
                
                if (!route.ready) route.prepare()
                    
                this.runPRE().andThen(function (stop) {
                    
                    if (stop) {
                        this.CONTINUE()
                        
                        return
                    }
                    
                    this.runACTIVATE()      // sync
                    
                    controller.BEGIN(this)  // async
                    
                    route.doExecute(this)     // async
                    
                    controller.END(this).andThen(function () {
                        
                        me.runFINALIZE()    // sync
                        
                        this.CONTINUE()
                    })
                })
            },
            
            
            runPRE : function () {
                
                this.eachComp(function (controller) {
                    
                    controller.PRE(this).then(function (stop) {
                        
                        if (stop === false) 
                            this.RETURN(true)
                        else
                            this.CONTINUE()
                    })
                })
                
                this.NOW()
            }
        }
    }
    
})