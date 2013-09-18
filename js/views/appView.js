define([
    "backbone",
    "views/accountsLineView",
    "views/accountsStackedBarView",
    "views/investmentsView"
], function (Backbone, AccountsLineView, AccountsStackedBarView, InvestmentsView) {
	"use strict";
	
    var AppView = Backbone.View.extend({
        initialize: function() {
        	this.accountsLineView = new AccountsLineView();
            this.accountsStackedBarView = new AccountsStackedBarView();
            this.investmentsView = new InvestmentsView();
        }
    });
    return AppView;
});