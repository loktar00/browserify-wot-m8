'use strict';

var fancyText = require('./fancy');

function ready(){
    document.removeEventListener( 'DOMContentLoaded', ready, false );
    window.removeEventListener( 'load', ready, false );

    [].slice.call(document.querySelectorAll('.fancy')).forEach(
    	function(el){
    		fancyText(el);
    	});
}

document.addEventListener( 'DOMContentLoaded', ready, false );
window.addEventListener( 'load', ready, false );