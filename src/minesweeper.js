
var gameArray = [];
var max = 0;
var holdClickTimeout = null;
var flagging = false;
var cellNumber = 0;

var directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],          [0, 1],
    [1, -1], [1, 0], [1, 1]
];

function Minesweeper(cellNumber, bombNumber) {

    initTablero(cellNumber);
    generateBombs(bombNumber);
    generateNumbers();

    // mostrar tablero
    // console.log('%ctablero.js gameArray', 'color: purple;', gameArray);
}

function initTablero(cellNumber) {
    var table = document.getElementById('tablero');
    var tr = null, td = null;
    var row = null;
    this.cellNumber = cellNumber;
    for (var x = 0; x < cellNumber; x++) {
        tr = document.createElement('tr');
        row = [];
        for (var y = 0; y < cellNumber; y++) {
            td = document.createElement('td');
            td.setAttribute('id', x +'-'+ y);
            td.setAttribute('class', 'cell');
            td.onclick = cellClick;
            td.addEventListener('mousedown', holdAndSetFlag);
            td.addEventListener('mouseup', cancelHold);
            tr.appendChild(td);
            row.push('');
        }
        gameArray.push(row);
        table.appendChild(tr);
    }
    max = gameArray.length - 1;
}

function cellClick() {
    var [x, y] = this.id.split('-').map(Number);
    if(!flagMode) {
        if(this.classList.contains('flag')) return;
        if(flagging) { // siempre que sea true, es porque hemos mantenido
            flagging = false;
        } else {
            this.classList.add('discovered', 'num-' + gameArray[x][y]);
        
            if(gameArray[x][y] == 'X') {
                gameOver();
            } else if(gameArray[x][y] == '0') {
                expand(x, y);
            } else {
                checkFlagsAndExpand(x, y);
            }
        }
    } else {
      if(this.classList.contains('discovered')) {
        checkFlagsAndExpand(x, y)
      }else{
        setFlag(null, this);
      }
    }
}

function gameOver() {
    var cell = null;
    for (var x = 0; x < cellNumber; x++) {
        for (var y = 0; y < cellNumber; y++) {
            cell = getCell(x, y);
            if(gameArray[x][y] == 'X' && !cell.classList.contains('discovered')) {
                cell.classList.add('discovered', 'num-' + gameArray[x][y]);
            }
        }
    }
    setTimeout(function() {
        alert('Game Over');
        reload();
    }, 100)
}

function holdAndSetFlag(e) {
    flagging = false; // aqui aun no sabemos si vamos a poner bandera, lo resetamos para que no se quede activo
    holdClickTimeout = setTimeout(function() {
        if(!flagMode) setFlag(e);
    }, 400);
}

function setFlag(event, cell) {
    var target = event ? event.target : cell;
    if(!target.classList.contains('discovered')) {
        flagging = true; // siempre al mentener es para poner banderas
        target.classList.toggle('flag');
        cancelHold();
    }
}

function cancelHold() {
    if(holdClickTimeout) { // si no se ha completado cancelamos para que no se ponga en modo banderas
        clearTimeout(holdClickTimeout);
        holdClickTimeout = null;
    }
};

function generateBombs(bombNumber) {
    var x = 0, y = 0;

    while (bombNumber > 0) {
        x = Math.floor(Math.random() * gameArray.length);
        y = Math.floor(Math.random() * gameArray.length);
        if(gameArray[x][y] == 'X') {
            console.log('Bomba repetida');
        }
        if(gameArray[x][y] !== 'X') {
            gameArray[x][y] = 'X';
            bombNumber--;
        }
    }
}

function generateNumbers() {
    for (var x = 0; x < gameArray.length; x++) {
        for (var y = 0; y < gameArray.length; y++) {
            if(gameArray[x][y] !== 'X') gameArray[x][y] = bombsAround(x, y);
        }
    }
}

function bombsAround(x, y) {
    var bombs = 0;

    directions.forEach(function(dir) {
        var xx = x + dir[0];
        var yy = y + dir[1];
        if(inbounds(xx, yy) && gameArray[xx][yy] == 'X') bombs++;
    });
    return bombs + '';
}

// function bombsAround(x, y) {
    // if (x > 0) {
    //     if (gameArray[x - 1][y] == 'X') bombs++;
    //     if (y > 0 && gameArray[x - 1][y - 1] == 'X') bombs++;
    //     if (y < max && gameArray[x - 1][y + 1] == 'X') bombs++;
    // }

    // if (y > 0 && gameArray[x][y - 1] == 'X') bombs++;
    // if (y < max && gameArray[x][y + 1] == 'X') bombs++;

    // if (x < max) {
    //     if (gameArray[x + 1][y] == 'X') bombs++;
    //     if (y > 0 && gameArray[x + 1][y - 1] == 'X') bombs++;
    //     if (y < max && gameArray[x + 1][y + 1] == 'X') bombs++;
    // }

    // return bombs + '';
// }

function inbounds(x, y) {
    return x >= 0 && x <= max && y >= 0 && y <= max;
}

function expand(x, y) {
    directions.forEach(function(dir) {
        var xx = x + dir[0];
        var yy = y + dir[1];
        var cc = getCell(xx, yy);
        if(inbounds(xx, yy) && !cc.classList.contains('discovered') && !cc.classList.contains('flag')) {
            cc.classList.add('discovered', 'num-' + gameArray[xx][yy]);
            if(gameArray[xx][yy] == '0') expand(xx, yy);
        }
    });
}

function checkFlagsAndExpand(x, y) {
    var bombs = 0;
    directions.forEach(function(dir) {
        var xx = x + dir[0];
        var yy = y + dir[1];
        if(inbounds(xx, yy) && getCell(xx, yy).classList.contains('flag')) bombs++;
    });
    if(gameArray[x][y] == bombs) expand(x, y);
}

function getCell(x, y) {
    return document.getElementById(x+'-'+y);
}

function has(cell, clas) {
  return cell.classList.contains(clas)
}
