const prompt = require("prompt-sync")({ sigint: true});

//1

let ingresarFrase = prompt('ingrese una frase: ') 
    console.log(ingresarFrase)

//2 

let ingresarNombre = prompt('ingrese su nombre: ') 
    console.log(`hola ${ingresarNombre}!`)

//3
let numero1 = prompt('ingrese un numero: ')
let numero2 = prompt('ingrese otro numero: ')

let suma = parseInt(numero1) + parseInt(numero2)
console.log (suma)

// 4  

let ingresarEdad = prompt('ingrese anio de nacimiento: ')
let edad = 2021 - ingresarEdad

console.log(`Su edad es de ${edad}`)

//5

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

let numeroAleatorio = random(1,10)

let usuarioElige = prompt('Eliga un numero entre el 1 y el 10: ')

let juego = numeroAleatorio == usuarioElige? 'Felicitaciones, ese era' : 'Lo siento, intenta nuevamente'

console.log(juego)
console.log(`El numero en cuestion era ${numeroAleatorio}`)

//6

