Class('Symbie.Context.Step.Widget', {
    
    isa : 'Symbie.Context.Step',
    
    has : {
        className       : null,
        classVersion    : null,
        config          : null
    },
    
    
    methods : {
        
        getDependencies : function () {
            if (this.classVersion) {
                var dependency = {}
                
                dependency[this.className] = this.classVersion
            } else
                var dependency = this.className
                
            return [ dependency ]
        },
        
        
        prepare : function () {
        },
        
        
        process : function () {
        },

        
        finalize : function () {
        }
    }
})