function verCaracteristicas() {
    let Moto = document.getElementById("queMoto").value;
    caracteristicasMotos = motos.filter((a) => a.nombre ==Moto); 
    let presupuesto = document.getElementById("valorCuota").value;
    

    let precio = caracteristicasMotos[0].precio;
    let modelo = caracteristicasMotos[0].modelo;
    let marca = caracteristicasMotos[0].marca;
    let cuotasMinimas = caracteristicasMotos[0].cuotasMinimas;
     
     
    console.log(precio);
    mostrarDatos(precio, marca, modelo, cuotasMinimas);

    calcularPago(presupuesto, precio, cuotasMinimas);

}

function mostrarDatos(precio, marca, modelo, cuotasMinimas){
    let campoPrecio = document.getElementById("Precio");
    let campoModelo = document.getElementById("Modelo");
    let campoMarca = document.getElementById("Marca");
    let campoCuotasMinimas = document.getElementById("cuotasMinimas");
    let campoValor = document.getElementById("valorCuotas");
    campoPrecio.innerText = "$" + precio;
    campoModelo.innerText = modelo;
    campoMarca.innerText =  marca;
    campoCuotasMinimas.innerText = cuotasMinimas
    campoValor.innerText = "$" +  (precio / cuotasMinimas).toFixed(2);
}

function calcularPago(presupuesto, precio, cuotasMinimas) {
    let valorMinimo = parseInt((precio / cuotasMinimas).toFixed(2) *100) / 100;
    let observaciones = document.getElementById("Salida");
    // let caracteristicasPlan = document.getElementById("caracteristicasPlan");

    if (presupuesto < valorMinimo) {
        observaciones.innerText = "Tu presupuesto no es viable, el valor minimo es de: " + valorMinimo;    }
    else {
        let cuotaNueva = parseInt(precio / presupuesto);
        let m = interesCom(presupuesto, cuotaNueva,precio);
        console.log(m);
        // caracteristicasPlan(m);
        observaciones.innerText = " pagarias tu moto en " + (m.length - 1) + " cuotas de: $" + presupuesto + " y una Ultima de: $" + m[m.length-1].valorTotal;
    }
}

function interesCom(presupuesto, cuotaNueva,precio){
    // calculando interes compuesto
    let interesCompuesto = [];
    let acumualadoC = 0;
    let interesC = 0;
    let caracteristicasPlan = document.getElementById("caracteristicasPlan");

    for(var i = 0; i<(cuotaNueva-1); i++) {
        acumualadoC =parseInt((acumualadoC + parseInt(presupuesto) + interesC).toFixed(2) * 100) / 100,
        interesC += parseInt((acumualadoC * 0.012).toFixed(2) * 100) / 100;
        let valorActual = parseInt((interesC + acumualadoC).toFixed(2) * 100) / 100;

        if(valorActual <= precio){
            interesCompuesto[i] = {
                mes: i + 1,
                acumuladocuota: acumualadoC,
                intereses: interesC, 
                valorTotal: valorActual,       
            }

            caracteristicasPlan.innerText += " Mes: "+ interesCompuesto[i].mes + " Capital: $"+ interesCompuesto[i].acumuladocuota + " interes Compuesto: $" + interesCompuesto[i].intereses + " ---- ";

         }
         else{
            let acumuladoTotal = ((interesCompuesto[(interesCompuesto.length - 1)].valorTotal));

             interesCompuesto.push({
                mes: i + 1,
                acumuladocuota: 1,
                intereses: 0, 
                valorTotal: parseInt((precio - acumuladoTotal).toFixed(2) *100 ) / 100,
             });

             i = cuotaNueva;
         }

         
    }
    return interesCompuesto;
}
