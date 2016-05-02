/*var human = {
    planet: "earth",
    living: "yes"
};

var alien = Object.create(human);

alien.power = "flying";
alien.planet = "mars";

//alien.living (inherited from human object)

var superAlien = Object.create(alien);

superAlien = ['zapper','lazer','force shield'];

// superAlien.planet (mars inherited from alien and .living inherited from human)

alien.name = "Marty";
alien.fly = function(){
    return this.name + " is now " + this.power
}

var superHero = Object.create(alien);

superHero.name = "Superman";

// console.log(superHero.fly());

var proto = {
    submitNumber: function(yourNumber){
        var hiddenNumber = yourNumber || 123;
        proto.getHiddenNumber = function(){
            return "The number is " + hiddenNumber;
        };
    },
    prop: "defaultValue",
} */
 /* var emptyObject = Object.create(proto);
    emptyObject.submitNumber();
    emptyObject.getHiddenNumber(); //The number is 123 */
/*  var fullObject = Object.create(proto);
    fullObject.submitNumber(100);
    fullObject.getHiddenNumber(); //The number is 100 */

/* function makeUser(name,skills) {
    var privateData = "Single"
    var user = {};
        user.name = name;
        user.skills = skills;
        user.getSkills = function(){
            return this.name + " has the follwing skills " + this.skills
            } 
        
    return user;
};

var brendan = makeUser("Brendan Eich", ['programmer',' public speaker',' author']);
*/
/* console.log(brendan.getSkills()); // Brendan Eich has the following skills programmer,public speaker,author */

/* var micky = makeUser("micky")
   console.log(micky.privateData); // undefined */
// To access or change private data add a method (function) to the object 

 /* function makeUser(name){
    var somePrivateData = "QWERTY";
    var user = {};
    user.name = name;
    user.changePrivateData = function(newData){
        somePrivateData = newData || somePrivateData;
        return "somePrivateData is " + somePrivateData
    }
    
    return user;
}; */

/*function Person(name,profession){
    this.name = name;
    this.profession = profession;
}
var brendan = new Person('Brendan Eich','Programmer');

// brendan.name ('Brendan Eich')

Person.prototype.sayNameAndProfession = function(){
    return this.name + " is a " + this.profession;
}

// brendan.sayNameAndProfession(); 
*/


