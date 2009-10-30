StartTest(function(t) {
	
    t.plan(1)
    
    var async1 = t.beginAsync()
    
    use('Symbie.Application', function () {
        //==================================================================================================================================================================================
        t.diag("Sanity")
        
        t.ok(Symbie.Application, "Symbie.Application is here")
        
        var app = new Symbie.Application()
        
        app.on('dispatch', function () {
            t.pass('asd')
        })
        
        app.fireEvent('dispatch')
        
        t.endAsync(async1)
    })
    
})