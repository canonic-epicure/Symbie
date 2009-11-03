Role('Symbie.Widget.Root', {
    
    does : [ 'Symbie.Widget' ],
    
    has : {
        routerClass         : null
    },
    
    
    after : {
        initialize : function () {
        }
    },
    
    
    methods : {
        
        getRouter : function () {
            return new this.routerClass({
                root : this
            })
        },
        
        
        getOwner : function () {
        }
        
    }
    
    
})
