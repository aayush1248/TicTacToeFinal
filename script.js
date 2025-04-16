const board = Array(9).fill(null);
let currentPlayer = 'X';

document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', () => {
        const index = cell.dataset.index;
        if (!board[index]) {
            board[index] = currentPlayer;
            cell.textContent = currentPlayer;
            console.log(`${currentPlayer} placed at index ${index}`);
            if (checkWin()) {
                console.log(`${currentPlayer} wins!`);
            } else if (board.every(cell => cell)) {
                console.log('Draw!');
            }
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    });
});

function checkWin() {
    const wins = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];
    return wins.some(combo => combo.every(i => board[i] === currentPlayer));
}