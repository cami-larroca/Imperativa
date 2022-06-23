const prompt = require("prompt-sync") 
({ sigint: true})

let pulgada = () => {
    let numero = prompt("que numero quieres convertir?");
    return `${numero * 2.54} centimetros` 
}

function url () {
    let palabra = prompt("que quieres convertir?");
    return `http://www.${palabra}.com` 
}

function admiracion () {
    let frase = prompt("que quieres admirar?");
    return `¡${frase}!` 
}

function añosCaninos () {
    let año = prompt("Cuantos años?");
    return `¡Tu perro tiene ${año * 7} años!` 
}

function sueldo () {
    let salario = prompt("Cuantos cobrás al mes?");
    return `${salario / 40}` 
}

function calculadorIMC () {
    let altura = prompt("Cuanto medis?");
    let peso = prompt("Cuanto pesas?");
    let alturaCuadrada = altura * altura
    return `Tu IMC es de ${peso / alturaCuadrada}`;
}

function minusculaAMayuscula () {
    let frase = prompt("Cuanto queres decir?").toUpperCase();
    return `${frase}`;
}

function tipoDeDatos (dato) {
    return `${dato}`;
}

let resultadoPulgada = pulgada()
let  resultadoUrl = url() 
let  fraseFinal = admiracion() 
let  resultadoAños = añosCaninos() 
let  resultadoSueldo = sueldo() 
let  resultadoImc = calculadorIMC() 
let  resultadomAM = minusculaAMayuscula()

// console.log(resultadoPulgada);
// console.log(resultadoUrl);
// console.log(fraseFinal);
// console.log(resultadoAños);
// console.log(resultadoSueldo);
// console.log(resultadoSueldo);
// console.log(resultadoImc);
// console.log(resultadomAM);
console.log(typeof tipoDeDatos("Hola"));