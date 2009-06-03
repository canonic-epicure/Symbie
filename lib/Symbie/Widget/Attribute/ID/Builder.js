Role('Symbie.Widget.Attribute.ID.Builder', {
    
    builder : {
        
        methods : {
            
            id : function (targetMeta, info) {
                
                Joose.A.each(Joose.O.wantArray(info), function (name) {
                    targetMeta.stem.properties.attributes.addProperty(name, {
                        meta : Symbie.Widget.Attribute.ID,
                        init : null
                    })
                }, this)
                
            }
            
        }
         
    }
    
})