define([
    "nvd3"
], function () {
    var StackedBarChart = function (data, options) {
        //TODO: add real data at some point
        var values1 = [];
        var values2 = [];

        for (var i = 1; i <= 100; i++) {
            if (i>50 && i<60) {
                values1.push({
                    x: i,
                    value: null
                });

                values2.push({
                    x: i,
                    value: null
                });
            } else {
                values1.push({
                    x: i,
                    value: Math.floor((Math.random()*100000)+1)
                });

                values2.push({
                    x: i,
                    value: Math.floor((Math.random()*100000)+1)
                });
            }   
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
                .x(function (d) { return d[0]; })
                .y(function (d) { return d[1]; })
                .stacked(true)
                .showLegend(options.legend);
            var numberFormater = d3.format(",.");
            
            chart.xAxis
                .tickFormat(function (d) { return d3.time.format("%b %d %Y")(new Date(d)); });
            chart.yAxis.tickFormat(function (value) { return numberFormater(value); });
            
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