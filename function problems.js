// Example One.

var values = [2,1,2];

var sumArray = function(arr){
    var arrTwo = 0;     
    if(arr.length === 0){
        
        return "Empty array.";
        }
    
    for(var i = 0; i < arr.length; i++){
        arrTwo += arr[i];
    }
        return arrTwo;
};
  
// Example Two.

