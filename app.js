const board = $('#board');
let currentPlayer = "X";
let activeGame = true;

/*
    Select the document object, use the .ready() method to select each cell, and add an eventlisener of click.
*/

// Variable currentPlays updates number of plays that each player has made into an array.
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
console.table(winningPositions)

console.log(currentPlays)

// document object is selected
// .ready() is a method that is loaded before the website is displayed to the user.
$(document).ready(function () {
    // Select the divs with class="cell"
    $('.cell').on('click', function () {
        // this refers to the divs with class="cell" 
        // .text() method returns the selected element and all of it's decendents as a string. 
        $(this).text(currentPlayer);

        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    })
})