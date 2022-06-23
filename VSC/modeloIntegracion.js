let misMascotas = []
let reproducirSonido = function() {
    return this.sonido + ' ' + this.sonido
}
let mascota1 = {
    edad: 3,
    nombre: 'chucky',
    raza: 'pastor aleman',
    sonido: 'guau',
    decirSonido: reproducirSonido,
}

let mascota2 = {
    edad: 7,
    nombre: 'Tom',
    raza: 'persa',
    sonido: 'miau',
    decirSonido: reproducirSonido,
}

let mascota3 = {
    edad: 12,
    nombre: 'lucy',
    raza: 'angola',
    sonido: 'ruido conejo',
    decirSonido: reproducirSonido,
}
// console.log(mascota2.decirSonido());
misMascotas.push(mascota1, mascota2, mascota3)

// console.log(misMascotas);

// console.log(misMascotas[2].decirSonido());

const aumentarEdad = (arr)=>{
    for(let i = 0; i < arr.length; i++ ){
        arr[i].edad += 1
    }
}
// aumentarEdad(misMascotas)
// 
const aumentarEdad2 = (arr)=>{
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].edad < 6){
            arr[i].edad += 1
        }else if(arr[i].edad >= 6 && arr[i].edad <= 10){
            arr[i].edad += 2
        }else{
            arr[i].edad = arr[i].edad + (arr[i].edad / 2)
        }
    }
}

// aumentarEdad2(misMascotas)
// console.log(misMascotas);

const generarId = (arr)=>{
    for(let i = 0; i < arr.length; i++){
        arr[i].id = i + 1
    }
}
generarId(misMascotas)
console.log(misMascotas);




