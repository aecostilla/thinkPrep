var item = [1,2,3,4,5];

var add2 = function(arr, increment){
    return arr[increment] + 1 + "|";
}

var outputName = function(arr,increment){
    return "hello" + arr[increment] + "|";
}

var modAddray = function(arr, callback){
    var result = "";
    for(var i = 0; i < arr.length; i ++){
        result += callback(arr, i) + " ";
    }
        return result;
}

map = function(arr,callback){
    if(callback){
    var total = "";
    for(var i = 0; i < arr.length; i++){
        total += callback(arr,i) + ",";
    }
    return total;
    }
    
    else return arr;
        
};

map([1,2,3], function(value){
    return value[0] +=1;
});

map([1,2,3], function(value){
    return value[0] *=2;
});