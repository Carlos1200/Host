const boton = document.querySelector('#enviar');
boton.addEventListener('click', formulario);

function formulario(e) {
    e.preventDefault();
    if (validarCampos() && validarFecha()) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Tu formulario ha sido enviado',
            showConfirmButton: false,
            timer: 1500
        })
    }
}



function validarCampos() {
    let nombre = document.querySelector('#nombre');
    let email = document.querySelector('#correo');
    let numero = document.querySelector('#telefono');
    let hora = document.querySelector('#hora');
    //Validar email
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    //Validar telefono
    const regexNum = /^[5-7][0-9]{7}$/i;
    if (emailRegex.test(email.value) && numero.value.match(regexNum) && nombre.value.length != 0 && hora.value != '') {

        return true;
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Complete los campos de manera que sea valido',
            text: 'Error'
        });
        return false;
    }

}

function validarFecha() {

    let inputFecha = document.querySelector('input[type="date"]');
    //Validacion de fecha
    var fecha = new Date();
    var dia = inputFecha.valueAsDate.getDate() + 1;
    var mes = inputFecha.valueAsDate.getMonth() + 1;
    var año = inputFecha.valueAsDate.getFullYear();


    if (dia >= fecha.getDate() && año === fecha.getFullYear() && mes >= fecha.getMonth() + 1) {
        return true
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Ponga una fecha a partir de hoy',
            text: 'Error'
        });
        return false;
    }

    //validacion de Email



}