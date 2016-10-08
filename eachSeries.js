var async = require('async');

var EachSeries = function() {
};
　
EachSeries.prototype.test = function(testComplete) {
    console.log("-- EachSeries test start ----------");
    var a = [1,2,3,4,5,6,7,8,9,10];
    async.eachSeries(a, function(i, callback){
        setTimeout(function() {
            console.log('eachSeries : ' + i);
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
        console.log("- EachSeries test done" + " ----------");
        testComplete()
    });
    console.log("EachSeries test end of line");
};
 
module.exports = EachSeries;