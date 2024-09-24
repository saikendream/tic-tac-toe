let board = ["", "", "", "", "", "", "", "", ""];

let game = () => {
    function player(name) {
        this.name = name;
        this.positions = [];
        this.winner = false;
    };

    const playerX = new player("X");
    const playerO = new player("O");

    let userTurn = true;
    let gameOn = true;

    let display = () => {
        victoryCheck();

        if(gameOn) {
            console.log(`${board[0]} | ${board[1]} | ${board[2]}`);
            console.log(`${board[3]} | ${board[4]} | ${board[5]}`);
            console.log(`${board[6]} | ${board[7]} | ${board[8]}`);
            playing();
        } else {};
    };

    function pushing(playerPosition, playerName) {
        playerPosition = playerPosition - 1;
        if(playerName == playerX) {
            board[playerPosition] = "X";
        } else if(playerName == playerO) {
            board[playerPosition] = "O";
        };
        playerName.positions.push(playerPosition);
        console.log(playerName);
    };

    let victoryCheck = () => {
        let winRule = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        function winner(indPlayer) {
            console.log("Winner is:");
            console.log(indPlayer);
            indPlayer.winner = true;
            gameOn = false;
        };

        Array.prototype.allEqual = function (arr, value) {
            return arr.every((el) => board[el] == value);
        };

        for(i = 0; i < winRule.length; i++) {
            const round = winRule[i];

            if(board.allEqual(round, "")) { console.log("All clear")
                continue; };
            if(board.allEqual(round, "X")) {
                winner(playerX);
            } else if(board.allEqual(round, "O")) {
                winner(playerO);
            };

            if(!(board.allEqual(board, "")) && playerX.winner && playerO.winner) {
                console.log(Boolean(board.allEqual(board, "")));
                console.log(Boolean(playerX.winner));
                console.log(Boolean(!(board.allEqual(board, "")) && !(playerX.winner) && !(playerO.winner)));
                console.log("It's a tie.");
                gameOn = false;
            } else {
                console.log("Tie function is false.");
            }
        }
    };

    let playing = () => {
        if(userTurn) {
            let userChoice = prompt("Choose your position");
            pushing(userChoice, playerX);

            userTurn = false;
        } else {
            let botPlayer = () => {
                let choosing = () => {
                    return Math.floor(Math.random() * 9);
                };

                let theChoice = choosing();
                console.log(`Bot chose ${theChoice}`);

                let loop = 0;
        
                while(board[theChoice] != "") {
                    console.log("Spot is occupied.");
                    theChoice = choosing();

                    loop++;
                    if(loop >= 1000) { victoryCheck(); };
                };
                
                theChoice++;
                pushing(theChoice, playerO);
                userTurn = true;
            };

            botPlayer();
        };

        display();
    };
 
    display();
};