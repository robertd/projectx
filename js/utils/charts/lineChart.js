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

        function sinAndCos() {
  var sin = [],
    cos = [],
    rand = [],
    rand2 = []
    ;

  for (var i = 0; i < 100; i++) {
    sin.push({x: i, y: i % 10 == 5 ? null : Math.sin(i/10) }); //the nulls are to show how defined works
    cos.push({x: i, y: .5 * Math.cos(i/10)});
    rand.push({x:i, y: Math.random() / 10});
    rand2.push({x: i, y: Math.cos(i/10) + Math.random() / 10 })
  }

  return [
    {
      area: true,
      values: sin,
      key: "Sine Wave",
      color: "#ff7f0e"
    },
    {
      values: cos,
      key: "Cosine Wave",
      color: "#2ca02c"
    },
    {
      values: rand,
      key: "Random Points",
      color: "#2222ff"
    }
    ,
    {
      values: rand2,
      key: "Random Cosine",
      color: "#667711"
    }
  ];
}
    };
    return LineChart;
});