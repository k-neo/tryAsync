var async = require('async');

var Each = function() {
};
　
Each.prototype.test = function(testComplete) {
    console.log("-- Each test start ----------");
    var a = [1,2,3,4,5,6,7,8,9,10];
    async.each(a, function(i, callback){
        setTimeout(function() {
            console.log('each : ' + i);
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
        console.log("- Each test done" + " ----------");
        testComplete()
    });
    console.log("Each test end of line");
};
 
module.exports = Each;