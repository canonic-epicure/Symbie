declare( 'SymbieOrg::Home', function (use,checkState,__PACKAGE__) {

	use(['Ext::ux::layout::ColumnFit', 'Ext::ux::layout::RowFitLayout', 'Ext::ux::panel::JemplatedContainer', 'Jemplate::I18n::phrase', 'SymbieOrg::custom::TabPanel', 'Ext::ux::layout::Coolcard',
		'SymbieOrg::custom::ImagePreview', 'Ext::ux::layout::Slide', 'SymbieOrg::custom::HorizontalStrip'], function(){
		
		SymbieOrg.Home = Ext.extend( Ext.Container, {
		    
		    slots : true,
		    
		    displayName : function () { return I18n.Home.displayName },
		    
			constructor : function (config){
				config = Symbie.Widget.preprocess.call(this, config, __PACKAGE__);
				
				Ext.apply(config,{
					autoHeight : true,
					
					layout : 'columnfit',
					
					items : [
						//left column
						{
							xtype : 'container',
							autoEl : 'div',
							
							width : 290,
							style : {
								'padding-left' : '30px',
								'padding-right' : '20px',
								'padding-top' : '50px'
							},
							
							autoHeight : true,
							layout : 'row-fit',
							
							items : [
								{
									xtype : 'jemplatedcontainer',
									jemplate : 'SymbieOrg.Introduction',
									autoHeight : true,
									cls : 'medium12'
								},
								{
									xtype : 'jemplatedcontainer',
									cls : 'medium12 righted bold',
									jemplate : 'SymbieOrg.learn_more',
									data : {
										displayPath : '/SymbieOrg::MainLayout.center/SymbieOrg::About'
									},
									autoHeight : true
								},
								{
									xtype : 'jemplatedcontainer',
									jemplate : 'SymbieOrg.Nature',
									autoHeight : true,
									cls : 'medium12 overview_section_padding'
								},
								{
									xtype : 'jemplatedcontainer',
									cls : 'medium12 righted bold',
									jemplate : 'SymbieOrg.learn_more',
									data : {
										displayPath : '/SymbieOrg::MainLayout.center/SymbieOrg::About'
									},
									autoHeight : true
								},
								{
									xtype : 'jemplatedcontainer',
									jemplate : 'SymbieOrg.State',
									autoHeight : true,
									cls : 'medium12 overview_section_padding'
								}
							]
						},
						//eof left column
						
						//right column
						{
							xtype : 'container',
							autoEl : 'div',
							
							columnWidth : 1,
							
							height : 600,
							layout : 'row-fit',
							
							items : [
								//greeting
								{
									xtype : 'jemplatedcontainer',
									cls : 'section_header righted greeting',
									I18n : 'I18n.Home.greeting',
									autoHeight : true
								},
								//eof greeting
								
								
								//tab panel
								{
									xtype : 'customtabpanel',
									
									slot : 'tabpanel',
									
									resizeTabs : true,
									
//									height : 450,
									
									bodyStyle : {
										padding : '14px'
									},
									
									layout : 'coolcard',
									layoutConfig : {
			                            inFx : { 
			                            	method : 'fadeIn', 
			                            	anchor : 't',
			                            	duration: 0.7
			                            },
			                            outFx : { 
			                            	method : 'ghost', 
			                            	anchor : 'br',
			                            	duration: 0.7
			                            }
									},
									
									activeTab : 0,
									
									items : [
										//samples card
										{
											titleI18n : 'I18n.Home.samples',
											
											layout : 'fit',
											
											items : [
												{
													xtype : 'horizontalstrip',
													
													centralConfig : {
														
														border : false,
														layout : 'slide',
														items : [
															//be-travel card
															{
																title : 'be-travel.ru',
																border : false,
																
																cls : 'medium12 centered',
																
																layout : 'row-fit',
																
																items : [
																	{
																		xtype : 'jemplatedcontainer',
																		autoEl : 'div',
																		
																		style : {
																			'padding-top' : '10px',
																			'padding-bottom' : '15px'
																		},
																		
																		jemplate : 'SymbieOrg.Samples.be-travel',
																		autoHeight : true
																	},
																	{
																		xtype : 'jemplatedcontainer',
																		cls : 'small righted',
																		I18n : 'I18n.Home.zoom_hint',
																		autoHeight : true
																	},
																	{
																		xtype : 'container',
																		autoEl : 'div',
																		
																		height : '100%',
																		
																		layout : 'columnfit',
																		
																		style : {
																			'padding-top' : '30px'
																		},
																		
																		items : [
																			{
																				columnWidth : 0.5,
																				xtype : 'imagepreview',
																				previewSrc : '/static/images/preview/be-travel-small1.jpg',
																				fullsizeSrc : '/static/images/preview/be-travel-full1.jpg',
																				height : 288,
																				mirrorEffectCorrection : -58
																			},
																			{
																				columnWidth : 0.5,
																				xtype : 'imagepreview',
																				previewSrc : '/static/images/preview/be-travel-small2.jpg',
																				fullsizeSrc : '/static/images/preview/be-travel-full2.jpg',
																				height : 288,
																				mirrorEffectCorrection : -58
																			}
																		]
																	}
																]
															},
															//eof be-travel card
															
															//symbie.org card
															{
																title : 'symbie.org',
																border : false,
																
																cls : 'medium12 centered',
																
																layout : 'row-fit',
																
																items : [
																	{
																		xtype : 'jemplatedcontainer',
																		autoEl : 'div',
																		
																		style : {
																			'padding-top' : '10px',
																			'padding-bottom' : '15px'
																		},
																		
																		jemplate : 'SymbieOrg.Samples.symbie-org',
																		autoHeight : true
																	},
																	{
																		xtype : 'jemplatedcontainer',
																		cls : 'small righted',
																		I18n : 'I18n.Home.zoom_hint',
																		autoHeight : true
																	},
																	{
																		xtype : 'container',
																		autoEl : 'div',
																		
																		height : '100%',
																		
																		layout : 'columnfit',
																		
																		style : {
																			'padding-top' : '15px'
																		},
																		
																		items : [
																			{
																				columnWidth : 1,
																				xtype : 'imagepreview',
																				previewSrc : '/static/images/preview/symbie-small.jpg',
																				fullsizeSrc : '/static/images/preview/symbie-full.jpg',
																				height : 347,
																				mirrorEffectCorrection : -50
																			}
																		]
																	}
																]
															},
															//eof symbie.org card
															
															//zemfiras.com card
															{
																title : 'zemfiras.com',
																border : false,
																
																cls : 'medium12 centered',
																
																layout : 'row-fit',
																
																items : [
																	{
																		xtype : 'jemplatedcontainer',
																		autoEl : 'div',
																		
																		style : {
																			'padding-top' : '10px',
																			'padding-bottom' : '55px'
																		},
																		
																		jemplate : 'SymbieOrg.Samples.zemfiras-com',
																		autoHeight : true
																	},
																	{
																		xtype : 'jemplatedcontainer',
																		cls : 'small righted',
																		I18n : 'I18n.Home.zoom_hint',
																		autoHeight : true
																	},
																	{
																		xtype : 'container',
																		autoEl : 'div',
																		
																		height : '100%',
																		
																		layout : 'columnfit',
																		
																		style : {
																			'padding-top' : '15px'
																		},
																		
																		items : [
																			{
																				columnWidth : 0.5,
																				xtype : 'imagepreview',
																				previewSrc : '/static/images/preview/zemfiras-small1.jpg',
																				fullsizeSrc : '/static/images/preview/zemfiras-full1.jpg',
																				height : 347,
																				mirrorEffectCorrection : -50
																			},
																			{
																				columnWidth : 0.5,
																				xtype : 'imagepreview',
																				previewSrc : '/static/images/preview/zemfiras-small2.jpg',
																				fullsizeSrc : '/static/images/preview/zemfiras-full2.jpg',
																				height : 347,
																				mirrorEffectCorrection : -50
																			}
																			
																		]
																	}
																]
															}
															//eof zemfiras.com card
															
														]
													}
												}
											]
											
										},
										//eof samples card
										
										//news card
										{
											titleI18n : 'I18n.Home.news',
											border : false,
											
											layout : 'accordion',
											layoutConfig : {
												 animate : true
											},
											
											items : [
												{
													border : false,
													titleI18n : 'I18n.Home.newsContent.n1.title',
													layout : 'fit',
													items : [
														{
															xtype : 'jemplatedcontainer',
															I18n : 'I18n.Home.newsContent.n1.text',
															
															cls : 'medium12'
														}
													]
												},
												{
													border : false,
													titleI18n : 'I18n.Home.newsContent.n2.title',
													layout : 'fit',
													items : [
														{
															xtype : 'jemplatedcontainer',
															I18n : 'I18n.Home.newsContent.n2.text',
															
															cls : 'medium12'
														}
													]
												}
											]
										},
										//eof news card
										
										
										//testimonials card
										{
											titleI18n : 'I18n.Home.testimonials',
											border : false,
											layout : 'fit'
//											items : [
//												{
//													xtype : 'jemplatedcontainer',
//													jemplate : 'SymbieOrg.Introduction',
//													
//													cls : 'medium12'
//												}
//											]
										}
										//eof testimonials card
									]
								}
								//eof tab panel
							]
						}
						//eof right column
					]
					
				});
				
				SymbieOrg.Home.superclass.constructor.call(this,config);
			},
			
			
			initComponent : function () {
				SymbieOrg.Home.superclass.initComponent.call(this);
			}
			
		});


		
/*jmpl:SymbieOrg.learn_more
	[% RAW I18n %]
	
	[% a(displayPath) %]<span class="">[% I18n.Home.learn_more %]</span></a>
jmpl*/
// CREATED BY JEMPLATE COMPILER, DO NOT MODIFY CONTENT OF THIS SECTION! md5hex:7c610eb40d81a158c8b5253e885793c8
Jemplate.templateMap['SymbieOrg.learn_more']=function(context){if(!context)throw('Jemplate function called without context\n');var stash=context.stash;var output='';try{output+='\n	';stash.set('I18n',I18n);output+='\n	\n	';output+=stash.get(['a',[stash.get('displayPath')]]);output+='<span class="">';output+=stash.get(['I18n',0,'Home',0,'learn_more',0]);output+='</span></a>\n';}
catch(e){var error=context.set_error(e,output);throw(error);}
return output;}
// CREATED BY JEMPLATE COMPILER, DO NOT MODIFY CONTENT OF THIS SECTION! md5hex:7c610eb40d81a158c8b5253e885793c8



/*jmpl:SymbieOrg.State
	[% RAW I18n %]
	
	[% IF I18n.language == 'ru' %]
		<div class="x-home-section-icon x-home-state"></div><div class="overview_section">Состояние</div><div class="x-clear"></div>
		
		Symbie находится в активной разработке. При этом вы уже можете посмотреть на сайты, созданные при помощи Symbie. Если вы хотите принять участие в этом проекте - 
		напишите на нашем форуме, или просто отправьте письмо на <b>rооt@symbiе.org</b> (перепечатайте адрес вручную).
	[% ELSE %]
		<div class="x-home-section-icon x-home-state"></div><div class="overview_section">State</div><div class="x-clear"></div>
		
		Symbie is currently under active development. Meanwhile you can already see several real-world applications of Symbie. If you want to participate in the project, 
		post in the forum, or just email to <b>rооt@symbiе.org</b> (retype the address manually).
	[% END %] 
jmpl*/
// CREATED BY JEMPLATE COMPILER, DO NOT MODIFY CONTENT OF THIS SECTION! md5hex:47956ae164786e69382bfe4f7e2482bf
Jemplate.templateMap['SymbieOrg.State']=function(context){if(!context)throw('Jemplate function called without context\n');var stash=context.stash;var output='';try{output+='\n	';stash.set('I18n',I18n);output+='\n	\n	';if(stash.get(['I18n',0,'language',0])=='ru'){output+='\n		<div class="x-home-section-icon x-home-state"></div><div class="overview_section">Состояние</div><div class="x-clear"></div>\n		\n		Symbie находится в активной разработке. При этом вы уже можете посмотреть на сайты, созданные при помощи Symbie. Если вы хотите принять участие в этом проекте - \n		напишите на нашем форуме, или просто отправьте письмо на <b>rооt@symbiе.org</b> (перепечатайте адрес вручную).\n	';}
else{output+='\n		<div class="x-home-section-icon x-home-state"></div><div class="overview_section">State</div><div class="x-clear"></div>\n		\n		Symbie is currently under active development. Meanwhile you can already see several real-world applications of Symbie. If you want to participate in the project, \n		post in the forum, or just email to <b>rооt@symbiе.org</b> (retype the address manually).\n	';}
output+=' \n';}
catch(e){var error=context.set_error(e,output);throw(error);}
return output;}
// CREATED BY JEMPLATE COMPILER, DO NOT MODIFY CONTENT OF THIS SECTION! md5hex:47956ae164786e69382bfe4f7e2482bf



		
/*jmpl:SymbieOrg.Nature
	[% RAW I18n %]
	
	[% IF I18n.language == 'ru' %]
		<div class="x-home-section-icon x-home-nature"></div><div class="overview_section overview_section_nature">Природа</div><div class="x-clear"></div>
		
		Symbie получил свое имя благодаря симбиотической природе - он является симбионитом проектов <a href="http://extjs.com">Ext</a>, <a href="http://code.google.com/p/joose-js/">Joose</a> и 
		<a href="http://jemplate.net">Jemplate</a>. От этих проектов, Symbie заимствует полноценные системы классов и рендеринга html шаблонов, набор готовых виджетов и множество других 
		<a href="http://extjs.com/deploy/dev/examples/samples.html">возможностей</a>. При этом авторы Symbie вносят вклад в разработку этих проектов - симбиоз Symbie является взаимовыгодным.
	[% ELSE %]
		<div class="x-home-section-icon x-home-nature"></div><div class="overview_section overview_section_nature">Nature</div><div class="x-clear"></div>
		
		Symbie received its name because of its symbiotic nature - it is a symbiot of <a href="http://extjs.com">Ext</a>, <a href="http://code.google.com/p/joose-js/">Joose</a> and 
		<a href="http://jemplate.net">Jemplate</a> projects. From those projects, Symbie adopts full-featured class system, html template rendering system, a number of widgets and many other great
		<a href="http://extjs.com/deploy/dev/examples/samples.html">features</a>. In turn, Symbie contributes to those projects - its a mutually beneficial symbiosys.
	[% END %] 
jmpl*/
// CREATED BY JEMPLATE COMPILER, DO NOT MODIFY CONTENT OF THIS SECTION! md5hex:bf7d613e214f91ebdb8bd4f3c0495c2f
Jemplate.templateMap['SymbieOrg.Nature']=function(context){if(!context)throw('Jemplate function called without context\n');var stash=context.stash;var output='';try{output+='\n	';stash.set('I18n',I18n);output+='\n	\n	';if(stash.get(['I18n',0,'language',0])=='ru'){output+='\n		<div class="x-home-section-icon x-home-nature"></div><div class="overview_section overview_section_nature">Природа</div><div class="x-clear"></div>\n		\n		Symbie получил свое имя благодаря симбиотической природе - он является симбионитом проектов <a href="http://extjs.com">Ext</a>, <a href="http://code.google.com/p/joose-js/">Joose</a> и \n		<a href="http://jemplate.net">Jemplate</a>. От этих проектов, Symbie заимствует полноценные системы классов и рендеринга html шаблонов, набор готовых виджетов и множество других \n		<a href="http://extjs.com/deploy/dev/examples/samples.html">возможностей</a>. При этом авторы Symbie вносят вклад в разработку этих проектов - симбиоз Symbie является взаимовыгодным.\n	';}
else{output+='\n		<div class="x-home-section-icon x-home-nature"></div><div class="overview_section overview_section_nature">Nature</div><div class="x-clear"></div>\n		\n		Symbie received its name because of its symbiotic nature - it is a symbiot of <a href="http://extjs.com">Ext</a>, <a href="http://code.google.com/p/joose-js/">Joose</a> and \n		<a href="http://jemplate.net">Jemplate</a> projects. From those projects, Symbie adopts full-featured class system, html template rendering system, a number of widgets and many other great\n		<a href="http://extjs.com/deploy/dev/examples/samples.html">features</a>. In turn, Symbie contributes to those projects - its a mutually beneficial symbiosys.\n	';}
output+=' \n';}
catch(e){var error=context.set_error(e,output);throw(error);}
return output;}
// CREATED BY JEMPLATE COMPILER, DO NOT MODIFY CONTENT OF THIS SECTION! md5hex:bf7d613e214f91ebdb8bd4f3c0495c2f


/*jmpl:SymbieOrg.Introduction
	[% RAW I18n %]
	
	[% IF I18n.language == 'ru' %]
		<div class="x-home-section-icon x-home-overview"></div><div class="overview_section">Кратко</div><div class="x-clear"></div>
		
		Symbie - это среда для создания <b>виджет-ориентированных веб-сайтов</b>.  
		Каждый элемент такого сайта - это повторно используемый виджет, представленный в виде JavaScript класса, который может быть 
		расширен, унаследован дочерним классом, комбинирован с другими - и все это в рамках объектно ориентированного подхода.
	[% ELSE %]
		<div class="x-home-section-icon x-home-overview"></div><div class="overview_section">Overview</div><div class="x-clear"></div>
		
		Symbie is the framework for creation web-sites in the <b>widget-oriented way</b>. With Symbie, each element of the site - is a reusable widget, presented as JavaScript class, 
		which can be extended, subclassed, mixed - all this in the established OOP paradigm scope.
	[% END %] 
jmpl*/
// CREATED BY JEMPLATE COMPILER, DO NOT MODIFY CONTENT OF THIS SECTION! md5hex:230e110d546d6693db898dc2ea54fdfa
Jemplate.templateMap['SymbieOrg.Introduction']=function(context){if(!context)throw('Jemplate function called without context\n');var stash=context.stash;var output='';try{output+='\n	';stash.set('I18n',I18n);output+='\n	\n	';if(stash.get(['I18n',0,'language',0])=='ru'){output+='\n		<div class="x-home-section-icon x-home-overview"></div><div class="overview_section">Кратко</div><div class="x-clear"></div>\n		\n		Symbie - это среда для создания <b>виджет-ориентированных веб-сайтов</b>.  \n		Каждый элемент такого сайта - это повторно используемый виджет, представленный в виде JavaScript класса, который может быть \n		расширен, унаследован дочерним классом, комбинирован с другими - и все это в рамках объектно ориентированного подхода.\n	';}
else{output+='\n		<div class="x-home-section-icon x-home-overview"></div><div class="overview_section">Overview</div><div class="x-clear"></div>\n		\n		Symbie is the framework for creation web-sites in the <b>widget-oriented way</b>. With Symbie, each element of the site - is a reusable widget, presented as JavaScript class, \n		which can be extended, subclassed, mixed - all this in the established OOP paradigm scope.\n	';}
output+=' \n';}
catch(e){var error=context.set_error(e,output);throw(error);}
return output;}
// CREATED BY JEMPLATE COMPILER, DO NOT MODIFY CONTENT OF THIS SECTION! md5hex:230e110d546d6693db898dc2ea54fdfa



/*jmpl:SymbieOrg.Samples.be-travel
	[% RAW I18n %]
	
	[% IF I18n.language == 'ru' %]
		<a href="http://be-travel.ru"><b>be-travel.ru</b></a> - первый сайт, созданный на Symbie. Сайт представляет собой цельное веб-приложение, выполняющееся в браузере. Генерация html на сервере отстуствует.
		Сайт демонстрирует многообразие возможностей по использованию раскладок страницы.
	[% ELSE %]
		<a href="http://be-travel.ru"><b>be-travel.ru</b></a> - the first web-site, created with Symbie. It is a cohesive web-application, running in browser. No html generation on server-side.
		This site demonstrates the whole variety of page layout possibilities. English interface is available via combobox above the main menu buttons.
	[% END %] 
jmpl*/
// CREATED BY JEMPLATE COMPILER, DO NOT MODIFY CONTENT OF THIS SECTION! md5hex:f4931a7320341e41ee7410a1ad7362c5
Jemplate.templateMap['SymbieOrg.Samples.be-travel']=function(context){if(!context)throw('Jemplate function called without context\n');var stash=context.stash;var output='';try{output+='\n	';stash.set('I18n',I18n);output+='\n	\n	';if(stash.get(['I18n',0,'language',0])=='ru'){output+='\n		<a href="http://be-travel.ru"><b>be-travel.ru</b></a> - первый сайт, созданный на Symbie. Сайт представляет собой цельное веб-приложение, выполняющееся в браузере. Генерация html на сервере отстуствует.\n		Сайт демонстрирует многообразие возможностей по использованию раскладок страницы.\n	';}
else{output+='\n		<a href="http://be-travel.ru"><b>be-travel.ru</b></a> - the first web-site, created with Symbie. It is a cohesive web-application, running in browser. No html generation on server-side.\n		This site demonstrates the whole variety of page layout possibilities. English interface is available via combobox above the main menu buttons.\n	';}
output+=' \n';}
catch(e){var error=context.set_error(e,output);throw(error);}
return output;}
// CREATED BY JEMPLATE COMPILER, DO NOT MODIFY CONTENT OF THIS SECTION! md5hex:f4931a7320341e41ee7410a1ad7362c5



/*jmpl:SymbieOrg.Samples.symbie-org
	[% RAW I18n %]
	
	[% IF I18n.language == 'ru' %]
		<a href="http://symbie.org"><b>symbie.org</b></a> - конечно же, этот сайт тоже создан на Symbie. Вы можете посмотреть исходный текст сайта <a href="http://svn.symbie.org/symbie.org/trunk/SymbieOrg/root/lib/">здесь</a>.
	[% ELSE %]
		<a href="http://symbie.org"><b>symbie.org</b></a> - and of course, this site was also created with Symbie. You can check the sources <a href="http://svn.symbie.org/symbie.org/trunk/SymbieOrg/root/lib/">here</a>.
	[% END %] 
jmpl*/
// CREATED BY JEMPLATE COMPILER, DO NOT MODIFY CONTENT OF THIS SECTION! md5hex:a24e08cfbc3b7c62508c74678e872332
Jemplate.templateMap['SymbieOrg.Samples.symbie-org']=function(context){if(!context)throw('Jemplate function called without context\n');var stash=context.stash;var output='';try{output+='\n	';stash.set('I18n',I18n);output+='\n	\n	';if(stash.get(['I18n',0,'language',0])=='ru'){output+='\n		<a href="http://symbie.org"><b>symbie.org</b></a> - конечно же, этот сайт тоже создан на Symbie. Вы можете посмотреть исходный текст сайта <a href="http://svn.symbie.org/symbie.org/trunk/SymbieOrg/root/lib/">здесь</a>.\n	';}
else{output+='\n		<a href="http://symbie.org"><b>symbie.org</b></a> - and of course, this site was also created with Symbie. You can check the sources <a href="http://svn.symbie.org/symbie.org/trunk/SymbieOrg/root/lib/">here</a>.\n	';}
output+=' \n';}
catch(e){var error=context.set_error(e,output);throw(error);}
return output;}
// CREATED BY JEMPLATE COMPILER, DO NOT MODIFY CONTENT OF THIS SECTION! md5hex:a24e08cfbc3b7c62508c74678e872332


/*jmpl:SymbieOrg.Samples.zemfiras-com
	[% RAW I18n %]
	
	[% IF I18n.language == 'ru' %]
		<a href="http://zemfiras.com"><b>zemfiras.com</b></a> Сайт-портфолио девушки-фотографа - Земфиры.  
	[% ELSE %]
		<a href="http://zemfiras.com"><b>zemfiras.com</b></a> This is a portfolio site of the starting photographer girl - Zemfira.
	[% END %] 
jmpl*/
// CREATED BY JEMPLATE COMPILER, DO NOT MODIFY CONTENT OF THIS SECTION! md5hex:661db736a445c06276bec8638c4dc033
Jemplate.templateMap['SymbieOrg.Samples.zemfiras-com']=function(context){if(!context)throw('Jemplate function called without context\n');var stash=context.stash;var output='';try{output+='\n	';stash.set('I18n',I18n);output+='\n	\n	';if(stash.get(['I18n',0,'language',0])=='ru'){output+='\n		<a href="http://zemfiras.com"><b>zemfiras.com</b></a> Сайт-портфолио девушки-фотографа - Земфиры.  \n	';}
else{output+='\n		<a href="http://zemfiras.com"><b>zemfiras.com</b></a> This is a portfolio site of the starting photographer girl - Zemfira.\n	';}
output+=' \n';}
catch(e){var error=context.set_error(e,output);throw(error);}
return output;}
// CREATED BY JEMPLATE COMPILER, DO NOT MODIFY CONTENT OF THIS SECTION! md5hex:661db736a445c06276bec8638c4dc033


		

	}); //eof use

}); //eof declare
