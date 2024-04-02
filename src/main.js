
var flagMode = false;

window.onload = function() {
    
    // cells^2 / 8 = bombs
    new Minesweeper(10, 12);
    
    new FlagCheckbox();
    new Configuration();
    
    document.getElementById("reload").addEventListener("click", reload)
}



function reload() {
  window.location.reload();
}