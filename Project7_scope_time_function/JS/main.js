var X = 17; //GLOBAL VARIABLR!
function Adding(){
    document.write(2 + X + "<br>");
}
function Adding_1(){
    document.write(65 + X + "<br>");
}
Adding();
Adding_1();

function Add(){ //LOCAL VARIABLE!
    var Y = 17
    document.write(2 + Y + "<br>");
   
}
function Add_1(){
    document.write(65 + Y);
}
Add();
Add_1();

function dividing_1(){
    var Z = 10;
    console.log( 30 - Z);
}
    function dividing_2(){
        console.log(199 - Z);
    }
    dividing_1();
    dividing_2();


function get_date(){
    if(new Date().getHours() < 12){
      document.getElementById("Greeting").innerHTML =" Are you ready for bed?"; 
    }
}

function Age_function() {
    var Age = document.getElementById("Age").value; // Get the age from the input field
    
    var message = ""; // Initialize an empty message string

    if (Age <= 18) {
        message = "You are not allowed to vote!";
    } else {
        message = "You are allowed to vote.";
    }

    document.getElementById("How_old_are_you").innerHTML = message; // Display the message in an HTML element with the ID "How_old_are_you"
}

function Time_function(){ //elseif function!
    var Time = new Date().getHours();
    var Reply; 
    if (Time < 12 == Time > 0){
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18){
        Reply = "Its is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}




