function call_loop() { //function using while loop!
    var Z = 1;
    var digit = " ";
    while (Z < 6) {
        digit += " " + Z;
        Z++;
    }
    document.getElementById("loop").innerHTML = digit;
}



//function using for loop!
var instruments = ["Guitar", "Piano", "Drums", "Bass"];
var content = "";

function for_loop() {
    for (var X = 0; X < instruments.length; X++) {
        content += instruments[X] + "<br>";
    }
    document.getElementById("list_of_instruments").innerHTML = content;
}

//using const keyword!
function constant_function() {
    const musical_instrument = { type: "guitar", brand: "Fender", color: "black" };
    // The color property cannot be modified in a const object.
    // Adding a new property is fine.
    musical_instrument.price = "£1000";
    document.getElementById("constant").innerHTML = "The cost of the " + musical_instrument.type + " was " + musical_instrument.price;
}

//using let keyword!
let car = {
    make: "Kia",
    model: "Niro",
    year: "2020",
    color: "blue",
    description: function () {
        return "This car is a " + this.year + " " + this.color + " " + this.make + " " + this.model;
    }
};
document.getElementById("car_object").innerHTML = car.description();



