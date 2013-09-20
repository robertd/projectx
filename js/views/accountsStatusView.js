define([
    "backbone",
    "utils/drawChart",
    "text!templates/accountsStatusView.html"
], function (Backbone, DrawChart, accountsStatusViewTemplate) {
    "use strict";

    var AccountsStatusView = Backbone.View.extend({
        el: "#accounts-status",

        template: _.template(accountsStatusViewTemplate),

        initialize: function() {
            this.render();
            this.drawChart();
        },

        render: function() {
            this.$el.html(this.template);
        },

        drawChart: function() {
            var self = this;
            _.each([1,2,3,4], function (i) {
                var data = {
                    min: 0,
                    max: 100,
                    value: Math.floor((Math.random()*100)+1)
                };

                var options = {
                    chartType: "gauge",
                    selector: "#accounts-status-chart-"+ i +" svg"
                };
                self.chart = new DrawChart(data, options);
            });
        }
    });
    return AccountsStatusView;
});