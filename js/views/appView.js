define([
    "backbone",
    "views/accountsView",
    "views/pieChart"
], function (Backbone, AccountsView, PieChart) {
	"use strict";
	
    var AppView = Backbone.View.extend({
        initialize: function() {
        	this.lineChart = new AccountsView();
            this.pieChart = new PieChart();
        }
    });
    return AppView;
});