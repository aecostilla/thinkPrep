 // Top Ten Countdown 
/*
var whileTest = function(i){
    while(i > 0) {
        i--;
        console.log(i);
    }
};
*/

        // While loop (did not get...)

/*

var cars = ["BMW","Volvo","Saab","Ford"];
var i = 0;
var text ="";

while(cars[i]){
    text += cars[i] + " ";
    i++;
}

console.log(text);

*/

        // The even/odd Reporter

/*

var reporter = function(start,stop,phrase){
    for (var i = start; i <= stop; i++) {
        if(i % 2 === 0) {
            console.log(i + " " + phrase);
        }
        
        else {
            console.log(i + " is odd");
        }
    };
};

reporter(0,20,"is Even");

*/


/*
        // Console log the Bigger number

var bigger = function(x,y) {
    if (x > y){
        console.log(x + " is greater");
    }
    
    else if (y > x) {
        console.log(y + " is greater");
    }
    
    else if (x === y){
        console.log("non is greater");
    }
};

*/


/*
for(var n = 0; n <= 10; n++){
    console.log(n *9);
};
*/

var output = "";
for(var b = 0; b <=10; b++){
        output += "\n";
    for(var a = 1; a <=10; a++){
        output += a*b;
    };
}

console.log(output);




*/

var output = "";
for(var b = 0; b <=10; b++){
        output += "\n";
    for(var a = 1; a <=10; a++){
        output += a*b;
    };
}

console.log(output);

