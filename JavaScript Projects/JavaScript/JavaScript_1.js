function displayFruitInfo() {
    var selector = document.getElementById("fruitSelector");
    var selectedFruit = selector.value;
    var displayArea = document.getElementById("fruitInfo");

    switch (selectedFruit) {
        case "apple":
            displayArea.innerHTML = "Apples are red or green.";
            break;
        case "banana":
            displayArea.innerHTML = "Bananas are yellow and curved.";
            break;
        case "cherry":
            displayArea.innerHTML = "Cherries are small and red or black.";
            break;
        default:
            displayArea.innerHTML = "Please select a fruit.";
    }
}

//getelementbyclassname
function Hello_world_function() {
    var A = document.getElementsByClassName("click");
    A[0].innerHTML = "The text has changed!";
}

//canvas!

var c = document.getElementById("can");
var ctx = c.getContext("2d");

// Create a Gradient
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

// Draw a filled Rectangle
ctx.fillStyle = grd;
ctx.fillRect(20, 20,200, 200);

ctx.font = "50px Arial";
ctx.strokeStyle = "black"; // Set outline color for text
ctx.lineWidth = 2; // Set outline width for text
ctx.strokeText("Hello World", 50, 50); // Draw the outlined text


//canvas!
