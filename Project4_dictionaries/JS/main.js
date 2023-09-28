function my_dictionary(){
    var car = {
Model:"Audi",
Engin:"Sport",
year:"2020",
color:"Black",
    };
    delete car.color;
    document.getElementById("Dictionary").innerHTML = car.color;
} // removes the key before its value is displayed






