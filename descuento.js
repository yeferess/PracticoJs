// cupones
let cupones = ["desc10", "desc15", "desc30", "desc40"];

function verificarCupon(descuento){
    let cupon = 0;
    for(let i =0; i<cupones.length; i++){
            if(descuento === cupones[i]) {
                switch (descuento) {
                    case "desc10":
                            cupon = 10;
                        break;

                    case "desc15":
                            cupon = 15;
                        break;

                    case "desc15":
                            cupon = 15;
                        break;
                    
                    case "desc30":
                            cupon = 30;
                        break;
                
                    default:
                        cupon = 40;
                        break;
                }
            } 

        }
    return cupon;
}

function calculaDescuento() {
    let precio = document.getElementById("Original").value;

    let descuento = document.getElementById("descuento").value;


    let resultado = document.getElementById("resultado");

    let cupon = verificarCupon(descuento);
    
    let precioDescuento = precio - precio * cupon /100;

    if(cupon==0) {
        resultado.innerText = "Ese no es un cupon, el precio a pagar es: $" + precio;
    }
    else {
        resultado.innerText = "el Precio a pagar es: $" + precioDescuento;
    }

}