Class('DemoApp.Template.Base', {
    
    isa : 'Shotenjin.Joosed.Template',
    
    does : [ 'SymbieX.Template.Shotenjin' ],
    
    
    use : [ 'DemoApp.Router' ],
    
    //render helpers common for whole application
    methods : {
        
        
        // need to provide 'getRoute' implementation to stringify <a/> links
        // probably should be switched to something simpler and auto-configurable
        getRoute : function (name) {
            return DemoApp.Router.meta.getRoute(name)
        }
    }
    
})