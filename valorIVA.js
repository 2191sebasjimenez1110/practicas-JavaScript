const IVA = 0.19;

alert ("ingrese el precio del producto");
let producto = parseFloat(prompt());

let precioIVA= producto*IVA

let precioFinal = producto+precioIVA 

console.log("el precio de produco con el incremento del IVA es:",precioFinal)
