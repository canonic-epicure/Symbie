declare( 'SymbieOrg::MainLayout', function (use, checkState, __PACKAGE__){

    use(['Ext::ux::layout::Coolcard', 'Ext::ux::layout::ColumnFit', 'Ext::ux::layout::RowFitLayout', 'Ext::ux::panel::JemplatedContainer', 'SymbieOrg::custom::GradientButton'], function(){
        
        SymbieOrg.MainLayout = Ext.extend(Ext.Container, {
            
            disableNavigation : true,
            disableBookmarking : true,
			
			slots : true,
			slot : 'main',
			
			currentButton : undefined,
            
            constructor: function(config) {        
                config = Symbie.Widget.preprocess.call(this,config, __PACKAGE__);
                
				Ext.apply(config, {
//					cls : 'transparent',
					
					layout : 'columnfit',

					style : {
						overflow : 'visible'
//						'height' : '100%',
//						'min-height' : '100%'
					},
					
					items : [
	        			//left column
						{
							xtype : 'container',
							autoEl : 'div',
							
							columnWidth : 0.5,
							
							//FIXME sane display:none detection in columnfit layout
//							height : 1
							autoHeight : true,
							
//							style : {
//								'height' : '100%'
//							},
							
							listeners : {
								'render' : function (self) {
									self.el.update('&nbsp;');
								}
							}
						},
						//eof left column
						
						//main column
						{
							xtype : 'container',
							autoEl : 'div',
							slot : 'maincolumn',

							style : {
								position : 'relative',
								overflow : 'visible',
//								'height' : '100%',
//								'min-height' : '100%',
								'z-index' : 0
							},
							
							width : 980,

							autoHeight : true,
							
		                    layout: 'row-fit',
		                    
		                    items: [
			                	//header
		                		{
									xtype : 'container',
									autoEl : 'div',
		
									height: 150,
			                        layout: 'columnfit',
			                        
									items : [
										
										//empty column
										{
											xtype : 'container',
											autoEl : 'div',
											
											width : 395
										},
										//eof empty column
										
										//accounting column 	
										{
											xtype : 'container',
											autoEl : 'div',
											
											columnWidth : 1,
											
											style : {
												'margin-right' : '5px',
												'margin-top' : '5px'
											},

											layout : 'row-fit',
											
											items : [
												//language choosing row
												{
													xtype : 'jemplatedcontainer',
													slot : 'language',
													jemplate : 'SymbieOrg.MainLayout.ChooseLanguage',
													cls : 'x-main-choose-language medium',
													
													height : 30,
													updateOnLanguageChange : false
												},
												//eof language choosing row
												
												//row with buttons	
												{
													xtype : 'container',
													autoEl : 'div',
													
													height : 58,
													
													layout: 'columnfit',
													
													style : {
														'padding-top' : '20px'
													},
													
													cls : 'x-header-menu',
													
													defaults : {
														xtype : 'gradientbutton',
														width : 111,
														style : 'margin-left:5px;display:inline;'
													},
													
													items : [
														{
															I18n : 'I18n.mainMenu.home',
															displayPath : '/SymbieOrg::MainLayout.center/SymbieOrg::Home',
															baseClass : 'x-gradient-button x-gradient-button-active',
															slot : 'home'
														},
														{
															I18n : 'I18n.mainMenu.about',
															displayPath : '/SymbieOrg::MainLayout.center/SymbieOrg::About',
															slot : 'about'
														},
														{
															I18n : 'I18n.mainMenu.download',
															displayPath : '/SymbieOrg::MainLayout.center/SymbieOrg::Download',
															slot : 'download'
														},
														{
															I18n : 'I18n.mainMenu.forum',
															displayPath : '/SymbieOrg::MainLayout.center/SymbieOrg::Forum',
															slot : 'forum'
														},
														{
															I18n : 'I18n.mainMenu.wiki',
															displayPath : '/SymbieOrg::MainLayout.center/SymbieOrg::Wiki',
															slot : 'wiki'
														}
													]
												}
												//eof row with buttons
												
											]
										}
										//eof accounting column
									]
			
			                    },
			                    //eof header
			                    
			                    //main content area
			                    {
									xtype : 'container',
									autoEl : 'div',
									cls : 'x-main-body',
									
									slot: 'center',
			
									defaults : {
						            	border : false
					            	},
					            	
					            	autoHeight : true,
			                        
//					            	layout: 'card'
			                        layout: 'coolcard'
			                    },
			                    //eof main content area
			                    
			                    //footer
		                    	{
									slot: 'footer',
									
									xtype : 'container',
									cls : 'x-main-footer',
									autoEl : 'div',
			                                                
			                        height: 135,
			                        
			                        items : [
			                        	{
											xtype : 'container',
											cls : 'x-main-footer-back',
											autoEl : 'div'
			                        	}
			                        ]
			                    }
			                    //eof footer
		                    ]
						},
						//eof main column
						
						//right column
						{
							xtype : 'container',
							autoEl : 'div',
							
							columnWidth : 0.5,
							
							//FIXME sane display:none detection in columnfit layout
//							height : 1
							autoHeight : true,
							
							listeners : {
								'render' : function (self) {
									self.el.update('&nbsp;');
								}
							}
							
						}
						//eof right column
					]
					
                }); //eof apply
                
				
				SymbieOrg.MainLayout.superclass.constructor.call(this, config);
            }, //eof constructor
            
			
            initComponent: function() {
				SymbieOrg.MainLayout.superclass.initComponent.call(this);
				
				this.currentButton = this.slots.home;
				
				this.slots.maincolumn.on('render', function (self) {
					Ext.DomHelper.append(self.el, '<div class="logo_background"></div>');
				});
				
				
				this.slots.language.on('render', this.setupLanguageChoosing, this.slots.language);
				this.slots.language.subscribe('languageChanged', this.updateFlag, this.slots.language);
				
				this.subscribe('dispatch', this.onDispatch, this);
				
	            this.adjustHorizontalScrollbar();
	            Ext.EventManager.onWindowResize(this.adjustHorizontalScrollbar, this);
				
				
//				this.subscribe('authenticated',function () {
//					this.slots.accounting.refresh();                                    
//                },this);
//				
//				this.subscribe('disauthenticated',function () {
//					this.slots.accounting.refresh();                                    
//                },this);
				
			}, //eof initComponent
			
			
			adjustHorizontalScrollbar : function () {
				var html = Ext.get('html_wrapper');
				
				if (html.getWidth() > 980) {
					html.applyStyles({
						'overflow-x' : 'hidden'
					})
				} else {
					html.applyStyles({
						'overflow-x' : 'auto'
					})
				}
			},
			
			
			setupLanguageChoosing : function () {
				this.el.child('.language.eng').on('click', function () {
					Ext.ux.I18n.setLanguage('en');
				});
				
				this.el.child('.language.rus').on('click', function () {
					Ext.ux.I18n.setLanguage('ru');
				});
			},
			
			
			onDispatch : function (lastCmp, c) {
				this.currentButton.removeClass('x-gradient-button-active');
				
				switch (lastCmp.PACKAGE) {
					case 'SymbieOrg::Home' :
						this.currentButton = this.slots.home;
						break;
					
					case 'SymbieOrg::About' :
						this.currentButton = this.slots.about;
						break;
						
					case 'SymbieOrg::Download' :
						this.currentButton = this.slots.download;
						break;
						
					case 'SymbieOrg::Forum' :
						this.currentButton = this.slots.forum;
						break;
						
					case 'SymbieOrg::Wiki' :
						this.currentButton = this.slots.wiki;
						break;
				} 
				
				this.currentButton.addClass('x-gradient-button-active');
			},
			
			updateFlag : function () {
				this.el.child('#langFlag').dom.src = '/static/images/language-flags/' + I18n.language + '.png';
			}
			
        }); //eof extend

        
/*jmpl:SymbieOrg.MainLayout.ChooseLanguage
	[%
		RAW I18n;
		lang_path = '/static/images/language-flags/' _ I18n.language _ '.png';
	%]
	<img id="langFlag" src="[% lang_path %]"> <span class="language eng">eng</span> / <span class="language rus">рус</span>
jmpl*/
// CREATED BY JEMPLATE COMPILER, DO NOT MODIFY CONTENT OF THIS SECTION! md5hex:93e7aaa9435625cd92623f947adf1320
Jemplate.templateMap['SymbieOrg.MainLayout.ChooseLanguage']=function(context){if(!context)throw('Jemplate function called without context\n');var stash=context.stash;var output='';try{output+='\n	';stash.set('I18n',I18n);stash.set('lang_path','/static/images/language-flags/'+stash.get(['I18n',0,'language',0])+'.png');output+='\n	<img id="langFlag" src="';output+=stash.get('lang_path');output+='"> <span class="language eng">eng</span> / <span class="language rus">рус</span>\n';}
catch(e){var error=context.set_error(e,output);throw(error);}
return output;}
// CREATED BY JEMPLATE COMPILER, DO NOT MODIFY CONTENT OF THIS SECTION! md5hex:93e7aaa9435625cd92623f947adf1320



/*jmpl:SymbieOrg.MainLayout.Accounting
    [% RAW Symbie %]
    [% RAW I18n %]
    
    <div class="rounded-field-wrp">    
    	<input class="name" type="text"/>
    </div>
    
    password <input class="password" type="text"> <span class="login">login</span>
jmpl*/
// CREATED BY JEMPLATE COMPILER, DO NOT MODIFY CONTENT OF THIS SECTION! md5hex:90d3e895c8652a6af4327f78f960b9f7
Jemplate.templateMap['SymbieOrg.MainLayout.Accounting']=function(context){if(!context)throw('Jemplate function called without context\n');var stash=context.stash;var output='';try{output+='\n    ';stash.set('Symbie',Symbie);output+='\n    ';stash.set('I18n',I18n);output+='\n    \n    <div class="rounded-field-wrp">    \n    	<input class="name" type="text"/>\n    </div>\n    \n    password <input class="password" type="text"> <span class="login">login</span>\n';}
catch(e){var error=context.set_error(e,output);throw(error);}
return output;}
// CREATED BY JEMPLATE COMPILER, DO NOT MODIFY CONTENT OF THIS SECTION! md5hex:90d3e895c8652a6af4327f78f960b9f7



/*jmpl:SymbieOrg.MainLayout.Footer
	[% RAW I18n %]
	
	root@symbie.org
	
	<div class="copyright">
	    2008 © Symbie.org
	</div>

jmpl*/
// CREATED BY JEMPLATE COMPILER, DO NOT MODIFY CONTENT OF THIS SECTION! md5hex:c509a3e91a9796af661e95a9659029fd
Jemplate.templateMap['SymbieOrg.MainLayout.Footer']=function(context){if(!context)throw('Jemplate function called without context\n');var stash=context.stash;var output='';try{output+='\n	';stash.set('I18n',I18n);output+='\n	\n	root@symbie.org\n	\n	<div class="copyright">\n	    2008 © Symbie.org\n	</div>\n\n';}
catch(e){var error=context.set_error(e,output);throw(error);}
return output;}
// CREATED BY JEMPLATE COMPILER, DO NOT MODIFY CONTENT OF THIS SECTION! md5hex:c509a3e91a9796af661e95a9659029fd


		
    }); //eof use


}); //eof declare



