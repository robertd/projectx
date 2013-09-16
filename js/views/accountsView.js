define([
	"backbone",
	"utils/drawChart",
	"text!templates/accountsView.html"
], function (Backbone, DrawChart, acountsViewTemplate) {
	"use strict";

	var AccountsView = Backbone.View.extend({
		el: "#accounts",

		template: _.template(acountsViewTemplate),

		initialize: function() {
			this.render();
			this.drawChart();
		},

		render: function() {
			this.$el.html(this.template);
		},

		drawChart: function() {
			//TODO: fix dummy data
			var data = {};

			var options = {
				chartType: "line",
				selector: "#accounts-chart svg"
			};
			this.chart = new DrawChart(data, options);
		}
	});
	return AccountsView;
});