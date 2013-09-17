define([
    "backbone",
    "views/accountsLineView",
    "views/accountsStackedBarView",
    "views/pieChart"
], function (Backbone, AccountsLineView, AccountsStackedBarView, PieChart) {
	"use strict";
	
    var AppView = Backbone.View.extend({
        initialize: function() {
        	this.accountsLineView = new AccountsLineView();
            this.accountsStackedBarView = new AccountsStackedBarView();
            this.pieChart = new PieChart();
        }
    });
    return AppView;
});