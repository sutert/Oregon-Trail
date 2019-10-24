function Traveler(name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
}
let TavelerAna = new Traveler("Ana")
//console.log(TavelerAna)

function Wagon(capacity) {
    this.capacity = capacity;
    this.passengers = [];
}

   //Increase the traveler's food by 2.

Traveler.prototype.hunt() = function() {
        return this.food + 2;
        console.log("get more food")
};
console.log(TavelerAna)
TavelerAna.hunt()
console.log(TavelerAna)