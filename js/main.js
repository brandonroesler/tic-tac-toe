/*----- constants -----*/
const PLAYERS = {
    '1': 'Blue',
    '-1': 'Black',
    '0': 'white'
};

/*----- app's state (variables) -----*/
var board, winner, turn;

/*----- cached element references -----*/ 
const msgEl = document.getElementById('msg');

/*----- event listeners -----*/ 

document.getElementById('squares')
  .addEventListener('click', handleClick);

/*----- functions -----*/
init();

function handleClick(evt) {
    const marker = evt.target;
    const colIdx = parseInt(marker.id.slice(1, 2));
    const rowIdx = parseInt(marker.id.slice(3));
    if(board[colIdx][rowIdx]) return;
    board[colIdx][rowIdx] = turn;
    /* 
    winner = getWinner();
    */
    turn *= -1;
    render();
}

function render() {
// Display the board

board.forEach(function(colArr, colIdx) {
    // Update col markers
    /*const marker = document.getElementById(`col${colIdx}`);
    marker.style.borderTopColor = colArr.includes(0) ? 'lightgrey' : 'white';*/
    colArr.forEach(function(cell, rowIdx) {
    // Access the correct div in the section
    const div = document.getElementById(`c${colIdx}r${rowIdx}`);
    div.style.backgroundColor = PLAYERS[cell];
    });
});

// Display message
if (winner) {
    if (winner === 'T') {
    msgEl.textContent = "It's a Tie!";
    } else {
    /* msgEl.innerHTML = `<span style="color:${COLORS[winner]}">${COLORS[winner].toUpperCase()}</span> Wins!`;*/
    }
} else {
    msgEl.innerHTML = `<span style="color:${PLAYERS[turn]}">${PLAYERS[turn].toUpperCase()}</span>'s Turn`;
}
}

function init() {
board = [
    [0, 0, 0],  // column 1
    [0, 0, 0],  // column 2
    [0, 0, 0],  // column 3
];
winner = null;
turn = 1;
render();
}