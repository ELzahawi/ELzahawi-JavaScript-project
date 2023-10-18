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