let ataqueJugador 
let ataqueEnemigo
let vidasDelJugador = 3
let vidasDelEnemigo = 3

function iniciarJuego() {
    let seccionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    seccionSeleccionarAtaque.style.display = 'none'

    let seccionReiniciar = document.getElementById('reiniciar')
    seccionReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota') 
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}
function seleccionarMascotaJugador(){
    let seccionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    seccionSeleccionarMascota.style.display = 'none'

    let seccionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    seccionSeleccionarAtaque.style.display = 'flex'

    let inputHipodoge = document.getElementById('Hipodoge')
    let inputCapipepo = document.getElementById('Capipepo')
    let inputRatigüeya = document.getElementById('Ratigüeya')
    let spanMascotaJugador = document.getElementById('nombreMascotaJugador')
    
   if (inputHipodoge.checked){
    spanMascotaJugador.innerHTML = "Hipodoge"
   } else if (inputCapipepo.checked){
    spanMascotaJugador.innerHTML = "Capipepo"
   } else if (inputRatigüeya.checked){
    spanMascotaJugador.innerHTML = "Ratigüeya"
   } else {
    alert("Selecciona una mascota por favor")
   }

   seleccionarMascotaEnemigo()
}
function seleccionarMascotaEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('nombreMascotaEnemigo')

    if (ataqueAleatorio == 1){
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    } else if (ataqueAleatorio == 2){
        spanMascotaEnemigo.innerHTML = "Capipepo"
    } else {
        spanMascotaEnemigo.innerHTML = "Ratigüeya"
    }
}
function ataqueFuego() {
    ataqueJugador = 'Fuego'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'Agua'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'Tierra'
    ataqueAleatorioEnemigo()
}
function ataqueAleatorioEnemigo(){
    let ataqueEnemigoAleatorio = aleatorio (1,3)

    if (ataqueEnemigoAleatorio == 1){
        ataqueEnemigo = 'Fuego'
    } else if (ataqueEnemigoAleatorio == 2){
        ataqueEnemigo = 'Agua'
    } else {
        ataqueEnemigo = 'Tierra'
    }
   
    combate()
} 
function combate() {
    let spanVidasJugador = document.getElementById('vidasJugador')
    let spanVidasEnemigo = document.getElementById('vidasEnemigo')

     if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("Empataron")
     } else if (ataqueEnemigo == 'Fuego' && ataqueJugador == 'Agua'){
        crearMensaje("Ganaste")
        vidasDelEnemigo--
        spanVidasEnemigo.innerHTML = vidasDelEnemigo
     } else if (ataqueEnemigo == 'Tierra' && ataqueJugador == 'Fuego'){
        crearMensaje("Ganaste")
        vidasDelEnemigo--
        spanVidasEnemigo.innerHTML = vidasDelEnemigo
     } else if (ataqueEnemigo == 'Agua' && ataqueJugador == 'Tierra'){
        crearMensaje("Ganaste")
       vidasDelEnemigo--
       spanVidasEnemigo.innerHTML = vidasDelEnemigo
     } else {
        crearMensaje("Perdiste")
        vidasDelJugador--
        spanVidasJugador.innerHTML = vidasDelJugador
     }

     
    revisarVidas()
}    
function revisarVidas(){
    if (vidasDelEnemigo == 0){
    crearMensajeFinal("Felicidades ganaste")
   }else if (vidasDelJugador == 0){
    crearMensajeFinal("Lo siento perdiste")
   }
}
function crearMensaje(resultado){
        let seccionMensajes = document.getElementById('resultado') 
        let ataquesDelJugador = document.getElementById('ataques-del-jugador') 
        let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo') 

        let nuevoAtaqueDelJugador = document.createElement('p')
        let nuevoAtaqueDelEnemigo = document.createElement('p')

        seccionMensajes.innerHTML = resultado
        nuevoAtaqueDelJugador.innerHTML = ataqueJugador
        nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

        ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
        ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}
function crearMensajeFinal(resultadoFinal){
        let seccionMensajes = document.getElementById('resultado') 

        seccionMensajes.innerHTML = resultadoFinal

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let seccionReiniciar = document.getElementById('reiniciar')
    seccionReiniciar.style.display = 'block'
}
function reiniciarJuego(){
    location.reload()
}
function aleatorio(min, max){
    return Math.floor ( Math.random() * (max - min + 1) + min)
}
window.addEventListener('load', iniciarJuego)