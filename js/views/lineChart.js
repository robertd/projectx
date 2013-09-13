define([
	"backbone",
	"text!templates/lineChart.html"
], function (Backbone, LineChartTemplate) {
	"use strict";

	var LineChart = Backbone.View.extend({
		el: "#line-chart",

		template: _.template(LineChartTemplate),

		initialize: function() {
			this.render();
		},

		render: function() {
			this.$el.html(this.template);
		}
	});
	return LineChart;
});