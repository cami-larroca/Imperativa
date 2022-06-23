function doble (numero) {
    return numero * 2;    
 }
 function multiplicacion (numero1 , numero2) {
     return numero1 * numero2;
 }
 function name(numero1, numero2) {
     if (numero1 > 0 && numero2 > 0){
         return numero1 / numero2;
     }
 }
 
 let competidores = [];
 let competidor1 = {
     nombre : 'Juan',
     edad : 42,
     kilometrosRecorridos : 80,
 }
 let competidor2 = {
     nombre: 'Sofia',
     edad: 22,
     kilometrosRecorridos: 90,
 }
 let competidor3 = {
     nombre: 'Maria',
     edad: 45,
     kilometrosRecorridos: 70,
 }
 competidores.push (competidor1,competidor2,competidor3);
 console.log(competidores);
 
 function competencia100Km (competidores) {
     for (let i = 0; i < competidores.length; i++) {
         competidores[i].kilometrosRecorridos = competidores[i].kilometrosRecorridos += 100;
     }
 }
 console.log(competidores);
 competencia100Km(); 
 console.log(competencia100Km(competidores));
 
 function name2(objeto) {
     if (objeto.edad >= 18 && objeto.tieneBici == true) {
         return "puede competir"
     }else if (objeto.tieneBici == true && objeto.edad < 18) {
         return "no podra competir"
     } 
 }
 //console.log();