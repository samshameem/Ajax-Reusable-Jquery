# Ajax-Reusable-Jquery
Jquery prototype reusable ajax function, with option for localstorage and alert for unsaved forms.


How to use it.
The function accepts 3 parameters
	1. Trigger element.
	2. Args as defined by Ajax.
	3. Custom options.
	4. Callback function.


ion.App._request(e, params, options, function(){
	alert('Done');
});

This executes a callback function only on success.

Any options you provide to 'params' will override the defaults jquery ajax.

Default options
var defaults = {
	msg: 'Processing...',
	cancelAjax: false,
	type: 'GET',
	url: '',
	target: false,
	cache: false,
	loading: false,
	dataArray: '',
}

Dependencies: Jquery 1.0 +
