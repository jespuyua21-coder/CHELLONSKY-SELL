function crearCliente(){

let cliente={

nombre:document.getElementById("nombre").value,
telefono:document.getElementById("telefono").value,
tema:document.getElementById("tema").value,
color:document.getElementById("color").value,
font:document.getElementById("font").value,
modulos:{
ventas:true,
inventario:true,
tickets:true,
cobranza:true,
cortes:true
}

};

CHELONSKYSELL_DATA.negocios.push(cliente);

guardarDatos();

mostrarClientes();

}


function mostrarClientes(){

let lista=document.getElementById("lista");

lista.innerHTML="";

CHELONSKYSELL_DATA.negocios.forEach(c=>{

lista.innerHTML += `

<div class="card">

<h3>${c.nombre}</h3>

<p>${c.telefono}</p>

<p>${c.tema} - ${c.font}</p>

</div>

`;

});

}


mostrarClientes();
