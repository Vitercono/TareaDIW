console.log("Hola, Mundo!");
document.querySelector("input#lenguaje").value = navigator.language;

document.getElementById('open-off-canva').addEventListener('click',()=>{
    var reserva = document.getElementById('offcanvas');
    reserva.classList.toggle('show')
});
document.querySelector('#offcanvas button.close').addEventListener('click',()=>{
    document.getElementById('offcanvas').classList.remove('show');
});
document.getElementById('botonReserva').addEventListener('click',()=>{
    var reserva = document.getElementById('offcanvas');
    reserva.classList.toggle('show')
});