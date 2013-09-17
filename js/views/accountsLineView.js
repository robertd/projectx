define([
	"backbone",
	"utils/drawChart",
	"text!templates/accountsLineView.html"
], function (Backbone, DrawChart, acountsLineViewTemplate) {
	"use strict";

	var AccountsLineView = Backbone.View.extend({
		el: "#accounts-line",

		template: _.template(acountsLineViewTemplate),

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
				selector: "#accounts-line-chart svg"
			};
			this.chart = new DrawChart(data, options);
		}
	});
	return AccountsLineView;
});