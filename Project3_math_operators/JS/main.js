function myfunction (){
    var sentence = "JavaScript is a programing language!";
    document.getElementById("Math").innerHTML = sentence;
}

function subtraction_Function() {
    var subtraction = 6 - 3;
    document.getElementById("Math").innerHTML = "6 - 3 = " + subtraction; //subtraction operation!
}

function multiplication(){
var simple_math = 5 * 5;
document.getElementById("Math").innerHTML = "5 x 5 = " + simple_math;
}

function division(){
    var simple_math = 25 / 2;
    document.getElementById("Math").innerHTML = "25 / 2 = " + simple_math; //division operation!
}


function more_math(){
    var simple_math = ( 1+2 ) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML = " 1 plus 2,mutiplied by 10, divided in half and subtracted by 5 equals" +simple_math;
}

function modulus_operator(){
    var simple_math = 25 % 6;
    document.getElementById("Math").innerHTML = "when you divide 25 by 6 you have a reminder of :" + simple_math
}

function negation_operator(){
    var x = 10;
    document.getElementById("Math").innerHTML = -x;
}

function random(){
    document.getElementById("Math").innerHTML = Math.random()*10;
}

function random1(){
    document.getElementById("Math").innerHTML = Math.random()*100;
}


var H = 5.25;
H--;
document.write(H)

var x = 5;
x++;
document.write(x)



