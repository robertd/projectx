requirejs.config({
    baseUrl: "js",
    paths: {
        backbone: "../lib/backbone/backbone-min",
        underscore: "../lib/lodash/dist/lodash.underscore.min",
        jquery: "../lib/jquery/jquery.min",
        d3: "../lib/d3/d3.min",
        nvd3: "../lib/nvd3/nv.d3.min",
        text: "../lib/text/text",
        moment: "../componets/min/moment.min",
        bootstrap: "../lib/bootstrap/dist/js/bootstrap.min"
    },
    shim: {
        backbone: { deps: ["underscore", "jquery"] },
        bootstrap: { deps: ["jquery"] },
        nvd3: { deps: ["d3"] }
    }
});

require([
    "backbone",
    "appView",
    "bootstrap"
], function (Backbone, AppView) {
    var appView = new AppView();
});