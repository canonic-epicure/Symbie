Role('Symbie.Meta.Widget', {
    
    has : {
        widgetId : Joose.Array
    },
    
    
    builder : {
        
        methods : {
            
            id : function (targetMeta, info) {
                
                var id      = targetMeta.widgetId
                var props   = {}
                
                Joose.O.each(info, function (value, name) {
                    if (typeof value != 'object' || value == null) value = { init : value }
                    
                    value.required = true
                    props[name] = value
                    
                    id.push(name)
                })
                
                this.has(targetMeta, props)
                
                id.sort()
            }
            
        }
        //eof methods
    },
    //eof builder
    
    methods : {
        
        computeID : function (ownerID, source) {
            var idMaterial = this.name + ':' + ownerID
            
            Joose.A.each(this.widgetId, function (attrName) {
                idMaterial += ':' + source[attrName]
            }, this)
            
            return Digest.MD5.my.md5_hex(idMaterial)
        }
        
    }
})