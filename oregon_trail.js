function Traveler(name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
}

function Wagon(capacity) {
    this.capacity = capacity;
    this.passengers = [];
}

//hunt: Increase the traveler's food by 2.

Traveler.prototype.hunt() = function () {
    this.food = this.food + 2;
    console.log(Traveler + " get more food");
}

//eat: Consumes 1 unit of the traveler's food. 
//If the traveler doesn't have any food to eat, the traveler is no longer healthy.

Traveler.prototype.eat() = function () {
    if (this.food >= 1) {
        this.food = this.food - 1;

    } else {
        console.log(Traveler + " is now hungry (sick)");
    }
};
//available seat: Return the number of empty seats, determined by the 
//capacity set when the wagon was created, compared to the number of 
//passengers currently on board.

Wagon.prototype.getAvailableSeatCount() = function () {
    for (let i = 0; index < array.length; index++) {
        const element = array[index];
        
    }
};