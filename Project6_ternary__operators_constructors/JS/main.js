function Ride_function(){
    var Height, can_ride;
    Height = document.getElementById("Height").value;
    can_ride = (Height < 52) ?"You are too short":"You are tall enough to ride";
    document.getElementById("Ride").innerHTML = can_ride +" ";

}

function voter(){
var Age, can_vote;
Age = document.getElementById("Age").value;
can_vote = (Age < 18) ? "You are not old enough":"You can vote!";
document.getElementById("vote").innerHTML = can_vote +" ";
}

function vehicle(Make, Model, year, Color){
    this.vehicle_Make = Make;
    this.vehicle_Model = Model;
    this.vehicle_year = year;
    this.vehicle_Color = Color;
}
var Jack = new vehicle("Dodge" , "viper", 2020, "Red");
var Emily = new vehicle("Jeep", "Trial Hawk", 2019, "White and Black" );
var Erik = new vehicle("Ford", "Pinto", 1971, "Mustard");
function myfunction(){
    document.getElementById("Keywords_and_costructors").innerHTML = 
    "Erik drives a " + Erik.vehicle_Color + "-colored " + Erik.vehicle_Model + " manufactured in " + Erik.vehicle_year;
}

//Nested function !
function add_strings(){
    var start_string = "Hello";

    function adding (){
        var cola = "World";
        start_string = start_string + cola;
    
    }
    adding("World")
    document.getElementById("nested_function").innerHTML = start_string;
    
}

