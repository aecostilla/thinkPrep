var arrOne = [1,2,3,4];
var arrTwo = [];
function arrModHalf(number){
    return number/2;
};

var arrModSquare = function(number){
    return number*number;
};

function arrModCubic(number){
    return (number * number * number * number);
};

var resultOne = arrOne.map(arrModSquare);

// map(); does not work ask mentor...

var showEven = function(number){
    if(number % 2 === 0){
        return number;
    }
};

var resultTwo = arrOne.filter(showEven);

var arrAverage = function(sum, numbers){
    return (numbers/sum);
};

var resultThree = arrOne.reduce(arrAverage);