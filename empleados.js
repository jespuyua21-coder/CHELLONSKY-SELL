function guardarEmpleado(){

let empleado={

nombre:document.getElementById("nombre").value,
rol:document.getElementById("rol").value,
fecha:new Date().toLocaleDateString()

};


CHELONSKYSELL_DATA.empleados.push(empleado);

guardarDatos();

mostrarEmpleados();

}


function mostrarEmpleados(){

let lista=document.getElementById("lista");

lista.innerHTML="";


CHELONSKYSELL_DATA.empleados.forEach(e=>{

lista.innerHTML += `

<div class="card">

<h3>${e.nombre}</h3>

<p>${e.rol}</p>

<p>${e.fecha}</p>

</div>

`;

});

}


mostrarEmpleados();
