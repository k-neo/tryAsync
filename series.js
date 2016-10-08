var async = require('async');

var Series = function() {
};
　
Series.prototype.test = function(testComplete) {
    console.log("-- Series test start ----------");
    async.series([
        function (callback) {
            console.log("1");
            setTimeout(function() {
                console.log("1 done");
                callback(null, 1);
            }, 100);
        },
        function (callback) {
            console.log("2");
            setTimeout(function() {
                console.log("2 done");
                callback("exit!", 1);
            }, 100);
        },
        function (callback) {
            console.log("3");
            setTimeout(function() {
                console.log("3 done");
                callback(null, 1);
            }, 100);
        },
    ], function (err, results) {
        if (err) {
            console.log("err[" + err + "]");
        }
        console.log("- Series test done [" + results + "] ----------");
        testComplete()
    });
    console.log("Series test end of line");
};
 
module.exports = Series;