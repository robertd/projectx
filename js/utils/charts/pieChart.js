define([
    "nvd3"
], function () {
    var PieChart = function(data, options) {
        
        nv.addGraph(function() {
            var width = 350,
                height = 300;

            var chart = nv.models.pieChart()
                .x(function(d) { return d.x; })
                .y(function(d) { return d.y; })
                .color(d3.scale.category10().range())
                .showLegend(true)
                .width(width)
                .height(height);

            d3.select(options.selector)
                .datum(data)
                .transition()
                .duration(1200)
                .attr("width", width)
                .attr("height", height)
                .call(chart);
                
            nv.utils.windowResize(chart.update);
            return chart;
        });
    };
    
    return PieChart;
});