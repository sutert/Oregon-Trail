function Traveler(name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
}

let TravelerAna = new Traveler("Ana")

console.log(TravelerAna)

function Wagon(capacity) {
    this.capacity = 4;
    this.passengers = [];
}



//Increase the traveler's food by 2.
//henrietta.hunt(); // get more food

//Traveler.prototype.hunt() = function () {
//let newFood = this.food++

///}

//console.log(newFood)