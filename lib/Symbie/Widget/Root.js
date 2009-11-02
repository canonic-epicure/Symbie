Role('Symbie.Widget.Root', {
    
    does : [ 'Symbie.Widget' ],
    
    has : {
        routerClass         : null
    },
    
    
    after : {
        initialize : function () {
            this.router = new this.routerClass({
                root : this
            })
        }
    },
    
    
    methods : {
        
        getRouter : function () {
            return this.router
        },
        
        
        getOwner : function () {
        }
        
    }
    
    
})
