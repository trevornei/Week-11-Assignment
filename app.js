giconst board = $('#board');
let currentPlayer = "X";
let activeGame = true;

// This function clears the board of any click events/ X's or O's.
function resetGame() {
    // Select cell and use .text() to enter nothing.
    $('.cell').text("");
}

/*
    Select the document object, use the .ready() method to select each cell, and add an eventlisener of click.
*/

// Variable currentPlays updates number of plays that each player has made into an array.
let numPlays = 0;
let currentPlays = {
    X: [],
    O: []
}


// An array of array's that contains the combinations of winning positions.
const winningPositions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

// document object is selected
// .ready() is a method that makes sure the following code does not run before the DOM is fully loaded.
$(document).ready(function () {
    // Select the button for restart game.
    // Create a click event
    $('#restartGameBtn button').on('click', function() {
    // Call resetGame() function.
        resetGame()
    })
    
    // Tracks the number of moves that have occured. 
    // Select the divs with class="cell"
    $('.cell').on('click', function () {
        // this refers to the divs with class="cell" 
        // .text() method returns the selected element and all of it's decendents as a string. 
        $(this).text(currentPlayer);
        // Records the move...
        currentPlays[currentPlayer].push(parseInt($(this).attr('data-index')))
        if (isWinner()) {
            win();
        } else if (isDraw()) {
            draw();
        }
        // Toggles current player with ternary operator
        // If the click event starts with currentPlayer equal to 'X' then the next click event will have the value of currentPlayer set to 'O' and vice versa.
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
        numPlays++

    })
})

// This function enters the string Draw! into the element with the id of result.
function draw() {
    $("#result").text('Draw!');
}

// isDraw is a funtion that returns the number of plays to 8. 
function isDraw() {
    return numPlays === 8;
}

function win() {
    $("#result").text(currentPlayer + ' Won!!!');
}

let isWinner = () => {
    // numPlays uses a postfix increment to count the number of plays based on the number of clicks.
    // The only way a player can win is if a player has clicked more than three times. 
    if (numPlays < 3) {
        return false;
    }
    /*
      If numPlays is greater than 3 this for loop will run.
        - i will iterate over the lenth of winningPositions array of arrays that stores the data for all of the possible winning combinations.

        - The value of win is set to true because this is the isWinner() method. 

        - (Inner for loop) j iterates through each cell to check for a winning combination.

        inArray() finds a value inside an array. When it finds the right occurance, the index of will be returnded. If not, the method returns -1 and the loop is terminated. 
    */
    for (let i = 0; i < winningPositions.length; i++) {
        let win = true;
        for (let j = 0; j < winningPositions[i].length; j++) {
            // currentPlays is an object that stores clicks made for each player, X: and O: and saves the data-index="number". 
            // if the currentPlayers, currentPlays array does not match a winning combination, the the varaible win is set to falsey.
            if ($.inArray(winningPositions[i][j], currentPlays[currentPlayer]) < 0) {
                win = false;
                break;
            }
        }
        // If win is truthy then the function returns true letting the program know that currentPlayer has won the game.
        if (win) 
            return true;
    }

    return false;
}