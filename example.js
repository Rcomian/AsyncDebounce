var debounce = require('./index');

var dostuff = debounce(function (args, callback) {
    setTimeout(function () {
        console.log('Called with: ', args[0]);
        callback();
    }, 1000);
});

var i = 0;
var interval = setInterval(function () {
    dostuff(i);
    i+=1;
}, 100);

setTimeout(function () {
    clearInterval(interval);
}, 10000)