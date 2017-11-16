/*!
 * jquery.overflown.js 
 * @version: 1.0 
 * @author: Zeta Software GmbH
 *
 * https://github.com/ZetaSoftware/jquery-overflown-plugin
 * License: MIT
 */

// UMD https://github.com/umdjs/umd/blob/master/templates/jqueryPlugin.js
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = function( root, jQuery ) {
            if ( jQuery === undefined ) {
                // require('jQuery') returns a factory that requires window to
                // build a jQuery instance, we normalize how we use modules
                // that require this pattern but the window provided is a noop
                // if it's defined (how jquery works)
                if ( typeof window !== 'undefined' ) {
                    jQuery = require('jquery');
                }
                else {
                    jQuery = require('jquery')(root);
                }
            }
            factory(jQuery);
            return jQuery;
        };
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    $.fn.overflown = function (direction) { 
    	if (typeof(direction)==='undefined') direction = "any";
		var e=this[0];
		var buffer = 4; // safety-buffer to compensate browser rounding errors and such
		if ( typeof e !== "undefined" ){
			switch(direction) {
				case "x":
					return e.scrollWidth>(e.clientWidth+buffer);
					break;
				case "y":
					return e.scrollHeight>(e.clientHeight+buffer);
					break;
				default:
					return e.scrollHeight>(e.clientHeight+buffer)||e.scrollWidth>(e.clientWidth+buffer);
			}
		}
		else{
			return false;
		}
    };
}));