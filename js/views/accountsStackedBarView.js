define([
	"backbone",
	"utils/drawChart",
	"text!templates/accountsStackedBarView.html"
], function (Backbone, DrawChart, acountsStackedBarViewTemplate) {
	"use strict";

	var AccountsStackedBarView = Backbone.View.extend({
		el: "#accounts-stacked-bar",

		template: _.template(acountsStackedBarViewTemplate),

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
				chartType: "stacked-bar",
				selector: "#accounts-stacked-bar-chart svg"
			};
			this.chart = new DrawChart(data, options);
		}
	});
	return AccountsStackedBarView;
});