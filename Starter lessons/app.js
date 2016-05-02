var gradeMe = function(x) {
    
    if (x >= 90) {
        console.log("Congrats you got an A!");
    }
    
    else if (x >= 80) {
        console.log("Congrats you got a B!");
    }
    
    else if (x >= 70) {
        console.log("C! Congrats you passed");
    }
    
    else if (x >=60) {
        console.log("D... Better luck next time");
    }
    
    else if (x < 50){
        console.log("F... Better luck next time");
    }
    
    else {
        console.log("Please enter a numeric value between 0-100. Thank you.")
    }
};

var name = "Abel"

var letterCheck = function (name) {
    if (name.length > 10) {
        console.log("More than 10 letters!");
    }
    
    else {
        console.log("Less than 10 letters!");
    }
};


