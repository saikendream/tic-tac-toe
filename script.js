let board = ["", "", "", "", "", "", "", "", ""];

let game = (() => {
    function player() {
        this.positions = [];
        this.winner = false;
    };

    const playerX = new player();
    const playerO = new player();

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
        console.log(playerX);
    };

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
            gameOn = false;
        };

        for(i = 0; i < winRule.length; i++) {
            if(playerX.positions.includes(winRule[i])) {
                console.log(playerX.positions);
                winner(playerX);
            } else if(playerO.positions.includes(winRule[i])) {
                console.log(playerO.positions);
                winner(playerO);
            } else if(board.forEach != "" && (playerX.winner || playerO.winner)) {
                console.log("It's a tie.");
                gameOn = false;
            }
        }
    };

    let playing = () => {
        if(userTurn) {
            console.log("You're X.");
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
        
                while(board[theChoice] != "") {
                    console.log("Spot is occupied.");
                    theChoice = choosing();
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
}) ();