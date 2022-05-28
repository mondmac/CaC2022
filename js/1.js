document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formulario").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    if (nombre.length == 0) {
        alert('No has escrito tu nombre');
        return;
    } 
    

    var apellido = document.getElementById('apellido').value;
    if (apellido.length == 0) {
        alert('No has escrito tu apellido');
        return;
    }

    var email = document.getElementById('email').value;
    if (email.length == 0) {
        alert('No has escrito tu email');
        return;
    } 
        let caracter = false;
        for (i = 0; i < email.length; i++) {

            if (email[i] == "@") {
                caracter = true;
            }
        }
        if (caracter == false) {
            alert('Usuario debe incluir el caracter @');
            return;
        }
    
    var consulta = document.getElementById('textarea').value;
        if (consulta.length < 20) {
            alert('Escribe una consulta de más de 20 caracteres');
            return;
        }


    this.submit();
}