var start = prompt("Enter a start value");
var stop = prompt("Okay great, now enter a stopping value");
var wordOne = prompt("Now enter your first word ex. Fizz");
var wordTwo = prompt("Finally enter your second word ex. Buzz");

var fizzBuzzer = function(){
    if (typeof start === String){
        Number(start);
    }

    if (typeof stop === String){
        Number(stop);
    }
    
    if(isNaN(start)){
        alert("Please refresh the page && enter a number.");
    }

    if(isNaN(stop)){
        alert("Please refresh the page && enter a number.")
    }
        for(var i = start; i <= stop; i++) {
   
            if (i % 3 === 0 && i % 5 === 0) {
        console.log(wordOne + wordTwo);    
    }
            else if (i % 3 == 0) {
       console.log(wordOne); 
    } 
            else if (i % 5 == 0) {
       console.log(wordTwo);
    }  
            else {
        console.log(i);
        };
    };
        
};

fizzBuzzer();