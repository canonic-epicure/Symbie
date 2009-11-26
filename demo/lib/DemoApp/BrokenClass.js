Class('DemoApp.BrokenClass', {
    
    isa : 'Symbie.Widget.Container',
    
    after : {
        initialize : function () {
            throw "Deferred error"
        }
    } 
})