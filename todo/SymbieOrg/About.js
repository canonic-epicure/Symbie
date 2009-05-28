declare('SymbieOrg::About', function (use, checkState, __PACKAGE__){

	use(['SymbieOrg::custom::TabPanel', 'SymbieOrg::custom::HorizontalStrip'], function () {
		
		SymbieOrg.About = Ext.extend(Ext.Container, {
			
			slots : true,
			
			constructor : function (config){
				config = Symbie.Widget.preprocess.call(this,config, __PACKAGE__);
				
				Ext.apply(config, {
					layout : 'row-fit',
					
					style : {
						'padding-top' : '50px'
					},
							
					autoHeight : true,
					
					items : [
						{
							xtype : 'jemplatedcontainer',
							cls : 'section_header',
							I18n : 'I18n.About.title',
							autoHeight : true
						},
						{
							xtype : 'jemplatedcontainer',
							cls : 'medium12',
							jemplate : 'SymbieOrg.About.title',
							autoHeight : true
						},
						{
							xtype : 'jemplatedcontainer',
							cls : 'section_header',
							I18n : 'I18n.About.advantages',
							autoHeight : true
						},
						{
							xtype : 'jemplatedcontainer',
							cls : 'medium12',
							jemplate : 'SymbieOrg.About.advantages',
							autoHeight : true
						},
						{
							xtype : 'jemplatedcontainer',
							cls : 'section_header',
							I18n : 'I18n.About.drawbacks',
							autoHeight : true
						},
						{
							xtype : 'jemplatedcontainer',
							cls : 'medium12',
							jemplate : 'SymbieOrg.About.drawbacks',
							autoHeight : true
						},
						{
							xtype : 'jemplatedcontainer',
							cls : 'section_header',
							I18n : 'I18n.About.difference',
							autoHeight : true
						},
						{
							xtype : 'jemplatedcontainer',
							cls : 'medium12',
							jemplate : 'SymbieOrg.About.difference',
							autoHeight : true
						},
						//row with tabpabel
						{
							xtype : 'horizontalstrip',
							
							style : {
								'padding-top' : '50px'
							},
							
							height : 500,
							
							centralConfig : {
								xtype : 'customtabpanel',
								
								slot : 'tabpanel',
								
								resizeTabs : true,
								
								layout : 'slide',
								
								activeTab : 0,
								
								defaults : {
									bodyStyle : {
										padding : '10px'
									},
									border : false,
									layout : 'fit'
								},
								
								items : [
									//presentation cards
									{
										title : 'Ext',
										items : [
											{
												xtype : 'jemplatedcontainer',
												jemplate : 'SymbieOrg.About.cards.Ext',
												
												cls : 'medium12'
											}
										]
									},
									{
										title : 'Jemplate',
										items : [
											{
												xtype : 'jemplatedcontainer',
												jemplate : 'SymbieOrg.About.cards.Jemplate',
												
												cls : 'medium12'
											}
										]
									},
									{
										title : 'Joose',
										items : [
											{
												xtype : 'jemplatedcontainer',
												jemplate : 'SymbieOrg.About.cards.Joose',
												
												cls : 'medium12'
											}
										]
									},
									{
										title : 'Symbie',
										items : [
											{
												xtype : 'jemplatedcontainer',
												jemplate : 'SymbieOrg.About.title',
												
												cls : 'medium12'
											}
										]
									}
									//eof presentation cards
								]
							}
						}
						//eof row with tabpabel
					]
				});
				
				SymbieOrg.About.superclass.constructor.call(this, config);
			},
			
			
			initComponent : function (){
				SymbieOrg.About.superclass.initComponent.call(this);
			}
			
			
		}); //eof extend
		
		
/*jmpl:SymbieOrg.About.title
	[% RAW I18n %]
	
	[% IF I18n.language == 'ru' %]
		Symbie - это фрэймворк для создания веб-сайтов в виде JavaScript приложений - ударение на слово "приложений". Сайты, написанные на Symbie представляют собой набор JavaScript классов,
		организованных в единое целое общей иделогией. Исходный код сайта выполняется целиком в браузере пользователя, генерация html на сервере отсутствует.
		Основой Symbie является кросс-браузерная библиотека <a href="http://extjs.com">Ext</a>, предоставляющая самые широкие <a href="http://extjs.com/deploy/dev/examples/samples.html">возможности</a> для организации
		пользовательского интерфейса. В отдельных случаях, когда необходима детальная проработка участка страницы, Symbie использует <a href="http://jemplate.net">Jemplate</a> для рендеринга html шаблонов.
	[% ELSE %]
		Symbie is the framework for creation web-sites in the form of JavaScript applications - accent on the "applications".  Web-site, written on Symbie is generally the collection of JavaScript classes,
		which are cohesive with unified approach. The source code of web-site is executing totally in user's browser, there is no server-side html generation.
		The basis of Symbie is the cross-browser library <a href="http://extjs.com">Ext</a>, which offers great <a href="http://extjs.com/deploy/dev/examples/samples.html">capabilities</a> for user interface creation. 
		In certain cases, when the detail processing of the page region required, Symbie uses <a href="http://jemplate.net">Jemplate</a> for html templates rendering.
	[% END %] 
jmpl*/
// CREATED BY JEMPLATE COMPILER, DO NOT MODIFY CONTENT OF THIS SECTION! md5hex:74133fa51293db7f66cbf653e8f89b39
Jemplate.templateMap['SymbieOrg.About.title']=function(context){if(!context)throw('Jemplate function called without context\n');var stash=context.stash;var output='';try{output+='\n	';stash.set('I18n',I18n);output+='\n	\n	';if(stash.get(['I18n',0,'language',0])=='ru'){output+='\n		Symbie - это фрэймворк для создания веб-сайтов в виде JavaScript приложений - ударение на слово "приложений". Сайты, написанные на Symbie представляют собой набор JavaScript классов,\n		организованных в единое целое общей иделогией. Исходный код сайта выполняется целиком в браузере пользователя, генерация html на сервере отсутствует.\n		Основой Symbie является кросс-браузерная библиотека <a href="http://extjs.com">Ext</a>, предоставляющая самые широкие <a href="http://extjs.com/deploy/dev/examples/samples.html">возможности</a> для организации\n		пользовательского интерфейса. В отдельных случаях, когда необходима детальная проработка участка страницы, Symbie использует <a href="http://jemplate.net">Jemplate</a> для рендеринга html шаблонов.\n	';}
else{output+='\n		Symbie is the framework for creation web-sites in the form of JavaScript applications - accent on the "applications".  Web-site, written on Symbie is generally the collection of JavaScript classes,\n		which are cohesive with unified approach. The source code of web-site is executing totally in user\'s browser, there is no server-side html generation.\n		The basis of Symbie is the cross-browser library <a href="http://extjs.com">Ext</a>, which offers great <a href="http://extjs.com/deploy/dev/examples/samples.html">capabilities</a> for user interface creation. \n		In certain cases, when the detail processing of the page region required, Symbie uses <a href="http://jemplate.net">Jemplate</a> for html templates rendering.\n	';}
output+=' \n';}
catch(e){var error=context.set_error(e,output);throw(error);}
return output;}
// CREATED BY JEMPLATE COMPILER, DO NOT MODIFY CONTENT OF THIS SECTION! md5hex:74133fa51293db7f66cbf653e8f89b39


/*jmpl:SymbieOrg.About.advantages
	[% RAW I18n %]
	
	[% IF I18n.language == 'ru' %]
		У Symbie хорошая наследственность - в его приложениях доступны все преимущества библиотеки Ext. Главное из них - <b>кроссбраузерность</b>. Не менее важно наличие <b>огромного выбора готовых "видежетов"</b> для этой библиотеки
		а также <b>простоту создания новых</b> при помощи ее развитой инфраструктуры. Собственно сайт, созданный на Симби - является объединением множества Ext-виджетов.<br><br>
		  
		Приложения Symbie <b>потребляют очень мало трафика</b> - они обмениваются с сервером только данными и динамически загружаемыми классами. В этом смысле приложения Symbie являются стандартными клиент-серверными приложениями
		и создание SOAP-клиента для Ext окончательно завершит переход к <b>концепции "веб-приложения"</b>.<br><br>
		
		И наконец, создавать сайты на Symbie <b>намного проще</b>, чем при помощи стандартного HTML. Вы не думаете постоянно о кросс-браузерности, не разделяете логику представления данных и их поведения.
		Вы просто <b>декларативно описываете</b>, как должен <b>выглядеть</b> ваш сайт и как он должен <b>изменяться</b> в ответ на действия пользователя.
		При этом любой однажды использованный виджет или раскладка страницы могут быть <b>повторно использованы</b> в других местах сайта, расширены, доработаны - и все это в рамках строгого объектно-ориентрованного подхода. 
		
	[% ELSE %]
		Symbie got good genes - in its applications are available all features of Ext. The main from them - <b>cross-browserness</b>. No less important is the <b>availability of the great choice ready-to-use widgets</b> for this library,
		alongside with simplicity of creation new ones, using its excellent infrastructure. Actually, web-site, created on Symbie is the collection of the Ext widgets.<br><br>
		
		Symbie applications <b>consumes very little traffic</b> - they interchange with server with only data and dynamically loaded classes. In this meaning Symbie applications are ordinary client-server applications, and
		the creating of SOAP-client for Ext will complete the shift to <b>"web-application" concept</b>.<br><br>
		
		And finally, web-site creation with Symbie is <b>much simplier</b>, than with ordinary HTML. You do not think constantly about cross-browserness, do not split the presentation and behavior logic.
		You just <b>declarative describes</b> how is your site should be looked like and how it should <b>change</b> in response on user's actions.
		Meanwhile any used once widget or layout can be <b>re-used</b> in another site regions, configured, extended - and all this in the established framework of OOP approach.
		 
	[% END %] 
jmpl*/
// CREATED BY JEMPLATE COMPILER, DO NOT MODIFY CONTENT OF THIS SECTION! md5hex:c0d62e35e5a59ddef5072402bb6619a5
Jemplate.templateMap['SymbieOrg.About.advantages']=function(context){if(!context)throw('Jemplate function called without context\n');var stash=context.stash;var output='';try{output+='\n	';stash.set('I18n',I18n);output+='\n	\n	';if(stash.get(['I18n',0,'language',0])=='ru'){output+='\n		У Symbie хорошая наследственность - в его приложениях доступны все преимущества библиотеки Ext. Главное из них - <b>кроссбраузерность</b>. Не менее важно наличие <b>огромного выбора готовых "видежетов"</b> для этой библиотеки\n		а также <b>простоту создания новых</b> при помощи ее развитой инфраструктуры. Собственно сайт, созданный на Симби - является объединением множества Ext-виджетов.<br><br>\n		  \n		Приложения Symbie <b>потребляют очень мало трафика</b> - они обмениваются с сервером только данными и динамически загружаемыми классами. В этом смысле приложения Symbie являются стандартными клиент-серверными приложениями\n		и создание SOAP-клиента для Ext окончательно завершит переход к <b>концепции "веб-приложения"</b>.<br><br>\n		\n		И наконец, создавать сайты на Symbie <b>намного проще</b>, чем при помощи стандартного HTML. Вы не думаете постоянно о кросс-браузерности, не разделяете логику представления данных и их поведения.\n		Вы просто <b>декларативно описываете</b>, как должен <b>выглядеть</b> ваш сайт и как он должен <b>изменяться</b> в ответ на действия пользователя.\n		При этом любой однажды использованный виджет или раскладка страницы могут быть <b>повторно использованы</b> в других местах сайта, расширены, доработаны - и все это в рамках строгого объектно-ориентрованного подхода. \n		\n	';}
else{output+='\n		Symbie got good genes - in its applications are available all features of Ext. The main from them - <b>cross-browserness</b>. No less important is the <b>availability of the great choice ready-to-use widgets</b> for this library,\n		alongside with simplicity of creation new ones, using its excellent infrastructure. Actually, web-site, created on Symbie is the collection of the Ext widgets.<br><br>\n		\n		Symbie applications <b>consumes very little traffic</b> - they interchange with server with only data and dynamically loaded classes. In this meaning Symbie applications are ordinary client-server applications, and\n		the creating of SOAP-client for Ext will complete the shift to <b>"web-application" concept</b>.<br><br>\n		\n		And finally, web-site creation with Symbie is <b>much simplier</b>, than with ordinary HTML. You do not think constantly about cross-browserness, do not split the presentation and behavior logic.\n		You just <b>declarative describes</b> how is your site should be looked like and how it should <b>change</b> in response on user\'s actions.\n		Meanwhile any used once widget or layout can be <b>re-used</b> in another site regions, configured, extended - and all this in the established framework of OOP approach.\n		 \n	';}
output+=' \n';}
catch(e){var error=context.set_error(e,output);throw(error);}
return output;}
// CREATED BY JEMPLATE COMPILER, DO NOT MODIFY CONTENT OF THIS SECTION! md5hex:c0d62e35e5a59ddef5072402bb6619a5


/*jmpl:SymbieOrg.About.drawbacks
	[% RAW I18n %]
	
	[% IF I18n.language == 'ru' %]
		Приложения Symbie поддерживают SEO в полном объеме, даже несмотря на то, что роботы поисковых систем не выполняют JavaScript. 
		Это достигается путем использования на стороне сервера специальной службы рендеринга для поисковых роботов, реализованной на базе "Gtk Mozilla Embedding Widget"
		(попробуйте сделать поиск в гугле: "symbie framework", чтобы посмотреть как это работает).
		Дополнительная "дружественность к SEO" обеспечивается тем, что Symbie позволяет реализовать переходы между страницами сайта в виде стандартных тэгов <a/> 
	[% ELSE %]
		Symbie applications fully supports SEO, though search engines spiders don't execute JavaScript.
		This achives with the server-side rendering service, specially for spiders, based on "Gtk Mozilla Embedding Widget" (try to google "symbie framework" to see how it works).
		Additional factor of Symbie's "SEO friendly-ness" is that it allows to implement site navigation with standard <a/> tags. 
	[% END %] 
jmpl*/
// CREATED BY JEMPLATE COMPILER, DO NOT MODIFY CONTENT OF THIS SECTION! md5hex:ffbe4ca77e159ab6ee8fe80e9f7a8739
Jemplate.templateMap['SymbieOrg.About.drawbacks']=function(context){if(!context)throw('Jemplate function called without context\n');var stash=context.stash;var output='';try{output+='\n	';stash.set('I18n',I18n);output+='\n	\n	';if(stash.get(['I18n',0,'language',0])=='ru'){output+='\n		Приложения Symbie поддерживают SEO в полном объеме, даже несмотря на то, что роботы поисковых систем не выполняют JavaScript. \n		Это достигается путем использования на стороне сервера специальной службы рендеринга для поисковых роботов, реализованной на базе "Gtk Mozilla Embedding Widget"\n		(попробуйте сделать поиск в гугле: "symbie framework", чтобы посмотреть как это работает).\n		Дополнительная "дружественность к SEO" обеспечивается тем, что Symbie позволяет реализовать переходы между страницами сайта в виде стандартных тэгов <a/> \n	';}
else{output+='\n		Symbie applications fully supports SEO, though search engines spiders don\'t execute JavaScript.\n		This achives with the server-side rendering service, specially for spiders, based on "Gtk Mozilla Embedding Widget" (try to google "symbie framework" to see how it works).\n		Additional factor of Symbie\'s "SEO friendly-ness" is that it allows to implement site navigation with standard <a/> tags. \n	';}
output+=' \n';}
catch(e){var error=context.set_error(e,output);throw(error);}
return output;}
// CREATED BY JEMPLATE COMPILER, DO NOT MODIFY CONTENT OF THIS SECTION! md5hex:ffbe4ca77e159ab6ee8fe80e9f7a8739

		
/*jmpl:SymbieOrg.About.difference
	[% RAW I18n %]
	
	[% IF I18n.language == 'ru' %]
		Принципиальных отличий нет - приложения Symbie являются приложениями Ext, в них могут быть использованы любые виджеты, созданные для "обычного" Ext. При этом Symbie добавляет в инфраструктуру Ext несколько 
		модулей, функционал которых позволяет создавать сайт без промежуточных обновлений страницы и связать все классы приложения единой идеологией. 
		Symbie не ставит перед собой цели изобрести велосипед заново, и во многом он является сборником "лучших практик" по работе с Ext. 
	[% ELSE %]
		There are no principal differences - Symbie applications are Ext applications and can use any widget, created for "ordinary" Ext. Meanwhile Symbie adds to Ext's infrastructure several modules, which allows to 
		create web-site without full page refreshes and cohesive unified all classes.
		Symbie have no goal to reinvent the bicycle - it is essentially the collection of "best practice" on work with Ext. 
	[% END %] 
jmpl*/
// CREATED BY JEMPLATE COMPILER, DO NOT MODIFY CONTENT OF THIS SECTION! md5hex:4baf1a86b61b2327150c53de9c185c31
Jemplate.templateMap['SymbieOrg.About.difference']=function(context){if(!context)throw('Jemplate function called without context\n');var stash=context.stash;var output='';try{output+='\n	';stash.set('I18n',I18n);output+='\n	\n	';if(stash.get(['I18n',0,'language',0])=='ru'){output+='\n		Принципиальных отличий нет - приложения Symbie являются приложениями Ext, в них могут быть использованы любые виджеты, созданные для "обычного" Ext. При этом Symbie добавляет в инфраструктуру Ext несколько \n		модулей, функционал которых позволяет создавать сайт без промежуточных обновлений страницы и связать все классы приложения единой идеологией. \n		Symbie не ставит перед собой цели изобрести велосипед заново, и во многом он является сборником "лучших практик" по работе с Ext. \n	';}
else{output+='\n		There are no principal differences - Symbie applications are Ext applications and can use any widget, created for "ordinary" Ext. Meanwhile Symbie adds to Ext\'s infrastructure several modules, which allows to \n		create web-site without full page refreshes and cohesive unified all classes.\n		Symbie have no goal to reinvent the bicycle - it is essentially the collection of "best practice" on work with Ext. \n	';}
output+=' \n';}
catch(e){var error=context.set_error(e,output);throw(error);}
return output;}
// CREATED BY JEMPLATE COMPILER, DO NOT MODIFY CONTENT OF THIS SECTION! md5hex:4baf1a86b61b2327150c53de9c185c31


/*jmpl:SymbieOrg.About.cards.Ext
	[% RAW I18n %]
	
	[% IF I18n.language == 'ru' %]
		Основные идеи, заложенные в Symbie не зависят от используемой java-script библиотеки. Любой современный java-script фрэймворк может быть успешно использован для создания веб-сайтов на Symbie.
		Поскольку, на данный момент, наиболее развитой подобной библиотекой является Ext, она была выбрана в качестве основного "движка" Symbie.  
	[% ELSE %]
		Main ideas of Symbie are separated from underlaying javascript platform. Any modern javascript framework can be used to successfully create web-site on Symbie.
		Meanwhile, currently, the most advanced framework is Ext, and it was chosen as the primary "engine" for Symbie.
	[% END %] 
jmpl*/
// CREATED BY JEMPLATE COMPILER, DO NOT MODIFY CONTENT OF THIS SECTION! md5hex:a7990e10f56d578f076da002d8879f59
Jemplate.templateMap['SymbieOrg.About.cards.Ext']=function(context){if(!context)throw('Jemplate function called without context\n');var stash=context.stash;var output='';try{output+='\n	';stash.set('I18n',I18n);output+='\n	\n	';if(stash.get(['I18n',0,'language',0])=='ru'){output+='\n		Основные идеи, заложенные в Symbie не зависят от используемой java-script библиотеки. Любой современный java-script фрэймворк может быть успешно использован для создания веб-сайтов на Symbie.\n		Поскольку, на данный момент, наиболее развитой подобной библиотекой является Ext, она была выбрана в качестве основного "движка" Symbie.  \n	';}
else{output+='\n		Main ideas of Symbie are separated from underlaying javascript platform. Any modern javascript framework can be used to successfully create web-site on Symbie.\n		Meanwhile, currently, the most advanced framework is Ext, and it was chosen as the primary "engine" for Symbie.\n	';}
output+=' \n';}
catch(e){var error=context.set_error(e,output);throw(error);}
return output;}
// CREATED BY JEMPLATE COMPILER, DO NOT MODIFY CONTENT OF THIS SECTION! md5hex:a7990e10f56d578f076da002d8879f59


/*jmpl:SymbieOrg.About.cards.Jemplate
	[% RAW I18n %]
	
	[% IF I18n.language == 'ru' %]
		Jemplate представляет собой полноценный java-script порт популярной библиотеки рендеринга HTML шаблонов <a href="http://www.template-toolkit.org/">Template Toolkit</a>.
		Он определяет отдельный <b>язык программирования</b> для рендеринга шаблонов и позволяет с легкостью рендерить шаблоны любой сложности.  
	[% ELSE %]
		Jemplate is a complete java-script port of the popular <a href="http://www.template-toolkit.org/">Template Toolkit</a> framework. It defines a whole templating <b>language</b>,
		in which you can easily render HTML templates of any complexity.
	[% END %] 
jmpl*/
// CREATED BY JEMPLATE COMPILER, DO NOT MODIFY CONTENT OF THIS SECTION! md5hex:2b9877e21fea630f59fa650f94280993
Jemplate.templateMap['SymbieOrg.About.cards.Jemplate']=function(context){if(!context)throw('Jemplate function called without context\n');var stash=context.stash;var output='';try{output+='\n	';stash.set('I18n',I18n);output+='\n	\n	';if(stash.get(['I18n',0,'language',0])=='ru'){output+='\n		Jemplate представляет собой полноценный java-script порт популярной библиотеки рендеринга HTML шаблонов <a href="http://www.template-toolkit.org/">Template Toolkit</a>.\n		Он определяет отдельный <b>язык программирования</b> для рендеринга шаблонов и позволяет с легкостью рендерить шаблоны любой сложности.  \n	';}
else{output+='\n		Jemplate is a complete java-script port of the popular <a href="http://www.template-toolkit.org/">Template Toolkit</a> framework. It defines a whole templating <b>language</b>,\n		in which you can easily render HTML templates of any complexity.\n	';}
output+=' \n';}
catch(e){var error=context.set_error(e,output);throw(error);}
return output;}
// CREATED BY JEMPLATE COMPILER, DO NOT MODIFY CONTENT OF THIS SECTION! md5hex:2b9877e21fea630f59fa650f94280993


/*jmpl:SymbieOrg.About.cards.Joose
	[% RAW I18n %]
	
	[% IF I18n.language == 'ru' %]
		Jemplate представляет собой полноценный java-script порт популярной библиотеки рендеринга HTML шаблонов <a href="http://www.template-toolkit.org/">Template Toolkit</a>.
		Он определяет отдельный <b>язык программирования</b> для рендеринга шаблонов и позволяет с легкостью рендерить шаблоны любой сложности.  
	[% ELSE %]
		Jemplate is a complete java-script port of the popular <a href="http://www.template-toolkit.org/">Template Toolkit</a> framework. It defines a whole templating <b>language</b>,
		in which you can easily render HTML templates of any complexity.
	[% END %] 
jmpl*/
// CREATED BY JEMPLATE COMPILER, DO NOT MODIFY CONTENT OF THIS SECTION! md5hex:04479ccdcf7513767334095a32b04dcf
Jemplate.templateMap['SymbieOrg.About.cards.Joose']=function(context){if(!context)throw('Jemplate function called without context\n');var stash=context.stash;var output='';try{output+='\n	';stash.set('I18n',I18n);output+='\n	\n	';if(stash.get(['I18n',0,'language',0])=='ru'){output+='\n		Jemplate представляет собой полноценный java-script порт популярной библиотеки рендеринга HTML шаблонов <a href="http://www.template-toolkit.org/">Template Toolkit</a>.\n		Он определяет отдельный <b>язык программирования</b> для рендеринга шаблонов и позволяет с легкостью рендерить шаблоны любой сложности.  \n	';}
else{output+='\n		Jemplate is a complete java-script port of the popular <a href="http://www.template-toolkit.org/">Template Toolkit</a> framework. It defines a whole templating <b>language</b>,\n		in which you can easily render HTML templates of any complexity.\n	';}
output+=' \n';}
catch(e){var error=context.set_error(e,output);throw(error);}
return output;}
// CREATED BY JEMPLATE COMPILER, DO NOT MODIFY CONTENT OF THIS SECTION! md5hex:04479ccdcf7513767334095a32b04dcf



	}); //eof use
	
}); //eof declare