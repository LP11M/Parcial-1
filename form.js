//Función del reloj
function updateTime() {
    var now = new Date();

    var days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    var day = days[now.getDay()];
    var month = months[now.getMonth()];
    var date = now.getDate();
    var year = now.getFullYear();

    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    var timeString = hours + ':' + minutes + ':' + seconds;
    var dateString = day + ', ' + date + ' de ' + month + ' de ' + year;
    document.getElementById('f').innerHTML = timeString + ' - ' + dateString;
    setTimeout(updateTime, 1000);
}

//FUnción para formulario
window.onload = function() {
    updateTime();

    var formulario = document.getElementById('formulario');
    var nombre = formulario.nombre;
    var correo = formulario.correo;
    var genero = formulario.genero;
    var terminos = formulario.terminos;
    var error = document.getElementById('error');

    function validarName(e) {
        if (nombre.value === '' || nombre.value == null) {
            error.style.display = 'block';
            error.innerHTML += '<li>Complete su nombre</li>';
            console.log('Please add a name');
            e.preventDefault();
        } 
    }

    function validarEmail(e) {
        if (correo.value == '' || correo.value == null) {
            error.style.display = 'block';
            error.innerHTML += '<li>Complete su email</li>';
            console.log('Please add an email');
            e.preventDefault();
        } 
    }

    function validarGender(e) {
        if (genero.value =='' || genero.value == null) {
            error.style.display = 'block';
            error.innerHTML += '<li>Seleccione si es cliente o proveedor</li>';
            console.log('Please select an option');
            e.preventDefault();
        }
    }

    function validarTerms(e) {
        if (terminos.checked == false) {
            error.style.display = 'block';
            error.innerHTML += '<li>Acepte términos y condiciones</li>';
            console.log('Please agree terms & conditions');
            e.preventDefault();
        }
    }

    // Función encargada de validar todos los campos
    function validarForm(e) {
        // Reiniciamos el error para que inicie sin mensaje
        error.innerHTML = '';
        validarName(e);
        validarEmail(e);
        validarGender(e);
        validarTerms(e);
        alert("¡Gracias! Sus datos han sido enviados")
    }

    formulario.addEventListener('submit', validarForm);
};