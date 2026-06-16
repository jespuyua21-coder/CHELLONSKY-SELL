function crearTicket(){

let negocio =
document.getElementById("negocio").value;

let cliente =
document.getElementById("cliente").value;

let producto =
document.getElementById("producto").value;

let total =
document.getElementById("total").value;


let mensaje = `🧾 ${negocio}

Cliente:
${cliente}

Producto:
${producto}

Total:
$${total}

Gracias por su compra 🙌`;


document.getElementById("resultado").innerHTML = `

<div class="card">

<pre>${mensaje}</pre>

<button onclick="enviarTicket('${mensaje}')">
Enviar WhatsApp 📲
</button>

</div>

`;

}


function enviarTicket(texto){

window.open(
"https://wa.me/?text="+encodeURIComponent(texto)
);

}
