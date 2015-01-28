# nwrapper jQuery plug in #

[jQuery](http://jquery.com/ "jQuery.com official site") provides a large variety of funtions for element manipulation, that in most cases will manipulate the selected elements in no time. A very useful function for every day manipulation is the [.wrap()](http://api.jquery.com/wrap/ "jQuery wrap function") function that we can use to wrap an HTML structure around each jQuery element. But what happens when we want to wrap an HTML structure every n’th number of the selected elements? Unfortunately, jQuery doesn’t provide any options to the warp function in order to to do something similar.

Well with [nwrapper](http://phrappe.com/javascript/nwrapper-jquery-plug-in/ "nwrapper jQuery plugin") you can do just that.

## How to install/use ##

First of all the plugin (after you load jQuery) just like this :

`<script type="text/javascript" src="../js/jquery.min.js"></script>
<script type="text/javascript" src="../js/jquery.nwrapper.js"></script>`

To use it, just select the **parent element** of the elements you want to wrap, choose how often you’ll apply the wrap (wrapEvery attribute – default is 1), choose if you need the default classes or even provide your own extra classes (extraClasses as an array), and finally provide the HTML structured element you’ll use for a wrapper (the default is div, but you can also use a span or any other element).

`$('#container').nwrapper({
	wrapEvery : 2,
	defaultClasses : true,
	extraClasses : ['class1', 'class2'],
	htmlStructure : 'span'
});`

## Demo / Contact ##

Have a look at the [demo page](http://phrappe.com/demos/nwrapper/nwrapper.html "nwrapper jQuery plugin demo page"). For questions or requests don't hesitate to drop me line here (Github) or on [my blog](http://phrappe.com/javascript/nwrapper-jquery-plug-in/ "nwrapper jQuery plug in post").

## MIT License (MIT) ##
Copyright (C) 2011 John Tsevdos
