var fs = require('fs');
var async = require('async');

console.log("async module test");

var Series = require('./series');
var Waterfall = require('./waterfall');
var EachSeries = require('./eachSeries');
var MapSeries = require('./mapSeries');
var TimesSeries = require('./timesSeries');

var Each = require('./each');

var series = new Series();
var waterfall = new Waterfall();
var eachSeries = new EachSeries();
var mapSeries = new MapSeries();
var timesSeries = new TimesSeries();

var each = new Each();

async.series([
    function (callback) {
        series.test(function() {
            callback(null, "series");
        });
    },
    function (callback) {
        waterfall.test(function() {
            callback(null, "waterfall");
        });
    },
    function (callback) {
        eachSeries.test(function() {
            callback(null, "eachSeries");
        });
    },
    function (callback) {
        mapSeries.test(function() {
            callback(null, "mapSeries");
        });
    },
    function (callback) {
        timesSeries.test(function() {
            callback(null, "timesSeries");
        });
    },
    function (callback) {
        each.test(function() {
            callback(null, "each");
        });
    },
], function (err, results) {
    if (err) {
        console.log("err[" + err + "]");
    }
    console.log('async test all done. ' + results);
});
