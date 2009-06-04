Class('Symbie.Application', {
    
    meta : Joose.Meta.Class,
    
    isa : Ext.util.Observable,
    
    use : [ 'Symbie.Dispatcher', 'Util.Cookies', 'Symbie.Widget.Root' ],
    
    
    have : {
        name            : null,
        
        initialRoute    : null
    },
    
    
    has : {
        router          : null,
        routerClass     : null,
        
        dispatcher      : null,
        dispatcherClass : function () { return Symbie.Dispatcher },
        
        root            : null,
        rootClass       : function () { return Symbie.Widget.Root }
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
            
            this.dispatcher = new this.dispatcherClass({
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
            var route = this.initialRoute || Util.Cookies.my.get(this.name + '_current_route')
            
            this.dispatch(route)
        },
        
        
        dispatch : function () {
            this.dispatcher.dispatch.apply(this.dispatcher, arguments)
        }
        
    }
    
})