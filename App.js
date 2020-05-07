(function ($) {
	"use strict";

	var App = function () {
		// Create reference to this instance
		var o = this;
		// Initialize app when document is ready
		$(document).ready(function () {
			o.initialize();
		});

	};
	var p = App.prototype;

	// Private
	p._modified = false;
	// =========================================================================
	// INIT
	// =========================================================================

	p.initialize = function () {
		this._initEvents();
	};

	// =========================================================================
	// Initialize Events
	// =========================================================================

	p._initEvents = function () {
		var o = this;

	};

	p._alertModified = function(){
		var o = this;

		o._modified = false;
		window.onbeforeunload = s => o._modified ? "" : null;
		$('input').on('change', function(){
			o._modified = true;
		});
	}

	// =========================================================================
	// REQUEST
	// =========================================================================
	p._request = function (e, param, options, callback) {
		// var btn = $(e.currentTarget), o = this;
		var o = this;
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

		options.url = base_url+options.url;

		options = $.extend({}, defaults, options);

		o._ajaxRequest = $.ajax( $.extend( true, {
			type: options.type,
			url: options.url,
			dataType: 'json',
			data: options.dataArray,
			success : function(data,status,jqXHR){
				if (options.loading) $('#loading').hide();
				if(data && data.response === true){
					if (options.cache) {
						o.localCache.set(JSON.stringify(options.dataArray), data);
					};
					callback(data);
				}else if(data && data.response === false){
					alert(data.message);
				}else{
					alert('Error: There was an error, Please try again.');
				}
			},
			error : function (jqXHR,status,data){
				if (options.loading) $('#loading').hide();;
				alert('Error: There was an error, Please try again.');
			},
			beforeSend : function () {
				if (options.loading) $('#loading').show();
				if(o._ajaxRequest != null && options.cancelAjax) {
					o._ajaxRequest.abort();
				}
				if (options.cache) {
					if (o.localCache.exist(JSON.stringify(options.dataArray))) {
						callback(o.localCache.get(JSON.stringify(options.dataArray)));
						if (options.loading) $('#loading').hide();
						return false;
					}
					return true;
				};
			},
			complete : function () {
				if (options.loading) $('#loading').hide();
				o._modified = false;
			}
		}, param ));
	};

	// =========================================================================
	// CACHE
	// =========================================================================

	p.localCache = {
		data: {},
		remove: function (url) {
			delete p.localCache.data[url];
		},
		exist: function (url) {
			return p.localCache.data.hasOwnProperty(url) && p.localCache.data[url] !== null;
		},
		get: function (url) {
			return p.localCache.data[url];
		},
		set: function (url, cachedData, callback) {
			p.localCache.remove(url);
			p.localCache.data[url] = cachedData;
			if ($.isFunction(callback)) callback(cachedData);
		}
	};

	Object.defineProperty(p.localCache, "data", {
		writable: false
	});

	// =========================================================================
	// DEFINE NAMESPACE
	// =========================================================================

	window.ion = window.ion || {};
	window.ion.App = new App;
}(jQuery)); // pass in (jQuery):
//List User Script Ends Here