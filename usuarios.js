function crearUsuario(){

let usuario={

nombre:document.getElementById("nombre").value,

rol:document.getElementById("rol").value,

permisos:{
ventas:true,
inventario:false,
cobranza:false,
reportes:false
},

fecha:new Date().toLocaleDateString()

};


if(!CHELONSKYSELL_DATA.usuarios){
CHELONSKYSELL_DATA.usuarios=[];
}


CHELONSKYSELL_DATA.usuarios.push(usuario);

guardarDatos();

mostrarUsuarios();

}


function mostrarUsuarios(){

let lista=document.getElementById("lista");

lista.innerHTML="";


(CHELONSKYSELL_DATA.usuarios||[]).forEach(u=>{

lista.innerHTML += `

<div class="card">

<h3>${u.nombre}</h3>

<p>Rol: ${u.rol}</p>

<p>Ventas: ✅</p>

</div>

`;

});

}


mostrarUsuarios();
