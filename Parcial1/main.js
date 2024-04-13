$(document).ready(function(){
	//bxSlider jQuery
    $('.galeria').bxSlider({
        auto: true,
        mode: 'fade',
        captions: false,
        slideWidth: 400,
        responsive: true,
        pager: true
    });
});

//Reloj
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