var Harness
var isNode        = typeof process != 'undefined' && process.pid

if (isNode) {
    require('Task/Test/Run/NodeJSBundle')
    
    Harness = Test.Run.Harness.NodeJS
} else 
    Harness = Test.Run.Harness.Browser.ExtJS
        
    
var INC = (isNode ? require.paths : []).concat('lib', '../lib', '/jsan')



Harness.configure({
	title : 'Symbie test suite',
    
//    passThroughEx : true,
	
	preload : [
        'Task.Symbie.Prereq',
        {
            text : "JooseX.Namespace.Depended.Manager.my.INC = " + Harness.prepareINC(INC)
        },
        'Task.Symbie.Test'
    ]
})


Harness.start(
	'010_route.t.js',
    {
        url         : '020_controllers_tree.t.js',
        preload     : [
            'Task.Symbie.Prereq',
            {
                text : "JooseX.Namespace.Depended.Manager.my.INC = " + Harness.prepareINC(INC)
            },
            'Task.Symbie.Core'
        ]
    },
    '030_dispatch_basics.t.js',
    '031_dispatch_pre.t.js',
    '040_dispatch_advanced.t.js'
)
