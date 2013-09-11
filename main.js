requirejs.config({
    baseUrl: "js",
    paths: {
        backbone: "../components/backbone/backbone-min",
        underscore: "../components/lodash/dist/lodash.underscore.min",
        jquery: "../components/jquery/jquery.min",
        d3: "../components/d3/d3.min",
        nvd3: "../components/nvd3/nv.d3.min",
        text: "../components/text/text",
        moment: "../componets/min/moment.min",
        bootstrap: "../components/bootstrap/dist/js/bootstrap.min"
    },
    shim: {
        backbone: { deps: ["underscore", "jquery"] },
        bootstrap: { deps: ["jquery"] },
        nvd3: { deps: ["d3"] }
    }
});

define([
    "backbone",
    "bootstrap",
], function (Backbone, Bootstrap) {
    console.log("Init");
});