//   let array = [1, 2, 3, 4, 4, 5,6,2,2,2,3,3];

function CalcularRango(array) {
  const ListCount = {};

  array.map( // agrega al objeto ListCount, los numeros del array, sin repetirse y sus respecticas cantidades
      function(elemento){
        if(ListCount[elemento]) {
            ListCount[elemento] += 1;
        }
        else {
            ListCount[elemento] = 1;
        }
        }
  );



  let listArray = Object.entries(ListCount).sort((a ,b) => a[0] - b[0]);//transforma  en Array este objeto con objectr.entries y con sort ordeno con los primeros valores de menor a mayo

//   let entera = listArray.map((elemento)=> Number(elemento[0])); // convierte los valores a enteros
        
    // let entera = Object.values(listArray); // no funciono aun
    let entera = listArray.map((elemento)=> 
    {
     let intValue1 = parseInt(elemento[0]);
     let intValue2 = elemento[1];
     return ([intValue1, intValue2]);
    }
    );

    console.log(listArray);
        console.log(entera);
        let Rango = entera[(entera.length-1)] - entera[0]; 
     console.log("el rango de dispersión es: " + Rango);
}
