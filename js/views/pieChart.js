define([
	"backbone",
	"utils/drawChart",
	"text!templates/pieChart.html"
], function (Backbone, DrawChart, pieChartTemplate) {
	"use strict";

	var LineChart = Backbone.View.extend({
		el: "#pie-chart",

		template: _.template(pieChartTemplate),

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
				selector: "#pie-chart svg"
			};
			this.chart = new DrawChart(data, options);
		}
	});
	return LineChart;
});