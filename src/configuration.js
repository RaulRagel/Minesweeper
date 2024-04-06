
var cellInput = null;
var bombInput = null;

function Configuration() {
    initModal();

    action = function(e) {
        openModal();
    }
    init = function() {
        document.querySelector(".config-btn input").addEventListener("click", this.action)
    }()
}

function initModal(){
    var close = document.querySelector(".close");
    close.addEventListener("click", closeModal);

    cellInput = document.getElementById('cells');
    bombInput = document.getElementById('bombs');
    muteInput = document.getElementById('mute');
    
    cellInput.value = savedCells;
    bombInput.value = savedBombs;
    muteInput.checked = JSON.parse(savedMute);
}

function openModal(){
    var modal = document.getElementById('settings-modal');
    modal.showModal();
}

function closeModal(){
    var modal = document.getElementById('settings-modal');
    if(modal.open) modal.close();
}

function defaultButton() {
    cellInput.value = 8;
    bombInput.value = 12;
    muteInput.checked = false;
}

function saveButton() {
    localStorage.setItem('cells', cellInput.value);
    localStorage.setItem('bombs', bombInput.value);
    localStorage.setItem('mute', muteInput.checked);

    window.location.reload();
}

function cancelButton(){
    closeModal();
}

// Cerrar modal al hacer click fuera
document.addEventListener("click", (e)=>{
    document.querySelectorAll(".modal").forEach((modal)=>{
        if(e.target == modal && modal.open) {
            modal.close();
        }
    })
})