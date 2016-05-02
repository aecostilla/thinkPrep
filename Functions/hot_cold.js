

var newGame = function(){
   var num;
   var count =0;
        num = Math.floor((Math.random() *100) + 1);
    
     console.log("New Number Created");

playerOne = function(guess) {
        count += 1;
    if(guess === num){
        console.log("Great job, you got it!");
    }
    
    else if(guess + 10 === num || guess - 10 === num){
        console.log("Hot");
    }
    
    else if(guess + 10 !== num || guess - 10 !== num){
         console.log("Cold");
        }
    return;
    };
    
 counter = function(){
        return count;
 };
        return;
};