const { checkWin } = require('../script.js');

describe('Tic Tac Toe', () => {
    test('should detect horizontal win', () => {
        const board = ['X', 'X', 'X', null, null, null, null, null, null];
        expect(checkWin(board, 'X')).toBe(true);
    });

    test('should detect no win', () => {
        const board = ['X', 'O', 'X', null, null, null, null, null, null];
        expect(checkWin(board, 'X')).toBe(false);
    });
});