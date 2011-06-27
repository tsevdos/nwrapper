(function($) {

$.fn.nwrapper = function(options){

	var defaults = {
		wrapEvery      : 1,
		defaultClasses : true,
		extraClasses   : false,
		htmlStructure  : 'div'
    };

	settings = $.extend({}, defaults, options);

	var elements    = $(this).children();
	var elementsLen = elements.length;

	for ( var i = 0, numb = 1; i < elementsLen; i += settings.wrapEvery, numb++ ){
		
		// Default Classes Array
		var classes = [];
		if ( settings.defaultClasses ) {
		
			classes[0] = 'wrapper';
			classes[1] = 'wrapper-' + numb;

			if (numb==1) {
				classes[2] = 'first';
			}
				

			if (numb==Math.ceil(elementsLen/settings.wrapEvery)) {
				classes[2] = 'last';
			}

		}

		// Merge Default class with Extra Class
		if ( settings.extraClasses ) {
			$.merge( classes, settings.extraClasses );
		}
		
		// If you find any classes crete the class string
		if ( classes.length > 0 ) {
			htmlClassesString = 'class="' + classes.join(" ") + '"';
		} else {
			htmlClassesString = '';
		}
		
		elements.filter(':eq(' + i + '), :lt(' + (i + settings.wrapEvery) + '):gt(' + i + ')').wrapAll('<' + settings.htmlStructure + ' ' + htmlClassesString + ' />');

	}
	
	return $(this);
};

})(jQuery);