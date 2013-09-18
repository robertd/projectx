define([
    "backbone",
    "views/accountsLineView",
    "views/accountsStackedBarView",
    "views/investmentsView",
    "views/assetsView"
], function (Backbone, AccountsLineView, AccountsStackedBarView, InvestmentsView, AssetsView) {
	"use strict";
	
    var AppView = Backbone.View.extend({
        initialize: function() {
        	this.accountsLineView = new AccountsLineView();
            this.accountsStackedBarView = new AccountsStackedBarView();
            this.investmentsView = new InvestmentsView();
            this.assetsView = new AssetsView();
        }
    });
    return AppView;
});