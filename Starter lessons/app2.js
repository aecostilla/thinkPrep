        // Fizz Buzz Challenge

/* var fizzBuzz = function(start,stop) {
for(var i = start; i <= stop; i++) {
   
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")    
    }
    else if (i % 3 == 0) {
       console.log("Fizz") 
    } 
    else if (i % 5 == 0) {
       console.log("Buzz")
    }  
    else {
        console.log(i);
        };
    };
}; */

    // The Grade Assigner 

/* var myGrade = function(i) {
    
    if (i >= 90) {
        console.log("A");
    }
    
    else if (i >= 80) {
        console.log("B");
    }
    
    else if (i >= 70) {
        console.log("C");
    }
    
    else if (i >= 60) {
        console.log("D");
    }
    
    else {
        console.log("F");
    }
};

*/

        // The World Translator

/* var es = "spanish";
var de = "german";
var fr = "french";

var wTranslate = function(lan){
    
    if (lan === "spanish"){
        console.log("Hola Mundo");
    }
    else if (lan === "german"){
        console.log("Hallo Welt");
    }
    else if (lan === "french"){
        console.log("Bonjour le Monde");
    }
    else {
        console.log("Hello World")
    };
}; */

        // The Pluralizer

var pluralizer = function(number,animal){
    if (number > 1 && animal !== "goose") {
        console.log(number + " " + animal + "s");
    }
    else if (animal === "goose" && number > 1) {
        console.log(number + " geese");
    }
    else if (number >= 0){
        console.log(animal);
    }
};

            // While loop to print even numbers.
var whileLoop = function(start,stop){

    while(start < stop) {
        if(start % 2 === 0){
            console.log(start);
        }
    
        start++;
    };
};
        // Use whileLoop(0,21); to complete challenge.
