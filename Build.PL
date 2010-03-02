use inc::Module::JSAN::DSL;

name            Symbie

version         0.01
author          'Nickolay (SamuraiJack) Platonov <root@symbie.org>'

abstract        'Framework for web-applications that looks like web-sites'
license         lgpl


requires        Joose                           3.01
requires        JooseX.Attribute                0.01
requires        JooseX.CPS                      0.01
requires        JooseX.Namespace.Depended       0.01
requires        Task.ExtJS                      3.100.000
requires        JooseX.Bridge.Ext               0.01
requires        ExtX.Reference.Slot             0.01
requires        Digest.MD5                      0.01


test_requires   Test.Run                        0.01

docs_markup     mmd