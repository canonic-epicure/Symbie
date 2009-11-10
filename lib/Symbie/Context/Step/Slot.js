Class('Symbie.Context.Step.Slot', {
    
    isa : 'Symbie.Context.Step.Widget',
    
    has : {
        slotName       : null
    },
    
    
    methods : {
        
        getUsedClasses : function () {
            return []
        },
        
        
        prepareStepSync : function () {
        },
        
        
        activateStep : function () {
        },

        
        finalizeStep : function () {
        }
        
    }
    
})