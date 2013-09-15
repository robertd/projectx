define([
	"backbone",
	"utils/drawChart",
	"text!templates/lineChart.html"
], function (Backbone, DrawChart, lineChartTemplate) {
	"use strict";

	var LineChart = Backbone.View.extend({
		el: "#line-chart",

		template: _.template(lineChartTemplate),

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
				selector: "#line-chart svg"
			};
			this.chart = new DrawChart(data, options);
		}
	});
	return LineChart;
});