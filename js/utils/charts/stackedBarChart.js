define([
    "nvd3"
], function () {
    var StackedBarChart = function (data, options) {
        //TODO: add real data at some point
        var values1 = [];
        var values2 = [];

        for (var i = 1; i <= 100; i++) {
            values1.push({
                x: i,
                y: Math.floor((Math.random()*100000)+1)
            });

            values2.push({
                x: i,
                y: Math.floor((Math.random()*100000)+1)
            });
        };

        var testData = [{
            key: "401k",
            values: values1
        },{
            key: "Fidelity",
            values: values2
        }];

        nv.addGraph(function() {
            var chart = nv.models.multiBarChart()
                .x(function (d) { return d.x; })
                .y(function (d) { return d.y; })
                .stacked(true)
                .showLegend(true);
            var numberFormatter = d3.format(",.");
            
            chart.xAxis
                .tickFormat(function (d) { return d; });
            chart.yAxis.tickFormat(function (d) { return numberFormatter(d); });
            
            d3.select(options.selector)
                .datum(testData)
                .transition()
                .duration(500)
                .call(chart);

            nv.utils.windowResize(chart.update);

            return chart;
        });
    };
    return StackedBarChart;
});