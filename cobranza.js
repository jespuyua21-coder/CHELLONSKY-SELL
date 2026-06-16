function mostrarDeudas(){

let lista=document.getElementById("lista");

lista.innerHTML="";


CHELONSKYSELL_DATA.deudas.forEach(d=>{


let mensaje = `Hola ${d.cliente}, te recordamos tu pendiente de $${d.monto}. Comunícate con tu vendedor ${d.vendedor}.`;


lista.innerHTML += `

<div class="card">

<h3>${d.cliente}</h3>

<p>
Debe: $${d.monto}
</p>

<p>
Fecha: ${d.fecha}
</p>

<p>
Responsable: ${d.vendedor}
</p>


<button onclick="enviar('${mensaje}')">
WhatsApp 📲
</button>


</div>

`;

});

}



function enviar(texto){

window.open(
"https://wa.me/?text="+encodeURIComponent(texto)
);

}



mostrarDeudas();
