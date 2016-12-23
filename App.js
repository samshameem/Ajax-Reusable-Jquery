(function ($) {
	"use strict";

	var App = function () {
		var o = this; // Create reference to this instance
		$(document).ready(function () {
			o.initialize();
		}); // Initialize app when document is ready

	};
	var p = App.prototype;

	// =========================================================================
	// INIT
	// =========================================================================

	p.initialize = function () {
		// Init events
		this._enableEvents();
	};

	// =========================================================================
	// EVENTS
	// =========================================================================

	// events
	p._enableEvents = function () {
		var o = this;
		var formData = {};

		o._request({
			ajax:{
				url: 'php/initiate/check',
				data: formData
			},
			function(data) {
				console.log(data);
			}
		});
	};

	// =========================================================================
	// AJAX REQUEST
	// =========================================================================

	p._request = function (source) {
		var o = this;
		var ajax = {
			type: 'POST',
			url: '',
			dataType: 'json',
			data: {}
		}

		ajax = $.extend( true,  ajax, source.ajax );

		$.ajax( $.extend( true, {
			success : function(data,status,jqXHR){
				source.function success(data);
			}
		}, ajax ));
	};

	// =========================================================================
	// DEFINE NAMESPACE
	// =========================================================================

	window.samshameem = window.samshameem || {};
	window.samshameem.App = new App;
}(jQuery)); // pass in (jQuery):
