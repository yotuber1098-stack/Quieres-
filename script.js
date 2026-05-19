function aceptar(){

    document.getElementById("mensajeFinal").style.display = "block";
}

/* REPRODUCIR MUSICA */

function reproducirMusica(){

    const musica = document.getElementById("musica");

    musica.play();
}

/* BOTON NO ESCAPA */

function moverBoton(){

    const boton = document.getElementById("no");

    const ancho = window.innerWidth - 200;
    const alto = window.innerHeight - 200;

    const randomX = Math.floor(Math.random() * ancho);
    const randomY = Math.floor(Math.random() * alto);

    boton.style.position = "absolute";

    boton.style.left = randomX + "px";

    boton.style.top = randomY + "px";
}