// This variable keeps track of whose turn it is.
let activePlayer = 'X';
// This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];

// This function is for placing an X or O in a square.
function  placeXOrO(squareNumber) {
    // This condition ensures a square has not been selected already.
    // The .some() method is used to check each element of the selectedSquares array
    // to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        // This variable retrieves the HTML element with the id that was clicked.
        let select = document.getElementById(squareNumber);
        // This condition checks whose turn it is.
        if (activePlayer === 'X') {
            // If activePlayer is equal to 'X', the X.png is placed in HTML.
            select.style.backgroundImage = 'url("images/x.png")';
            //active player may onlybe x or o so if not x must be o
        } else {
            // If activePlayer is equal to 'O', the O.png is placed in HTML.
            select.style.backgroundImage = 'url("images/o.png")';
        }
        // SquareNumber and activePlayer are concatenated together and added to the array.
        selectedSquares.push(squareNumber + activePlayer);
        // This calls a function to check for any win conditions.
        checkWinConditions();
        // This condition is for changing the active player.
        if (activePlayer === 'X') {
            // If active player is X, change it to O.
            activePlayer = 'O';
            //if active player is anything other than x
        } else {
            // Change the active player to X.
            activePlayer = 'X';
        }
        // This function plays placement sounds.
         Audio('./media/place.mp3');
        // This condition checks to see if it is the computer's turn.
        if (activePlayer === 'O') {
            // This function disables clicking during the computer's turn.
            disableClick();
            // This function waits 1 second before the computer places an image and enables click.
            setTimeout(function() {computersTurn(); }, 1000);
        }
        // Returning true is needed for our computersTurn() function to work.
        return true;
    }
     // This function results in a random square being selected by the computer.
    function computersTurn() {
        // This boolean is needed for our while loop.
        let success = false;
        //this variable stores a random number 0-8
        let pickASquare;
        // This condition allows our while loop to keep trying if a square is selected already.
        while (!success) {
            // A random number between 0 and 8 is selected.
            pickASquare = String(Math.floor(Math.random() * 9));
            // If the random number evaluated returns true, the square has not been selected yet.
            if ( placeXOrO(pickASquare)) {
             // This line calls the function.
             placeXOrO(pickASquare);
             // This changes our boolean and ends the loop.
                success = true;
            };
        }
    }
}

//this fuction parses the selectasquares array to search dor win conditions.
//drawline() function is called to draw a line on the screen if the condition is met.
function checkWinConditions(){
    // x 0, 1, 2 condition.
    if (arrayIncludes('0X','1X','2X')) { drawWinLine(50, 100, 558, 100) }
    //X 3,4,5 conditon.
    else if (arrayIncludes('3X','4X','5X')){ drawWinLine(50,304,558,304) }
    //X 6,7,8 condition.
    else if (arrayIncludes('6X','7X','8X')){ drawWinLine(50,508,558,508) }
    // x 0, 3,6 condithin.
    else if (arrayIncludes('0X','3X','6X')){ drawWinLine(100,50,100,558) }
    //x 1,4,7 condition
    else if (arrayIncludes('1X','4X','7X')){ drawWinLine(304,50,304,558) }
    //x 2,5,8 condition
    else if (arrayIncludes('2X','5X','8X')){ drawWinLine(508,50,508,558) }
    //x 6,4,2 condition
    else if (arrayIncludes('6X','4X','2X')){ drawWinLine(100,508,510,90) }
    //x 0,4,8 condition
    else if (arrayIncludes('0X','4X','8X')){ drawWinLine(100,100,520,520) }
    //x O 0,1,2 condition
    else if (arrayIncludes('0OX','1O','2O')){ drawWinLine(50,100,558,100) }
    //x 0 3,4,5 condition
    else if (arrayIncludes('3O','4O','5O')){ drawWinLine(50,304,558,304) }
    //x 0 6,7,8 condition
    else if (arrayIncludes('6O','7O','8O')){ drawWinLine(50,508,558,508) }
    //x O0,3,6 condition
    else if (arrayIncludes('0O','3O','6O')){ drawWinLine(100,50,100,558) }
    //x O 1,4,7 condition
    else if (arrayIncludes('1O','4O','7O')){ drawWinLine(304,50,304,558) }
    //x O 2,5,8 condition
    else if (arrayIncludes('2O','5O','8O')){ drawWinLine(508,50,508,558) }
    //x O 6,4,2 condition
    else if (arrayIncludes('6O','4O','2O')){ drawWinLine(100,508,510,90) }
    //x O0,4,8 condition
    else if (arrayIncludes('0O','4O','8O')){ drawWinLine(100,100,520,520) }
    //THIS conditon checks for a tie . if none of the above conditions are met and 
    //9 squares are selected the code excutes.
    else if(selectedSquares.length >= 9){
        //this function plays tie game sound.
        Audio('./media/tie.mp3');
        //this function sets a .3 second timer before the restgame is called.
        setTimeout(function() {resetGame();},500);
    }
    
    //this function checks if an array includes 3 strings . it is to check for 
    //each win condition.
    function arrayIncludes(squareA, squareB, squareC){
        //these 3 variable will be used to check for 3 in a row .
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //if the 3 variable we pass are all included in our array then
        //true is returned and our else if condition excutes the drawline() function.
        if (a === true && b === true && c === true) { return true;}
    }
}







