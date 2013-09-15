define([
    "backbone",
    "views/lineChart",
    "views/pieChart"
], function (Backbone, LineChart, PieChart) {
	"use strict";
	
    var AppView = Backbone.View.extend({
        initialize: function() {
        	this.lineChart = new LineChart();
            this.pieChart = new PieChart();
        }
    });
    return AppView;
});