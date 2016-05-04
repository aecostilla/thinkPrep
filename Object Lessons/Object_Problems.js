/* var userInfo = {
    name: "Zob",
    age: 100
}; */

/* var getValues = function(obj){
    var newArr = []
    for(var prop in obj){
      newArr.push(obj[prop])
  } 
    return newArr;
}; */

/* var user = {
    name: "Kallel",
    age: 200,

}

function keysThenVals(obj) {
    var objArr = Object.keys(obj);

    for (value in obj) {
        objArr.push(obj[value]);

    }

    return objArr
}

console.log(keysThenVals(user));

*/


var testArr = ['first','last','age'];
var testObj = {
    first: 'abel',
    last: 'costi',
    age: 24
};

var matchArray = function(arr,obj){
    var check = Object.keys(obj);
    var test = [];
    var count = 0;
    for(var prop in arr){
        test.push(arr[prop])
    if(test[prop] == check[prop]){
        count += 1;
    }
    }
    if(count === 3){
        return true;
    }
    else return false;
};
