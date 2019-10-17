function Traveler(name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
}

function Wagon(capacity) {
    this.capacity = 4;
    this.passengers = [];
}

//Increase the traveler's food by 2.
//henrietta.hunt(); // get more food
let hunt = 2;
Traveler.prototype.hunt() = function() {

    }
 

Traveler.prototype.eat()
//Consumes 1 unit of the traveler's food. If the traveler doesn't have any food to eat, the traveler is no longer healthy.

Wagon.prototype.getAvailableSeatCount()
//Return the number of empty seats, determined by the capacity set when the wagon was created, compared to the number of passengers currently on board.

Wagon.prototype.join(traveler)
//Add the traveler to the wagon if there is space. If the wagon is already at maximum capacity, don't add them.

Wagon.prototype.shouldQuarantine()
//Return true if there is at least one unhealthy person in the wagon. Return false if not.

Wagon.prototype.totalFood()
//Return the total amount of food among all occupants of the wagon.