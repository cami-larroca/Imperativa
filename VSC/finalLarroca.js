// Crear una función que reciba por parámetro un arreglo y lo manipule agregando en cada objeto una propiedad 
// nueva llamada total, y su valor sea el total de lo que recaudaría si se vendieran todo el stock de cada producto. 
// Por ejemplo, los primeros 2 objetos quedarían así:


const calcularTotal = (array) => {

    for (let i = 0; i < array.length; i++) {

        array[i].total = array[i].precio * array[i].cantidad;

    }
}

calcularTotal(ecommerce)
console.log(ecommerce)



// 2. Desarrollar una función que reciba por parámetro el array de países y lo ordene de forma 
// descendente según su población

let paises = [
    {
        nombre: "Argentina",
        continente: "Sudamerica",
        poblacion: 40000000
    },
    {
        nombre: "Colombia",
        continente: "Sudamerica",
        poblacion: 50372000
    },

    {
        nombre: "Brasil",
        continente: "Sudamerica",
        poblacion: 300000000
    },
    {
        nombre: "Venezuela",
        continente: "Sudamerica",
        poblacion: 25000000
    },
    {
        nombre: "Chile",
        continente: "Sudamerica",
        poblacion: 10000000
    }

];

const ordenarPobl = arr => {
    let aux;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j].poblacion < arr[j + 1].poblacion) {
                aux = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = aux
            }
        }
    }
}
ordenarPobl(paises)
//console.log(paises)


// 3. Crear una matriz de 9 x 10


let matrix = [
    [11, 25, 90, 16, 28, 36, 11, 89, 99, 34],
    [10, 18, 19, 13, 89, 17, 28, 15, 18, 76],
    [17, 13, 16, 19, 17, 45, 25, 17, 33, 91],
    [80, 19, 14, 21, 19, 12, 95, 12, 24, 26],
    [12, 13, 16, 77, 22, 34, 32, 22, 54, 65],
    [98, 76, 77, 89, 82, 67, 45, 51, 33, 12],
    [88, 27, 51, 43, 90, 64, 33, 15, 16, 18],
    [66, 88, 77, 99, 55, 22, 44, 55, 69, 90],
    [10, 42, 34, 58, 67, 98, 76, 23, 42, 21]

];

//Crear una función, que reciba a la matriz por parámetro y que sume todos 
//los múltiplos de 3 de la matriz.Retornar la suma.

const sumarMultiplos = (mat) => {

    let acc = 0;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] % 3 === 0) {

                acc += mat[i][j]

            }
        }

    }
    return acc

}


// Crear una función, que reciba a la matriz por parámetro y que modifique 
// todos los valores de la columna 5 por un string que diga: ‘esta es la columna 5’. 
// (Recordar que la columna 1 se encuentra en la posicion 0, la 2 en la 1, etc..). 
// Imprimir en consola la matriz antes y después de la ejecución de la función. 

const modificarColum = mat => {

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            mat[i][4] = "esta es la columna 5"
        }
    }
}

console.log (modificarColum(mat))
