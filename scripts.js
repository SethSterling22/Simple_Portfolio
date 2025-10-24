// Validad el E-mail
function validateEmail(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}


// Tomar la información del E-mail enviada
function handEmail(){
    var emailInput = document.getElementById("email");
    var email = emailInput.value;
    if (validateEmail(email)){
        alert("That's a real E-mail 😎")
    }
    else{
        alert("That's not a E-mail ☝🏻🤓")
    }
}


// Cargar los elementos de la imagen al inicio
document.addEventListener("DOMContentLoaded", function() {
    
    // Obtener elementos
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img_modal");
    var closeModal = document.getElementById("closeModal");

    // Función para abrir el modal
    window.openModal = function(src) {
        modal.style.display = "flex";
        modalImg.src = src;
    }

    // Ocultar el modal - equis
    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    // Ocultar el modal - background
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});