define([
    "utils/charts/lineChart",
    "utils/charts/pieChart",
    "utils/charts/barChart",
    "utils/charts/stackedBarChart",
    "utils/charts/gaugeChart"
], function (LineChart, PieChart, BarChart, StackedBarChart, GaugeChart) {
    var Chart = function (data, options) {
        if (options.chartType === "line") {
            return new LineChart(data, options);
        } else if (options.chartType === "pie") {
            return new PieChart(data, options);
        } else if (options.chartType === "bar") {
            return new BarChart(data, options);
        } else if (options.chartType === "stacked-bar") {
            return new StackedBarChart(data, options);
        } else if (options.chartType === "gauge") {
            return new GaugeChart(data, options);
        } else {
            console.error("ChartType not specified!");
        }
    };
    return Chart;
});