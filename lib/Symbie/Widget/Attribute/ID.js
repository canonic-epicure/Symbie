Class('Symbie.Widget.Attribute.ID', {
    
    meta : Joose.Meta.Class,
    isa : Joose.Managed.Attribute,
    
    
    use : [ 'Symbie.Widget.Attribute.ID.Builder' ],
    
    
    have : {
        required : true
    },
    
    
    after : {
        
        apply : function (targetClass) {
            var meta = targetClass.meta
            meta.idDefinition = meta.idDefinition || {}
            
            meta.idDefinition[this.name] = true
        },
        
        
        unapply : function (from) {
            delete targetClass.meta.idDefinition[this.name]
        }
        
    }
    
})
