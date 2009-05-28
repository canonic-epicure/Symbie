/*jmpl:preprocess

[% 
	MACRO a(param) BLOCK;
	    RAW Ext;
	    RAW Symbie;
	    
	    IF param.typeof() == 'array';
	    	arg = param;
	    ELSE;
	    	arg = arguments;
	    END;
	    
	    html = '<a href="' _ Symbie.Dispatcher.getHrefForDisplayChain(arg) _ '" onclick="Symbie.Dispatcher.onAClick(this,event)">';        

	    html;        
	END; 
%]


[%
    MACRO src(path, thumb_w, thumb_h, type) BLOCK;
        
        IF thumb_w;
            IF !thumb_h;
                thumb_h = thumb_w;
            END;
            
            path = path.replace('/(\\d+)(-\\d+x\\d+)?.(\\w+?)$','/$1-' _ thumb_w _ 'x' _ thumb_h _ '.$3');
            path = path.replace('^/static','/thumbnail');
        END;
        
        IF !path;
        	IF type == 'place';
            	path = '/static/images/avatar/empty-place.png';
            ELSE;
            	path = '/static/images/avatar/empty-user.png';
            END;
        END;
        
        path;
        
    END;
%]

[%
    MACRO img(path, thumb_w, thumb_h, type) BLOCK;
        
        IF thumb_w;
            IF !thumb_h;
                thumb_h = thumb_w;
            END;
            
            wh = ' width = "' _ thumb_w _ '" height="' _ thumb_h _ '" ';
        END;
        
        path = src(path, thumb_w, thumb_h, type);
        
        html = '<img src="' _ path _ '"' _ wh _ '>';
        html;        
    END;
%]

jmpl*/
// CREATED BY JEMPLATE COMPILER, DO NOT MODIFY CONTENT OF THIS SECTION! md5hex:569cf91babebdaa6472ede1f950f19a1
Jemplate.templateMap['preprocess']=function(context){if(!context)throw('Jemplate function called without context\n');var stash=context.stash;var output='';try{output+='\n\n';stash.set('a',function(){var output='';var args={};var fargs=Array.prototype.slice.call(arguments);args['param']=fargs.shift();args.arguments=Array.prototype.slice.call(arguments);var params=fargs.shift()||{};for(var key in params){args[key]=params[key];}
context.stash.clone(args);try{stash.set('Ext',Ext);stash.set('Symbie',Symbie);if(stash.get(['param',0,'typeof',[]])=='array'){stash.set('arg',stash.get('param'));}
else{stash.set('arg',stash.get('arguments'));}
stash.set('html','<a href="'+stash.get(['Symbie',0,'Dispatcher',0,'getHrefForDisplayChain',[stash.get('arg')]])+'" onclick="Symbie.Dispatcher.onAClick(this,event)">');output+=stash.get('html');}
catch(e){var error=context.set_error(e,output);throw(error);}
context.stash.declone();return output;});output+='\n\n\n';stash.set('src',function(){var output='';var args={};var fargs=Array.prototype.slice.call(arguments);args['path']=fargs.shift();args['thumb_w']=fargs.shift();args['thumb_h']=fargs.shift();args['type']=fargs.shift();args.arguments=Array.prototype.slice.call(arguments);var params=fargs.shift()||{};for(var key in params){args[key]=params[key];}
context.stash.clone(args);try{if(stash.get('thumb_w')){if(!stash.get('thumb_h')){stash.set('thumb_h',stash.get('thumb_w'));}
stash.set('path',stash.get(['path',0,'replace',['/(\\d+)(-\\d+x\\d+)?.(\\w+?)$','/$1-'+stash.get('thumb_w')+'x'+stash.get('thumb_h')+'.$3']]));stash.set('path',stash.get(['path',0,'replace',['^/static','/thumbnail']]));}
if(!stash.get('path')){if(stash.get('type')=='place'){stash.set('path','/static/images/avatar/empty-place.png');}
else{stash.set('path','/static/images/avatar/empty-user.png');}}
output+=stash.get('path');}
catch(e){var error=context.set_error(e,output);throw(error);}
context.stash.declone();return output;});output+='\n\n';stash.set('img',function(){var output='';var args={};var fargs=Array.prototype.slice.call(arguments);args['path']=fargs.shift();args['thumb_w']=fargs.shift();args['thumb_h']=fargs.shift();args['type']=fargs.shift();args.arguments=Array.prototype.slice.call(arguments);var params=fargs.shift()||{};for(var key in params){args[key]=params[key];}
context.stash.clone(args);try{if(stash.get('thumb_w')){if(!stash.get('thumb_h')){stash.set('thumb_h',stash.get('thumb_w'));}
stash.set('wh',' width = "'+stash.get('thumb_w')+'" height="'+stash.get('thumb_h')+'" ');}
stash.set('path',stash.get(['src',[stash.get('path'),stash.get('thumb_w'),stash.get('thumb_h'),stash.get('type')]]));stash.set('html','<img src="'+stash.get('path')+'"'+stash.get('wh')+'>');output+=stash.get('html');}
catch(e){var error=context.set_error(e,output);throw(error);}
context.stash.declone();return output;});output+='\n\n';}
catch(e){var error=context.set_error(e,output);throw(error);}
return output;}
// CREATED BY JEMPLATE COMPILER, DO NOT MODIFY CONTENT OF THIS SECTION! md5hex:569cf91babebdaa6472ede1f950f19a1

