const tipoDeSuscripcion = "fre";

if(tipoDeSuscripcion=="free") {
    console.log("solo puedes tomar los cursos gratis");
}

if(tipoDeSuscripcion=="Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");  
}  

if(tipoDeSuscripcion=="expert") {           
console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}

if (tipoDeSuscripcion=="expert+"){
    console.log("Tu y alguien mas pueden tomar todos los cursos de Platzi durante un año");  
} 

if(tipoDeSuscripcion != "free" && tipoDeSuscripcion!= "basic" && tipoDeSuscripcion!="expert" && tipoDeSuscripcion!="expert+") {
console.log("Aun no tienes una suscribción en platzi, adquierela ahora!");
}

let i= 0;
while (i < 5) {
    console.log("el valor de i es: " + i);
    i += 1;
}

let v = 10;

while ( v > 2) {
     console.log("el valor de v es: " +v);
     v -=2;
}

// let c = 1;

// while(c ==1) {
//     let a = prompt("cuanto es 2 + 2" );
//     if(a==4) {
//         alert("eso es correcto, Felicidades!!");
//         c = 0;
//     }
//     else {
//         alert("Incorrecto vuelve  intentarlo!");
//     }
// }

// let motos = ["velocidad", "enduro", "motocrcoss", "Trial"];

// function mifun(array){
//     let f= array.length;
//     let l=0;
//     while( l<f) {
//     console.log("el primer elemento del array es: " + array[l]);
//     l += 1;
//     }
// }

// // mifun(motos);

// const object = { a: 1, b: 2, c: 3 };

// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }

function aver(dato){
    return dato * 4;
}