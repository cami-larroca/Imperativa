const edades = [11, 12, 15, 18, 1, 22, 10, 33, 18, 5];

// Obtener en un nuevo array las edades menores a 18.

// CREAR UNA FUNCION QUE RECIBA UN ARRAY
// CREAR UN ARREGLO VACIO
// RECORRER AL ARREGLO QUE RECIBI
// COMPARAR CADA ELEMENTO CON EL NUMERO 18
// SI ES MENOR LO PUSHEO A MI ARREGLO NUEVO
// POR ULTIMO RETORNAR EL NUEVO ARREGLO 


let creadorDeArray = ( arr )=>{
  
  let arrayMenoresDe18 = []

  for(let i = 0; i < arr.length ; i++){

    if( arr[i] == 18 ){
      arrayMenoresDe18.push( arr[i] )
    }
  }
  return arrayMenoresDe18
}

let x = creadorDeArray(edades)
console.log( x )





// calcular el total de la suma de todos los elementos del arreglo
// const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

let sumarElementos = ( arr )=>{

  let acc = 0

  for (let i = 0; i < arr.length; i++) {
   
    acc += arr[i]
    
  }

  return acc

}

console.log(sumarElementos(edades))


// const edades = [11, 12, 15, 18, 1, 22, 10, 33, 18, 5];
// OBTENER EL MENOR

let extraerElMenor = ( arr )=>{

  let menor = arr[0] // 11 // 10 // 5

  for (let i = 1; i < arr.length; i++) {
   
    if( arr[i] < menor){
      menor = arr[i]
    }
    
  }
  return menor

}
console.log(extraerElMenor(edades))

