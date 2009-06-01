Class('Symbie.Widget.Attribute.ID', {
    
    meta : Joose.Meta.Class,
    isa : Joose.Managed.Attribute,
    
    
    use : [ 'Symbie.Widget.Attribute.ID.Builder' ],
    
    
    have : {
        required : true
    },
    
    
    after : {
        
        prepareApply : function(targetClass) {
            var my = targetClass.meta.c.my
            
            my.idDefinition[this.name] = true
        },
        
        
        unapply : function(from) {
            var my = from.meta.c.my
            
            delete my.idDefinition[this.name]
        }
        
    }
    
})
