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

var output = "";
for(var b = 0; b <=10; b++){
        output += "\n";
    for(var a = 1; a <=10; a++){
        output += a*b;
    };
}

console.log(output);

