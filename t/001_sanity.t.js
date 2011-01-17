StartTest(function(t) {
    
    var async0 = t.beginAsync()
    
    use('Symbie', function () {
        
        //======================================================================================================================================================================================================================================================
        t.diag('Sanity')
        
        t.ok(Symbie, "Symbie is here")
        t.ok(Symbie.Application, "Symbie.Application is here")
        
        
        var app = new Symbie.Application()
        
        t.ok(app, 'Symbie.Application can be instantiated')
        
        
        t.endAsync(async0)
        
        t.done()
    })
})    
