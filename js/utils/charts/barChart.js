define([
    "nvd3"
], function () {
    var BarChart = function (data, options) {
        nv.addGraph(function() {  
            chart = nv.models.discreteBarChart()
                .x(function(d) { return d.x; })
                .y(function(d) { return d.y; })
                .tooltips(true)
                .showValues(true);
            
            var numberFormater = d3.format(",.");
            
            chart.staggerLabels(true);
            chart.yAxis.tickFormat( function (d) { return numberFormater(d); });
            
            d3.select(options.selector)
                .datum(data)
                .transition().duration(500)
                .call(chart);

            nv.utils.windowResize(chart.update);
            return chart;
        });
    };
    return BarChart;
});