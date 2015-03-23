#Async Debounce

Guard against calling an asynchronous function multiple times whilst the asynchronous operation is in progress. Once the operation is complete, the last call made to the function whilst the operation was in progress is made.

Intermediate calls are lost, if no calls are made whilst the asynchronous operation is in progress the function is not called again.

This debounce is _not_ based on time, it's based on a callback which is made once the operation is completed.

##Usage
###Installation

````
    npm install async-debounce-jt
````

###Invocation
````
    var debounce = require('async-debounce-jt');
    
    var guarded = debounce(function (args, callback) {
        // do something with the arguments, then call the callback
    });
    
    guarded('hello', 'world'); // Parameters are combined in args parameter in the function
    
````

##Example

This example calls our method every 10th of a second, but it takes 1 second to complete.
The result is the guarded method is only called 10 times.

###Code

````
    var debounce = require('async-debounce-jt');
    
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
        
````

###Result
````
Called with:  0
Called with:  9
Called with:  20
Called with:  30
Called with:  40
Called with:  50
Called with:  60
Called with:  70
Called with:  80
Called with:  90
Called with:  98
````
