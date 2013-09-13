define([
    "utils/charts/lineChart",
    "utils/charts/pieChart"
], function (LineChart, PieChart) {
    var Chart = function (data, options) {
        if (options.chartType === "line") {
            return new LineChart(data, options);
        } else if (options.chartType === "pie") {
            return new PieChart(data, options);
        }
    };
    return Chart;
});