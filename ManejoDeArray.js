//  let array = [1, 2, 3, 4, 4, 5];



function CalcularPromedio(array) {
    let sumaArray = array.reduce((acumulador, valor) => acumulador + valor,0)
    let promedio = sumaArray / array.length;
    return promedio;
}

function CalcularMediana(lista) {
    let ordenada = lista.sort((a, b) => a - b); // ordena el Array que entra a la función  
    let entera = ordenada.map((elemento)=> Number(elemento)); // combierte los valores a enteros
    console.log(" datos de entrada: " + entera);
    
    let number1 = 0;
    let number2 = 0;
    let par = entera.length % 2;

    if(par ===0) {
        number1 = entera.length / 2;
        number2 = number1 - 1;
        let MedianaPromedio = CalcularPromedio([entera[number1], entera[number2]]);
        console.log( entera[number1] + " " + entera[number2]+ "la mediana es: par " + MedianaPromedio);

    }
    else {
        number1= Number(par) + 1;
        console.log("la mediana es: impar " + entera[number1]);   
    }
}

