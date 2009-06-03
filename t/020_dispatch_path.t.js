StartTest(function(t) {
	t.plan(1)
	
    var async1 = t.beginAsync()
    
    use('Symbie.Dispatcher.Path', function () {
        //==================================================================================================================================================================================
        t.diag("Sanity")
        
        t.ok(Symbie.Dispatcher.Path, "Symbie.Dispatcher.Path is here")
        
        t.ok(Symbie.Dispatcher.PathElement.Widget, "Symbie.Dispatcher.PathElement.Widget is here")
        t.ok(Symbie.Dispatcher.PathElement.Slot, "Symbie.Dispatcher.PathElement.Slot is here")
        t.ok(Symbie.Dispatcher.PathElement.Root, "Symbie.Dispatcher.PathElement.Root is here")
        
        
        //==================================================================================================================================================================================
        t.diag("Simple path creation")
        
        var path = new Symbie.Dispatcher.Path({
            path : '/SiteLayout.Compact/.center({p1:1})'
        })
        
        t.ok(path, 'Path was created')
        
        t.ok(path.elements.length == 3, 'Path contain 3 elements')
        
        t.ok(path.elements[0] instanceof Symbie.Dispatcher.PathElement.Root, '0th element isa Symbie.Dispatcher.PathElement.Root')
        t.ok(path.elements[1] instanceof Symbie.Dispatcher.PathElement.Widget, '1th element isa Symbie.Dispatcher.PathElement.Widget')
        t.ok(path.elements[2] instanceof Symbie.Dispatcher.PathElement.Slot, '1th element isa Symbie.Dispatcher.PathElement.Slot')
        
        
        var widget = path.elements[1]
        
        t.ok(widget.token == 'SiteLayout.Compact', 'Widget has correct class in token')
        t.ok(widget.path == path, "Widget belongs to 'path'")
        
        var slot = path.elements[2]
        
        t.ok(slot.token == 'center', 'Slot has correct name in token')
        t.ok(slot.params.p1 == 1, 'Slot has correct params object')
        t.ok(slot.path == path, "Slot belongs to 'path'")
        
        t.endAsync(async1)
    })
    
})