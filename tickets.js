function generarTicket(venta){

let ticket=

`🧾 CHELONSKYSELL

Producto:
${venta.producto}

Cantidad:
${venta.cantidad}

Total:
$${venta.precio}

Atendió:
${venta.vendedor}

Fecha:
${venta.fecha}

Gracias por su compra`;

console.log(ticket);

window.open(
"https://wa.me/?text="+encodeURIComponent(ticket)
);

}