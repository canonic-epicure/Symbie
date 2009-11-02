Class('App', {
    
    my : {
    //    use : [ 'App.Home' ],
        
        isa : 'Symbie.Application',
        
        
        have : {
            name : 'app'
        },
        
        
        after : {
            
            onReady : function () {
    //            Ext.getBody().update('Hello world')
            }
            
        }
    }
    
})