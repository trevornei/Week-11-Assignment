const board = $('#board');
let currentPlayer = "X";
let activeGame = true;

/*
    Select the document object, use the .ready() method to select each cell, and add an eventlisener of click.
*/

// Variable currentPlays updates number of plays that each player has made into an array.
let numPlays = 0;
let currentPlays = {
    X: [],
    O: []
}

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

// Iterate over the array.


console.table(winningPositions)

console.log(currentPlays)

// Create a function that creates a message.
function displayMessage(message) {
    // New div that contains the message "You Won!" or "You Loose!"
    const messageDiv = $('<div></div>')
        .addClass('fixed inset-0 flex items center justify-center z-10 w-2/12 h-auto bg-teagreen text-2xl text-black')
        .text(message);

    $('body').append(messageDiv);

    //Blur the main content
    $('main').addClass('blur');
}


// document object is selected
// .ready() is a method that is loaded before the website is displayed to the user.
$(document).ready(function () {
    // Tracks moves of each player
    let moves = { 'X': [], 'O': [] };
    // Tracks the number of moves that have occured. 
    // Select the divs with class="cell"
    $('.cell').on('click', function () {
        // this refers to the divs with class="cell" 
        // .text() method returns the selected element and all of it's decendents as a string. 
        $(this).text(currentPlayer);
        // Records the move...
        currentPlays[currentPlayer].push(parseInt($(this).attr('data-index')))
        if (isWinner()) {
            alert('Winner: ' + currentPlayer);
        }

        if (isDraw()) {
            alert(`Draw!`);
        }
        // Toggles current player with ternary operator
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
        numPlays++

    })
})

let isWinner = () => {
    if (numPlays < 3) {
        return false;
    }

    for (let i = 0; i < winningPositions.length; i++) {
        let win = true;
        for (let j = 0; j < winningPositions[i].length; j++) {
            if ($.inArray(winningPositions[i][j], currentPlays[currentPlayer]) < 0) {
                win = false;
                break;
            }
        }
    
        if (win) 
            return true;
    }

    return false;
}