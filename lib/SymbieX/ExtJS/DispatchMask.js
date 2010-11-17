Role('SymbieX.ExtJS.DispatchMask', {
    
    trait       : 'JooseX.CPS',
    
    
    continued : {
    
        override : {
            
            dispatch : function () {
                
                Ext.getBody().mask()
                
                this.SUPERARG(arguments).ensure(function () {
                    
                    Ext.getBody().unmask()
                    
                    this.CONTINUE()
                    
                }).now()
            }
        }
    }
    // eof continued
})
