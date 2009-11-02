Class('App', {
    
    isa : 'Ext.Viewport',
    
    does : 'Symbie.Widget.Root',
    
    use : [ 'App.Router' ],
    
    
    has : {
        routerClass : Joose.FutureClass('App.Router'),
        
        title : 'Symbie test application'
    },
    
    
    after : {
        
        onReady : function () {
//            Ext.getBody().update('Hello world')
        }
        
    }
    
})