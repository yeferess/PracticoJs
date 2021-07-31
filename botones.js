function verificarIsosceles() {
    let lado = document.getElementById("ValorLado").value;
    let lado2 = document.getElementById("ValorLado2").value;
    let base = document.getElementById("base").value;
    if(lado == lado2) {
        let altura = Math.sqrt(lado * lado - Math.pow(base/2, 2));
        alert("la altura del triangulo es: " + altura)
    }
    else{
        alert("no es un triangulo isoceles");
    }
}




// function calcularPerimetro() {
//     let lado = document.getElementById("ValorLado");
//     let lado = document.getElementById("ValorLado2");
//     let lado = document.getElementById("ValorLado3");
//     let valor = lado.value;
//     let perimetro = valor*4;
//     alert(perimetro);
// }

// function calcularArea() {
//     let lado = document.getElementById("ValorLado");
//     let lado = document.getElementById("ValorLado2");
//     let lado = document.getElementById("ValorLado3");
//     let valor = lado.value;
//     let area = valor * valor;
//     alert("el area es: " + area +"cm^2");
// }