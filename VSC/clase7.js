let edad = 22;

if (edad <= 0) {
    console.log("Error, edad inválida. Por favor ingrese un número válido.");
} else if (edad >= 21 && edad % 2 ) {
    console.log("Felicitaciones sos mayor de edad. ¿Sabias que tu edad es impar?");
} else if (edad >= 21) {
    console.log("Felicitaciones sos mayor de edad.");
}

// Ejercicio 2

let pagar 

let totalAPagar =  (vehiculo, litrosConsumidos) => {
    if (litrosConsumidos > 0 && litrosConsumidos <=25 ) {
        pagar = 50
    }else if(litrosConsumidos > 25){
        pagar = 25
    }

    if(vehiculo == "coche") {
        return pagar = pagar + litrosConsumidos * 86
    } else if (vehiculo == "moto"){
        return pagar = pagar + litrosConsumidos * 70
    } else if (vehiculo == "autobús"){
        return pagar = pagar + litrosConsumidos * 55
    }

}

console.log(totalAPagar("moto", 26));

// Ejercicio 3

let sandwichTotal = (base, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) => {
 let sandwich
    if (base == "pollo") {
        sandwich = 150
    } else if (base == "carne") {
        sandwich = 200
    }else sandwich = 100

    if (pan == "blanco") {
        sandwich = sandwich + 50
    } else if (pan == "negro") {
        sandwich = sandwich + 60
    }else sandwich = sandwich + 75

    if (queso) sandwich = sandwich + 20

    if (tomate) sandwich = sandwich + 15

    if (lechuga) sandwich = sandwich + 10

    if (cebolla) sandwich = sandwich + 15

    if (mayonesa) sandwich = sandwich + 5

    if (mostaza) sandwich = sandwich + 5

    return sandwich
}

console.log(sandwichTotal("veggie", "negro", true, true, true, true, true, true));
