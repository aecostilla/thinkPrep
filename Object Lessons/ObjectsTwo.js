// Exercise 

/*var home = {
    rooms: 3,
    color: "White",
    build: function(){
        return "Your home will have " + this.rooms + " and be painted " + this.color;
    }
};*/

function homeBuilder(rooms,color){
    var house = {};
    house.rooms = rooms;
    house.color = color;
    house.make = function(){
        return "Your home will have " + this.rooms + " rooms and be painted " + this.color;
    }
    return house;
};

