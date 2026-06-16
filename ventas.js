function registrarVenta(){

let venta={

producto:document.getElementById("producto").value,
cantidad:Number(document.getElementById("cantidad").value),
precio:Number(document.getElementById("precio").value),
cliente:document.getElementById("cliente").value,
telefono:document.getElementById("telefono").value,
vendedor:document.getElementById("vendedor").value,
pago:document.getElementById("pago").value,
fecha:new Date().toLocaleDateString()

};


CHELONSKYSELL_DATA.ventas.push(venta);


if(venta.pago==="Crédito"){

CHELONSKYSELL_DATA.deudas.push({

cliente:venta.cliente,
telefono:venta.telefono,
monto:venta.precio,
vendedor:venta.vendedor,
fecha:venta.fecha

});

}


guardarDatos();

generarTicket(venta);

alert("Venta guardada");

}