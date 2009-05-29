Class('Symbie.Widget.Attribute.ID', {
    
    isa : Joose.Managed.Attribute,
    
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
