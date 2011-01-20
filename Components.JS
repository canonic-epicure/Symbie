COMPONENTS = {
    
    "Core" : [
        "Symbie.Meta.Route.Token",
        "Symbie.Meta.Route.Token.Parameter",
        "Symbie.Meta.Route.Token.String",
        "Symbie.Meta.Route.Token.Root",
        "Symbie.Meta.Route.Token.WildCard",
        
        "Symbie.Meta.Route",
        
        "Symbie.Meta.Route.Match",
        
        "Symbie.Context",
        
        "Symbie.Meta.Controller",
        "Symbie.Controller",
        "Symbie.Application",
        
        "Symbie"
    ],
    
    
    "Prereq" : [
        "jsan:Task.Joose.Core",
        
        "jsan:Task.JooseX.Attribute.Bootstrap",
        "jsan:Task.JooseX.Namespace.Depended.Auto",
        "jsan:Task.JooseX.CPS.All",
        
        "jsan:Task.JooseX.Observable.Core"
    ],
    
    
    "Test" : [
        "jsan:JooseX.Class.Singleton",
        
        "=t/lib/SymbieX/SomePlugin.js",
        "=t/lib/SymbieX/Controller/FooBar.js",
        
        "=t/lib/TestApp/Controller/WikiController.js",
        "=t/lib/TestApp/Controller/Pictures.js",
        
        "=t/lib/TestApp.js",
        
        "+Core"
    ],
    
    
    "Bundle" : [
        "+Prereq",
        
        "+Core"
    ],
    
    
    "ExtJSBundle" : [
        "+Bundle",
        
        "jsan:Task.ExtJS.Adapter.Ext",
        
        "jsan:JooseX.Bridge.Ext",
        "jsan:JooseX.Meta.Lazy",
        "jsan:JooseX.Bridge.Ext.LazyConvertor",
        
        "jsan:Task.ExtJS.Debug.All",
        "jsan:ExtX.Reference.Slot",
        
        "jsan:Shotenjin.Template",
        "jsan:Johnny.Mnemonic",
        
        "SymbieX.ExtJS.DomReady",
        "SymbieX.ExtJS.Links",
        "SymbieX.ExtJS.Shotenjin",
        "SymbieX.ExtJS.DispatchMask",
        
        "SymbieX.ExtJS.Widget",
        
        "SymbieX.History"
    ]
} 
