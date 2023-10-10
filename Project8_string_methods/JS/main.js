function connect_sen(){ //concat()Method!
    var sen_1= "I am learning ";
    var sen_2= "a programing " ;
    var sen_3= "language ";
    var full= sen_1.concat(sen_2 , sen_3);
    document.getElementById("concat").innerHTML = full;
}

//slice()Method!
function slice_method(){
    var sentens = "I am practicing strings methods";
    var extracting = sentens.slice(16 , 24);
    document.getElementById("slice").innerHTML = extracting;
}

//toUppercase()Method!
function upper_case(){
    var origin = "hello world "
    var copy = origin.toUpperCase();
    document.getElementById("change").innerHTML =  copy;
}

//search()Method!
function search(){
    var origin = "hello world "
    var copy = origin.search("world");//the pattern "world" starts at index 6 in the string
    document.getElementById("Search").innerHTML =  copy;
}

//tostring()Method!
function string_method(){
    var Y = 1155;
    document.getElementById("number_string").innerHTML =  Y.toString();
}

//toprecision Method!
function precision_method(){
    var X = 1234.6578904333455
    document.getElementById("Precision").innerHTML = X.toPrecision(6);
}

//tofixed Method!
function fixed_method(){
    var Z = 12345.67898;
    document.getElementById("fixed").innerHTML = Z.toFixed(3);
}

//value Method!
function value_method(){
    var C = 123;
    document.getElementById("value").innerHTML = C.valueOf();
}