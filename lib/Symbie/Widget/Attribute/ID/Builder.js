Role('Symbie.Widget.Attribute.ID.Builder', {
    
    builder : {
        
        methods : {
            
            id : function (targetMeta, info) {
                
                Joose.O.eachSafe(info, function (value, name) {
                    targetMeta.stem.properties.attributes.addProperty(name, {
                        meta : Symbie.Widget.Attribute.ID,
                        init : value
                    })
                }, this)
                
            }
            
        }
         
    }
    
})