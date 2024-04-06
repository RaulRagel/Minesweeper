
var flagMode = false;

window.onload = function() {
    
    // FÁCIL: cells^2 / 10 = bombs
    // NORMAL: cells^2 / 5 = bombs
    // DIFICIL: cells^2 / 3 = bombs
    new Minesweeper(8);
    // new Minesweeper(4, 2);
    
    new FlagCheckbox();
    new Configuration();
    
    document.getElementById("reload").addEventListener("click", reload)
}

function reload() {
    window.location.reload();
}