define([
    "nvd3"
], function () {
    var PieChart = function (data, options) {

        var testData = [
                {
                    key: "One",
                    y: 5
                },
                {
                    key: "Two",
                    y: 2
                },
                {
                    key: "Three",
                    y: 9
                },
                {
                    key: "Four",
                    y: 7
                },
                {
                    key: "Five",
                    y: 4
                },
                {
                    key: "Six",
                    y: 3
                },
                {
                    key: "Seven",
                    y: .5
                }
            ];

        nv.addGraph(function() {
            var width = 350,
                height = 300;

            var chart = nv.models.pieChart()
                .x(function(d) { return d.key; })
                .y(function(d) { return d.y; })
                .color(d3.scale.category10().range())
                .showLegend(true)
                .width(width)
                .height(height);

            d3.select(options.selector)
                .datum(testData)
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