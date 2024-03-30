
var flagMode = false;

window.onload = function() {
    
    // cells^2 / 8 = bombs
    new Minesweeper(8, 8);
    
    new FlagCheckbox();
    new Configuration();
}



