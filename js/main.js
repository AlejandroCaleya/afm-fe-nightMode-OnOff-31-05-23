function mode() {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
    
    let clase = document.body.className;
    const icono = document.getElementById('btn');
    const boton = document.getElementsByClassName('btnDay');
    if (clase == 'light-mode') {
        icono.textContent='nights_stay';
        boton.classList.toggle('btnDay'); 
    } else {
        icono.textContent='light_mode';
        boton.classList.toggle('btnNight');
    }
}