//	name
//	<span class="x-rounded-field">
//		<span class="left">
//			<span class="right">
//				<span class="inner">
//					<span class="text">
//						<input class="password" type="text">
//					</span>
//				</span>
//			</span>
//		</span>
//	</span>


//
//												//account row
//												{
//													xtype : 'container',
//													autoEl : 'div',
//													slot : 'accounting',
//													cls : 'x-main-accounting medium12 righted vcentered',
//													
//													height : 30,
//													
//													layout : 'columnfit',
//													
//													items : [
//														{
//															xtype : 'jemplatedcontainer',
//															width : 45,
//															I18n : 'I18n.accounting.name',
//															style : {
//																'margin-right' : '3px'
//															}
//														},
//														{
//															xtype : 'roundedfield',
//															columnWidth : 0.5
//														},
//														{
//															xtype : 'jemplatedcontainer',
//															width : 65,
//															I18n : 'I18n.accounting.password',
//															style : {
//																'margin-right' : '3px'
//															}
//														},
//														{
//															xtype : 'roundedfield',
//															columnWidth : 0.5
//														},
//														{
//															xtype : 'container',
//															autoEl : 'div',
//															width : 5
//														},
//														{
//															xtype : 'roundedbutton',
//															I18n : 'I18n.accounting.login',
//															width : 50
//														}
//													]
//												}
//												//eof account row
