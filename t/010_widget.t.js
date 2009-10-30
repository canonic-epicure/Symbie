StartTest(function(t) {
	
    JooseX.Namespace.Depended.Resource.JS.meta.extend({
        does : JooseX.Namespace.Depended.Transport.AjaxSync
    })
    
    t.plan(10)
    
    var async1 = t.beginAsync()
    
    use('Symbie.Widget', function () {
        //==================================================================================================================================================================================
        t.diag("Sanity")
        
        t.ok(Symbie.Widget, "Symbie.Widget is here")
        
        t.ok(Symbie.Widget.Attribute.ID, "Symbie.Widget.Attribute.ID is here")
        t.ok(Symbie.Widget.Attribute.ID.meta.constructor == Joose.Meta.Class, "Symbie.Widget.Attribute.ID is a class")
        
        t.ok(Symbie.Widget.Attribute.ID.Builder, "Symbie.Widget.Attribute.ID.Builder is here")
        t.ok(Symbie.Widget.Attribute.ID.Builder.meta.constructor == Joose.Meta.Role, "Symbie.Widget.Attribute.ID.Builder is a role")
        
        
        //==================================================================================================================================================================================
        t.diag("Widget class creation")
        
        Class('SiteHome', {
            
            isa : Ext.Container,
            
            does : Symbie.Widget,
            
            id : [ 'attr1', 'attr2' ]
        
        })
        
        t.ok(SiteHome, 'SiteHome was created')
        t.ok(SiteHome.meta.hasAttribute('attr1') && SiteHome.meta.getAttribute('attr1').required, "SiteHome has required 'attr1' attribute")
        t.ok(SiteHome.meta.hasAttribute('attr2') && SiteHome.meta.getAttribute('attr2').required, "SiteHome has required 'attr2' attribute")
        
        var siteHome = new SiteHome({
            attr1 : 1,
            attr2 : 2
        })
        
        t.ok(siteHome, "siteHome was created")
        t.ok(siteHome.id == 'SiteHome:1:2', "siteHome has a correct 'id'")
        
        //==================================================================================================================================================================================
        t.diag("Checking ID during instantiation")
        
        t.throws_ok(function() {
            var siteHome1 = new SiteHome({
                attr1 : 1
            })
        }, "Required parameter [attr2] (part of [SiteHome]'s id is not supplied", 'Missing parts of ID are detecting')
        
        t.endAsync(async1)
    })
    
})