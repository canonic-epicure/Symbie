StartTest(function(t) {
	
    t.plan(1)
    
    var async1 = t.beginAsync()
    
    use('App.Widget', function () {
        //==================================================================================================================================================================================
        t.diag("Sanity")
        
        t.ok(App.Widget, "App.Widget is here")
        
        t.ok(App.Widget.meta.hasAttribute('pkField') && App.Widget.meta.getAttribute('pkField').required, "App.Widget has a required 'pkField' attribute")
        
//        //==================================================================================================================================================================================
//        t.diag("Widget class creation")
//        
//        Class('SiteHome', {
//            
//            isa : Ext.Container,
//            
//            does : Symbie.Widget,
//            
//            id : [ 'attr1', 'attr2' ]
//        
//        })
//        
//        t.ok(SiteHome, 'SiteHome was created')
//        t.ok(SiteHome.meta.hasAttribute('attr1') && SiteHome.meta.getAttribute('attr1').required, "SiteHome has required 'attr1' attribute")
//        t.ok(SiteHome.meta.hasAttribute('attr2') && SiteHome.meta.getAttribute('attr2').required, "SiteHome has required 'attr2' attribute")
//        
//        var siteHome = new SiteHome({
//            attr1 : 1,
//            attr2 : 2
//        })
//        
//        t.ok(siteHome, "siteHome was created")
//        t.ok(siteHome.id == 'SiteHome:1:2', "siteHome has a correct 'id'")
//        
//        //==================================================================================================================================================================================
//        t.diag("Checking ID during instantiation")
//        
//        t.throws_ok(function() {
//            var siteHome1 = new SiteHome({
//                attr1 : 1
//            })
//        }, "Required parameter [attr2] (part of [SiteHome]'s id is not supplied", 'Missing parts of ID are detecting')
        
        t.endAsync(async1)
    })
    
})