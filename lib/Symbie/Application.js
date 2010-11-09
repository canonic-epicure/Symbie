JooseX.Namespace.Depended.meta.extend({
    
    methods : {
        
        symbieCollect : function (data, deps) {
            Joose.A.each(Joose.O.wantArray(data), function (desc) {
                
                if (typeof desc == 'string')
                    deps.push(desc)
                else
                    Joose.O.each(desc, function (params, name) {
                        deps.push(name)
                    })
            })
        }
        
    },
    
    
    after : {
        
        alsoDependsFrom : function (extend, summaredDeps) {
            
            if (extend.plugins)         this.symbieCollect(extend.plugins, summaredDeps)
            if (extend.controllers)     this.symbieCollect(extend.controllers, summaredDeps)
        }
    }
})




Class('Symbie.Application', {
    
    isa     : 'Symbie.Controller',
    

    has : {
        parent                  : null,
        prefix                  : '/'
    },
    
    
    methods : {
        
    },
    
    
    continued : {
        
        methods : {
            
            launch : function (path) {
                this.dispatch(path || '/').now()
            },
            
            
            run : function (path) {
                this.setup()
                
                this.launch(path || '/').now()
            }
        }
    }
    
})