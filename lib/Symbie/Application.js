Class('Symbie.Application', {
    
    meta : Joose.Meta.Class,
    
    isa : Ext.util.Observable,
    
    use : [ 'Symbie.Dispatcher' ],
    
    
    have : {
        name : null,
        
        dispatcher : null
    },
    
    
    constructor : function () {
        arguments.callee.meta.superClass.apply(this, arguments)
        
        this.addEvents('dispatch')
        
        //a piece of hack..
        Joose.Meta.Object.prototype.initialize.apply(this, arguments)
        
        this.initialize.apply(this, arguments)
    },
    
    
    methods : {
        
        initialize : function () {
            this.dispatcher = new Symbie.Dispatcher({
                application : this
            })
        },
        
        
        run : function () {
            var me = this
            
            Ext.onReady(function() {
                me.onReady()
            })
        },
        
        
        onReady : function () {
        }
        
    }
    
})