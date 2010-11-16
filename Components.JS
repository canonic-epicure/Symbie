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
        
        "SymbieX.ExtJS.DomReady",
        "SymbieX.ExtJS.Shotenjin",
        "SymbieX.ExtJS.Shotenjin.Template",
        "SymbieX.ExtJS.Widget"
    ]
} 

