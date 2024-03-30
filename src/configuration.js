

var msgs = [
    'Aún no está implementado... lo siento :( No deberías volver a pulsar este botón.',
    'Ya te he dicho que no está implementado, y además te he dicho expresamente que no le des al botón',
    'Bro, no insistas, que no hay configuración todavía',
    'A ver... no nos estamos entendiendo. Este botón aún lo puedes usar! eres tont@??',
    'Mira, voy a calmarme y te lo voy a explicar. Este botón es pura decoración de momento, no me ha dado tiempo a hacerlo. Por favor, ten paciencia :)',
    'Esto no está funcionando. Dentro de poco los mensajes se van a repetir porque no he escrito frases infinitas, así que por favor, para de darle al botón y juega al p*** buscaminas!',
    'Pues nada... aquí estamos de nuevo. Debes estar muy interesado en cambiar los ajustes, si yo lo entiendo. PERO ESQUE AÚN NO SE PUEDE.',
    'He pensado en meter micropagos. La proxima vez que le des al botón voy a empezar a cobrarte por las siguientes.',
    'Se te han acabado las pruebas estúpidas gratuitas. Se ha hecho un cargo de 5€ en tu cuenta.',
    'Ya van 10€, yo pararía.',
    '15€', '20€',
    'De verdad, te lo estoy cobrando, no estoy de coña, soy un hacker muy poderoso, revisa tu cuenta verás.',
    'Ya la has revisado? No puedes acceder a los ajustes sin revisar tu cuenta.',
    'No me engañes, sé que no la has revisado. Por favor hazlo.',
    'Vaaaale sí, no es verdad que te estuviese cobrando, pero esque te has puesto un poco pesad@. Has mirado al menos? No? Vaya...',
    'Mira, tu ganas, estoy harto. Te voy a confesar algo. En realidad sí está implementada, pero es que aún no está acabada... es un copia pega del snake y no he podido cambiarlo aún. Dale otra vez al botón, que sé que te flipa.'
]

var count = 0;
// var count = msgs.length - 1;

function Configuration() {
    initModal();

    action = function(e) {
        if(count < msgs.length) {
            alert(msgs[count]);
            count++;
            if(count == msgs.length) {
                openModal()
            };
        } else {
            openModal();
        }
    }
    init = function() {
        document.querySelector(".config-btn input").addEventListener("click", this.action)
    }()
}


/* MODALS of code-settings */

function openModal(){ //used in the code-settings' modal

    var modal = document.getElementById('settings-modal');

    modal.showModal();
}

function closeModal(){
    var modal = document.getElementById('settings-modal');

    if(modal.open) modal.close();
}

document.addEventListener("click", (e)=>{

    document.querySelectorAll(".modal").forEach((modal)=>{
        //if target is the *modal, close it
        if(e.target == modal && modal.open)
        modal.close();
    })
})

function initModal(){
  var buttons = document.querySelectorAll(".modal-buttons button");
    
  buttons[0].addEventListener("click", defaultButton);
  buttons[1].addEventListener("click", saveButton);
  buttons[2].addEventListener("click", cancelButton);
 
}


function defaultButton (){
  

}

function saveButton(){
  
}

function cancelButton(){
  
  closeModal();
}
