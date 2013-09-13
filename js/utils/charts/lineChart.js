define([
    "nvd3",
    "moment"
], function () {
    var LineChart = function (data, options) {
        nv.addGraph(function() {
            var chart = nv.models.lineChart()
                .x(function (d) { return d.x; })
                .y(function (d) { return d.y; })
                .showLegend(true);
            
            chart.xAxis.tickFormat(function (d) { return d; });
            var numberFormater = d3.format(",.");
            chart.yAxis.tickFormat(function (value) { return numberFormater(value); });
            
            d3.select(options.selector)
                .datum(data)
                .transition().duration(500)
                .call(chart);

            nv.utils.windowResize(chart.update);

            return chart;
        });
    };
    
    return LineChart;
});