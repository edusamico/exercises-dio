let player, winner = null;
let playerOn = document.getElementById("playerOn");
let winnerOn = document.getElementById("winnerOn");

changePlayer("X");

function selectSquare (id) {
    if (winner !== null) return;
    let square = document.getElementById(id);
    if (square.innerHTML !== "-") return;
    
    square.innerHTML = player;
    square.style.color = '#000';

    if (player === "X") {
        player = "O";
    } else {
        player = "X";
    }

    changePlayer(player);
    checkWinner();
    
}

function changePlayer(value) {
    player = value;
    playerOn.innerHTML = player;
}

function checkWinner () {
    let square1 = document.getElementById(1);
    let square2 = document.getElementById(2);
    let square3 = document.getElementById(3);
    let square4 = document.getElementById(4);
    let square5 = document.getElementById(5);
    let square6 = document.getElementById(6);
    let square7 = document.getElementById(7);
    let square8 = document.getElementById(8);
    let square9 = document.getElementById(9);

    if (checkTriple(square1, square2, square3)) {
        setColor(square1, square2, square3);
        setWinner(square1);
        return;
    }

    if (checkTriple(square4, square5, square6)) {
        setColor(square4, square5, square6);
        setWinner(square4);
        return;
    }

    if (checkTriple(square7, square8, square9)) {
        setColor(square7, square8, square9);
        setWinner(square7);
        return;
    }
 
    if (checkTriple(square1, square4, square7)) {
        setColor(square1, square4, square7);
        setWinner(square1);
        return;
    }

    if (checkTriple(square2, square5, square8)) {
        setColor(square2, square5, square8);
        setWinner(square2);
        return;
    }

    if (checkTriple(square3, square6, square9)) {
        setColor(square3, square6, square9);
        setWinner(square3);
        return;
    }

    if (checkTriple(square1, square5, square9)) {
        setColor(square1, square5, square9);
        setWinner(square1);
        return;
    }

    if (checkTriple(square3, square5, square7)) {
        setColor(square3, square5, square7);
        setWinner(square3);
        return;
    }
}

function setWinner(square){
    winner = square.innerHTML;    
    winnerOn.innerHTML = winner;
}

function setColor(x, y, z) {
    x.style.background = "#0f0";
    y.style.background = "#0f0";
    z.style.background = "#0f0";
    
}

function checkTriple(x, y, z){
    let triple = false;
    if (x.innerHTML !== "-" && x.innerHTML === y.innerHTML && y.innerHTML === z.innerHTML) {
        triple = true;
    }
    return triple;
}

function reset () {
    winner = null;
    winnerOn.innerHTML = '';

    for(let i = 1; i <= 9; i++){
        let square = document.getElementById(i);
        square.style.background = "#ccc";
        square.style.color = "#ccc";
        square.innerHTML= "-";
    }
    
    changePlayer("X");
}