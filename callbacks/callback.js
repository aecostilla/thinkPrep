// Example one

var add = function(a,b){
    return a + b
};

var mutiply = function(a,b){
    return a * b
};

var doMath = function(a,b,callback){ // callback parameter is more readable at the end.
    return callback(a,b);
};

/* doMath(2,3,mutiply);
   doMath(2,3,add);  */

// Exercise One
var firstArr = [1,2,3,4];
var modifyArray = function(arr){
    var newArr = "";
    for(var i = 0; i < arr.length; i ++){

    }
        return newArr[i];
    };