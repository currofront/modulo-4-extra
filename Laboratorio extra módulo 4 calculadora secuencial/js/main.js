var num = () => parseInt(document.getElementById("num").value);
var resultadoParcial = () => {
    if(parseInt(document.getElementById("valor-parcial").innerHTML) == 0) {
        return parseInt(document.getElementById("valor-parcial").innerHTML);
    } else {return parseInt(document.getElementById("valor-parcial").innerHTML)}
};

// var resultadoParcial = () => {return parseInt(document.getElementById("valor-parcial").innerHTML)};


// Operaciones

var suma = () => resultadoParcial() + num();
var resta = () => resultadoParcial() - num();
var multiplicacion = () => num() * resultadoParcial();
var division = () => resultadoParcial() / num();

// Imprimir resultados en pantalla

var printParcialSuma = () => document.getElementById("valor-parcial").innerText = suma();
var printParcialResta = () => document.getElementById("valor-parcial").innerText = resta();
var printParcialMultiplicacion = () => document.getElementById("valor-parcial").innerText = multiplicacion();
var printParcialDivision = () => document.getElementById("valor-parcial").innerText = division();
var printResult = () => document.getElementById("result").innerText = resultadoParcial();

// Eventos

document.getElementById("suma").addEventListener("click", printParcialSuma);
document.getElementById("resta").addEventListener("click", printParcialResta);
document.getElementById("multiplicacion").addEventListener("click", printParcialMultiplicacion);
document.getElementById("division").addEventListener("click", printParcialDivision);
document.getElementById("igual").addEventListener("click", printResult);