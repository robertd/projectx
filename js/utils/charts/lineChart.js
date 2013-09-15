define([
    "nvd3",
    "moment"
], function () {
    var LineChart = function (data, options) {
        
        var testData = [{
            key: "A",
            values: [
                {x: 1, y: 1},
                {x: 2, y: 2},
                {x: 3, y: 3},
                {x: 4, y: 4},
                {x: 5, y: 4},
                {x: 6, y: 7},
                {x: 7, y: 9}
            ]
        },{
            key: "B",
            values: [
                {x: 1, y: 3},
                {x: 2, y: 3},
                {x: 3, y: 7},
                {x: 4, y: 6},
                {x: 5, y: 5},
                {x: 6, y: 4},
                {x: 7, y: 1}
            ]
        }];

        console.log(testData);

        nv.addGraph(function() {
            var chart = nv.models.lineChart()
                .x(function (d) { return d.x; })
                .y(function (d) { return d.y; })
                .showLegend(true);
            
            chart.xAxis.tickFormat(function (d) { return d; });
            var numberFormater = d3.format(",.");
            chart.yAxis.tickFormat(function (d) { return d; });
            
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