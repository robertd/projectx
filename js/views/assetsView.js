define([
	"backbone",
	"utils/drawChart",
	"text!templates/assetsView.html"
], function (Backbone, DrawChart, investmentsViewTemplate) {
	"use strict";

	var AssetsView = Backbone.View.extend({
		el: "#assets",

		template: _.template(investmentsViewTemplate),

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
				chartType: "pie",
				selector: "#assets-chart svg"
			};
			this.chart = new DrawChart(data, options);
		}
	});
	return AssetsView;
});