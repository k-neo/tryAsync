var async = require('async');

var MapSeries = function() {
};
　
MapSeries.prototype.test = function(testComplete) {
    console.log("-- MapSeries test start ----------");
    var m = [
        { id: 1, value:'first' },
        { id: 2, value:'second' },
        { id: 3, value:'third' },
    ];
    async.eachSeries(m, function(item, callback){
        setTimeout(function() {
            console.log('mapSeries : id[' + item.id + '] value[' + item.value + ']');
            if (item.value == 'second') {
                callback("exit!");
            } else {
                callback(null);
            }
        }, 100);

    }, function(err){
        if (err) {
            console.log("err[" + err + "]");
        }
        console.log("- MapSeries test done" + " ----------");
        testComplete()
    });
    console.log("MapSeries test end of line");
};
 
module.exports = MapSeries;