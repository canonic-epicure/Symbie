declare( 'Ext::ux::I18n', function (use,checkState,__PACKAGE__) {

	Ext.ux.I18n = {
		intercepted : {
			'Ext.form.Field.prototype.initComponent' : Ext.form.Field.prototype.initComponent,
			'Ext.menu.Item.prototype.initComponent' : Ext.menu.Item.prototype.initComponent,
			'Ext.Panel.prototype.initComponent' : Ext.Panel.prototype.initComponent,
			'Ext.Button.prototype.initComponent' : Ext.Button.prototype.initComponent,
			'Ext.form.Checkbox.prototype.initComponent' : Ext.form.Checkbox.prototype.initComponent,
			'Ext.form.TextField.prototype.initComponent' : Ext.form.TextField.prototype.initComponent
		},
		
		setLanguage : function (lang) {
        	if (I18n.language != lang) {
        		Ext.ux.util.Cookies.set('symbie_org_current_language', lang);
        		
        		use('SymbieOrg::I18n::' + lang, function () {
                	I18n = SymbieOrg.I18n[lang];
                	Symbie.Widget.Root.publish('languageChanged', lang);
                	Symbie.Widget.Root.publish('afterLanguageChanged', lang);
        		});
        	}
		}
	}
	
	
	Ext.override(Ext.form.Field, {
		initComponent : function () {
			if (this.fieldLabelI18n) {
				this.fieldLabel = this.fieldLabel || eval(this.fieldLabelI18n);
				
				this.subscribe('languageChanged', this.i18nFieldLabel, this);
			}

			Ext.ux.I18n.intercepted['Ext.form.Field.prototype.initComponent'].call(this);
		},
		
		i18nFieldLabel : function(lang){
			//FIXME
			if (!this.el.up('.x-form-item')) return;
    		
    		var newText = eval(this.fieldLabelI18n);
    		
    		if (newText) {
    			
    			this.el.up('.x-form-item').down('label').update(newText);
    		}
		}
	}); //eof override
	    
	
	Ext.override(Ext.menu.Item, {
		initComponent : function () {
			if (this.I18n) {
				this.text = this.text || eval(this.I18n);
				
				this.subscribe('languageChanged', this.onLanguageChanged, this);
			}

			Ext.ux.I18n.intercepted['Ext.menu.Item.prototype.initComponent'].call(this);
		},
		
		onLanguageChanged : function(lang){
    		var newText = eval(this.I18n);
    		
    		if (newText) this.setText(newText);
		}
	}); //eof override
	
	
	Ext.override(Ext.Panel, {
	    initComponent : function () {
	    	if (this.titleI18n) {
	    		this.title = this.title || eval(this.titleI18n);
	    		
	    		this.subscribe('languageChanged', this.onLanguageChanged, this);
	    	}
	    	
	    	Ext.ux.I18n.intercepted['Ext.Panel.prototype.initComponent'].call(this);
	    },
	    
		onLanguageChanged : function(lang){
    		var newText = eval(this.titleI18n);
    		
    		if (newText) this.setTitle(newText);
		}
	}); //eof override
	
	
	Ext.override(Ext.Button, {
		initComponent : function () {
			if (this.I18n) {
				this.text = this.text || eval(this.I18n);
				
				this.subscribe('languageChanged', this.onLanguageChanged, this);
			}

			Ext.ux.I18n.intercepted['Ext.Button.prototype.initComponent'].call(this);
		},
		
		onLanguageChanged : function(lang){
    		var newText = eval(this.I18n);
    		
    		if (newText) this.setText(newText);
		}
	}); //eof override
	
	
	Ext.override(Ext.form.Checkbox, {
		initComponent : function () {
			if (this.boxLabelI18n) {
				this.boxLabel = this.boxLabel || eval(this.boxLabelI18n);
				
				this.subscribe('languageChanged', this.onLanguageChanged, this);
			}

			Ext.ux.I18n.intercepted['Ext.form.Checkbox.prototype.initComponent'].call(this);
		},
		
		onLanguageChanged : function(lang){
			//FIXME    		
    		if (!this.el.up('.x-form-item')) return;
    		
    		var newText = eval(this.boxLabelI18n);
    		
    		if (newText) this.el.up('.x-form-item').child('label.x-form-cb-label').update(newText);
		}
	}); //eof override
	

	Ext.override(Ext.form.TextField, {
		initComponent : function () {
			if (this.emptyTextI18n) {
				this.emptyText = this.emptyText || eval(this.emptyTextI18n);
				
				this.subscribe('languageChanged', this.i18nEmptyText, this);
			}

			Ext.ux.I18n.intercepted['Ext.form.TextField.prototype.initComponent'].call(this);
		},
		
		i18nEmptyText : function(lang){
    		var newText = eval(this.emptyTextI18n);
    		
    		if (newText) this.applyEmptyText();
		}
	}); //eof override	

	
}); //eof declare