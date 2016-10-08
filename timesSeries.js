var async = require('async');

var TimesSeries = function() {
};
　
TimesSeries.prototype.test = function(testComplete) {
    console.log("-- TimesSeries test start ----------");
    async.timesSeries(10, function(i, callback){
        setTimeout(function() {
            console.log('timesSeries : ' + i);
            if (i > 5) {
                callback("exit!");
            } else {
                callback(null);
            }
        }, 100);

    }, function(err){
        if (err) {
            console.log("err[" + err + "]");
        }
        console.log("- TimesSeries test done" + " ----------");
        testComplete()
    });
    console.log("TimesSeries test end of line");
};
 
module.exports = TimesSeries;