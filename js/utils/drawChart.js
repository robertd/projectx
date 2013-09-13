define([
    "utils/charts/lineChart"
], function (LineChart) {
    var Chart = function (data, options) {
        if (options.chartType === "line") {
            return new LineChart(data, options);
        }
    };
    return Chart;
});