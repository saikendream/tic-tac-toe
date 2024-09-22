let game = function() {
    let board = ["", "", "", "", "", "", "", "", ""];

    function player() {
        this.positions = [];
        this.winner = false;
    };

    const playerX = new player();
    const player0 = new player();

    let victoryCheck = () => {
        let winRule = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
            [1, 5, 9],
            [3, 5, 7]
        ];

        function winner(indPlayer) {
            console.log(`${indPlayer} wins`);
            indPlayer.winner = true;
        };

        for(i = 0; i < winRule.length; i++) {
            if(playerX.includes(winRule[i])) {
                winner(playerX);
            } else if(playerO.includes(winRule[i])) {
                winner(player0);
            }
        }

        if(board.forEach != "" && (playerX.winner || player0.winner)) {
            return "It's a tie.";
        }
    };
};