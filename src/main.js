
var flagMode = false;
var savedCells = 8;
var savedBombs = 12;
var savedMute = false;

window.onload = function() {
    
    // FÁCIL: cells^2 / 10 = bombs
    // NORMAL: cells^2 / 5 = bombs
    // DIFICIL: cells^2 / 3 = bombs
    getLocalSave();

    new Minesweeper(savedCells, savedBombs);
    
    new FlagCheckbox();
    new Configuration();
    
    document.getElementById("reload").addEventListener("click", reload)
}

function reload() {
    window.location.reload();
}

function getLocalSave() {
    savedCells = localStorage.getItem('cells') || savedCells;
    savedBombs = localStorage.getItem('bombs') || savedBombs;
    savedMute = JSON.parse(localStorage.getItem('mute')) || savedMute;
}