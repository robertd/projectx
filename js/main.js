requirejs.config({
    baseUrl: "js",
    urlArgs: "timestamp=" + (new Date()).getTime(),
    paths: {
        "backbone": "../lib/backbone/backbone-min",
        "underscore": "../lib/lodash/dist/lodash.underscore.min",
        "bootstrap": "../lib/bootstrap/dist/js/bootstrap.min",
        "jquery": "../lib/jquery/jquery.min",
        "d3": "../lib/d3/d3.min",
        "nvd3": "../lib/nvd3/nv.d3.min",
        "text": "../lib/text/text",
        "moment": "../componets/min/moment.min"
    },
    shim: {
        "backbone": { deps: ["jquery", "underscore"], exports: "Backbone" },
        "bootstrap": { deps: ["jquery"] },
        "nvd3": { deps: ["d3"], exports: "nv" }
    }
});

require([
    "backbone",
    "app",
    "bootstrap"
], function (Backbone, App) {
    console.log("Initialized");
    App.initialize();
});