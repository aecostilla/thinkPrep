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

/* sumArray(values); */
  
// Example Two.

var checkPalindrome = function(String){
    var check = String.split("").reverse().join("");
    
    if(check === String){
        return true;
    }
    
    else {
        return false;
    }
};

/* checkPalindrome("racecar"); */

// Example Three.

var sentence = "I am happy you are reading this sentence";
var stringTool = function(words){
    
    var count = words.split(' ').length;
    var newArr = words.split(' ').join('').length;
    var average = newArr/count;
    
    return "This string has " + count + " words. The average length of each word is " + average + " characters.";
}

/* stringTool(sentence); */