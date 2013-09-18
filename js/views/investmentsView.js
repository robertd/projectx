define([
	"backbone",
	"utils/drawChart",
	"text!templates/investmentsView.html"
], function (Backbone, DrawChart, investmentsViewTemplate) {
	"use strict";

	var LineChart = Backbone.View.extend({
		el: "#investments",

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
				selector: "#investments-chart svg"
			};
			this.chart = new DrawChart(data, options);
		}
	});
	return LineChart;
});