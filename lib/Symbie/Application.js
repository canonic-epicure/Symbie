Class('Symbie.Application', {
    
    meta : Joose.Meta.Class,
    
    isa : Ext.util.Observable,
    
    use : [ 'Symbie.Dispatcher', 'Util.Cookies' ],
    
    
    have : {
        name : 'symbie-application',
        
        dispatcher : null,
        
        initialRoute : null
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
            //allow configurable distpatcher class?
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
            var appName = this.name
            
            var route = this.initialRoute || Util.Cookies.my.get(this.name + '_current_route') //|| '/SymbieOrg::MainLayout.center/SymbieOrg::Home';
            
            this.dispatch(route)
        },
        
        
        dispatch : function () {
            this.dispatcher.dispatch.apply(this.dispatcher, arguments)
        }
        
    }
    
})