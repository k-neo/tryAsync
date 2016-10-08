var async = require('async');

var Waterfall = function() {
};
　
Waterfall.prototype.test = function(testComplete) {
    console.log("-- Waterfall test start ----------");
    async.waterfall([
        function (callback) {
            console.log("1");
            setTimeout(function() {
                console.log("1 done");
                callback(null, 1);
            }, 100);
        },
        function (arg, callback) {
            console.log("from:" + arg);
            console.log("2");
            setTimeout(function() {
                console.log("2 done");
                callback("exit!", 2);
            }, 100);
        },
        function (arg, callback) {
            console.log("3");
            setTimeout(function() {
                console.log("3 done");
                callback(null, 1);
            }, 100);
        }
    ], function (err, results) {
        if (err) {
            console.log("err[" + err + "]");
        }
        console.log("- Waterfall test done [" + results + "] ----------");
        testComplete()
    });
    console.log("Waterfall test end of line");
};
 
module.exports = Waterfall;