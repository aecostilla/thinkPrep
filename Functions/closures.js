// Exercise 1 
/*
var globalVar = function(){
    var answers = {
  		answer1:"blue",
    	answer2: "no",
    	answer3: "yes",
			}
    var userAnswers = {
        userAnswer1: function(){
        var a = prompt("what color is the sky?").toLowerCase();
            if (a === answers.answer1) {
                alert("Correct")
                } 
				else {
                    alert("Sorry, that was wrong")
                    }
				},

        userAnswer2: function(){
        var a = prompt("Do cows fly?").toLowerCase();
            if (a === answers.answer2) {
                alert("Correct")
                } 
                else {
                    alert("Sorry, that was wrong")
                    }
				},
        
        userAnswer3: function(){
        var a = prompt("Do birds fly?").toLowerCase();
            if (a === answers.answer3) {
                alert("Correct")
				} 
                else {
                    alert("Sorry, that was wrong")
					}
                },
        }
    
    userAnswers.userAnswer1();
    userAnswers.userAnswer2();
    userAnswers.userAnswer3();
    
};
*/
// Exercise 2
/*
function getNames() {
    var names = ["William","Cindy","Maureen","Brenden"];
    var counter = -1;
    
    return function() {
        if(counter > (names.length-2)){
        counter = -1;
            }
        return names[counter += 1]
    };
};

var nextName = getNames();

nextName(); // Cycles through the array printing each index with every invokaction..
*/
// Exercise 3

function holdData(){
    var data = "you got the data";
    return function showData(){
        return data;
    }
};

getData = holdData;
