Role('Symbie.Router.Builder', {
    
    builder : {
        
        methods : {
            
            draw : function (targetMeta, draw) {
                targetMeta.stem.properties.attributes.addProperty('drawFunc', { init : draw })
            }
            
        }
        
    }
})