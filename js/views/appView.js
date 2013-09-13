define([
    "backbone",
    "views/lineChart"
], function (Backbone, LineChart) {
	"use strict";
	
    var AppView = Backbone.View.extend({
        initialize: function() {
        	this.lineChart = new LineChart();
        }
    });
    return AppView;
});