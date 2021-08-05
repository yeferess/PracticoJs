// helpers
function CalcularPromedio(array) {
  let sumaArray = array.reduce((acumulador, valor) => acumulador + valor,0)
  let promedio = sumaArray / array.length;
  return promedio;
}


let salariosCol = colombia.map((persona) => persona.salary).sort((a,b) => a-b);// sacamos un array de solo los salarios y de igual manera en la misma linea los ordeno de mayor a menos
console.log(salariosCol);


// calculadora de medianas 
function CalcularMediana(lista) {
       console.log(" datos de entrada: " + lista);
    
    let number1 = 0;
    let number2 = 0;
    let par = lista.length % 2;

    if(par ===0) {
        number1 = lista.length / 2;
        number2 = number1 - 1;
        let MedianaPromedio = CalcularPromedio([lista[number1], lista[number2]]);
        return MedianaPromedio

    }
    else {
        number1= Number(par) + 1;
        return lista[number1]; 
    }
}

// salarios top 10%

const spliceStart = salariosCol.length * 0.9;
const space = salariosCol.length - spliceStart;
const salariosTop10 = salariosCol.splice(spliceStart, space);

console.log("este es" + salariosTop10);

// medidas de las medianas
const MedianaGeneralCol = CalcularMediana(salariosCol);
const MedianaTopCol = CalcularMediana(salariosTop10);

console.log({
    MedianaGeneralCol,
    MedianaTopCol,    
}
);