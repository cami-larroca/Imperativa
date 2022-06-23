
// ejercicio uno

function doble(numero) {
    return numero * 2;
}
function multiplicacion(numero1, numero2) {
    return numero1 * numero2;
}
function name(numero1, numero2) {
    if (numero1 > 0 && numero2 > 0) {
        return numero1 / numero2;
    }
}

// ejercicio dos

let ciclista = {
    nombre: "Camila",
    apellido: "Larroca",
    edad: 29,
    tieneBici: true,
};

function objetoString(ciclista) {
    if (ciclista.edad >= 18 && ciclista.tieneBici == true) {
        return "puede competir"
    } else if (ciclista.tieneBici == true && ciclista.edad < 18) {
        return "podra competir pero con un adulto acompañante"
    } else if (ciclista.tieneBici == false) {
        return "no podra competir"
    }
}

objetoString(ciclista);
console.log(objetoString(ciclista));

// ejercicio tres

let competidores = [];
let competidor1 = {
    nombre: 'Juan',
    edad: 42,
    kilometrosRecorridos: 80
};

let competidor2 = {
    nombre: 'Sofia',
    edad: 22,
    kilometrosRecorridos: 90
};

let competidor3 = {
    nombre: 'Maria',
    edad: 45,
    kilometrosRecorridos: 70
};

competidores.push(competidor1, competidor2, competidor3);
console.log(competidores);

function competencia100Km (competidores){
    for (let i = 0; i < competidores.length; i++){
        competidores[i].kilometrosRecorridos = competidores[i].kilometrosRecorridos + 100;
    }
}
console.log(competidores)
competencia100Km(competidores)
console.log(competidores)