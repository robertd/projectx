define([
	"backbone"
], function (Backbone) { 
	var AppView = Backbone.View.extend({
		initialize: function () {
			console.log("Initialized");
		}
	});
	return AppView;
});