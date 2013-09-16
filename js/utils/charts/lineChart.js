define([
    "nvd3",
    "moment"
], function () {
    var LineChart = function (data, options) {
        var values1 = [];
        var values2 = [];

        for (var i = 1; i <= 100; i++) {
            values1.push({
                x: i,
                value: Math.floor((Math.random()*100000)+1)
            });

            values2.push({
                x: i,
                value: Math.floor((Math.random()*100000)+1)
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
            var chart = nv.models.lineChart()
                .x(function (d) { return d.x; })
                .y(function (d) { return d.value; })
                .showLegend(true)
                .useInteractiveGuideline(true)
                .margin({right: 40});
            
            chart.xAxis.tickFormat(function (d) {
                /*
                    This is a workaround to have nice time label 
                */
                if (d % 1 === 0) {
                    var now = (new Date()).getTime() - 86400 * 1000 * 365;
                    now = new Date(now + (d*30) * 86400 * 1000);
                    return d3.time.format('%b %d %Y')(now);
                }
            });
            var numberFormater = d3.format(",.");
            chart.yAxis.tickFormat(function (d) { return numberFormater(d); });
            
            d3.select(options.selector)
                .datum(testData)
                .transition().duration(500)
                .call(chart);

            nv.utils.windowResize(chart.update);
            return chart;
        });
    };
    return LineChart;
});