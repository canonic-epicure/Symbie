declare('Jemplate::I18n::phrase', function (){

/*jmpl:I18n.phrase:pretty
	[% JAVASCRIPT %]
		stash.set('result', eval(stash.get('self').I18n) );
	[% END %]
	[% result %]
jmpl*/
// CREATED BY JEMPLATE COMPILER, DO NOT MODIFY CONTENT OF THIS SECTION! md5hex:9462c49763986ee30d440a1df7637169
Jemplate.templateMap['I18n.phrase'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
output += '\n	';
//line 4 "I18n.phrase"

		stash.set('result', eval(stash.get('self').I18n) );
	
output += '\n	';
//line 5 "I18n.phrase"
output += stash.get('result');
output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}


// CREATED BY JEMPLATE COMPILER, DO NOT MODIFY CONTENT OF THIS SECTION! md5hex:9462c49763986ee30d440a1df7637169

}); //eof declare