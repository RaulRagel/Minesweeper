
var flagMode = false;

window.onload = function() {
    
    // cells^2 / 8 = bombs
    new Minesweeper(4, 2);
    
    new FlagCheckbox();
    new Configuration();
    
    document.getElementById("reload").addEventListener("click", reload)
}



function reload() {
    window.location.reload();
}