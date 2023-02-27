let medioPago = prompt("ingrese el medio de pago");

alert("ingrese el precio del producto");
let precio = parseFloat(prompt());

alert("ingrese la cantidad de coutas");
let cuota = parseInt(prompt());

let aumento = precio*1.25;

let precioCuota = aumento/cuota;   

    if(medioPago=="credito"){
        console.log("el valor que debera pagar por las cuotas es:",precioCuota)
    }

    else{
        console.log("el precio que debera pagar es:",precio)
    }
