define([
    "backbone",
    "views/accountsLineView",
    "views/accountsStackedBarView",
    "views/investmentsView",
    "views/assetsView",
    "views/accountsStatusView"
], function (Backbone, AccountsLineView, AccountsStackedBarView, InvestmentsView, AssetsView, AccountsStatusView) {
	"use strict";
	
    var AppView = Backbone.View.extend({
        initialize: function() {
        	this.accountsLineView = new AccountsLineView();
            this.accountsStackedBarView = new AccountsStackedBarView();
            this.investmentsView = new InvestmentsView();
            this.assetsView = new AssetsView();
            this.accountsStatusView = new AccountsStatusView();
        }
    });
    return AppView;
});