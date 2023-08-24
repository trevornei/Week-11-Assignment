const board = $('#board');
let currentPlayer = "X";
let activeGame = true;

/*
    Select the document object, use the .ready() method to select each cell, and add an eventlisener of click.
*/

$(document).ready(function () {
    // Select the divs with id="cell"
    $('.cell').on('click', function () {
        $(this).text(currentPlayer);

        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    })
})