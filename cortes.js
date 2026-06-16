function generarCorte(){

let total=0;
let pendientes=0;
let tickets=CHELONSKYSELL_DATA.ventas.length;


CHELONSKYSELL_DATA.ventas.forEach(v=>{

total += Number(v.precio || 0);

});


CHELONSKYSELL_DATA.deudas.forEach(d=>{

pendientes += Number(d.monto || 0);

});


let corte={

fecha:new Date().toLocaleDateString(),
ventas:total,
pendiente:pendientes,
tickets:tickets

};


CHELONSKYSELL_DATA.cortes.diarios.push(corte);

guardarDatos();

mostrarCorte(corte);

}



function mostrarCorte(c){

document.getElementById("reporte").innerHTML=`

<div class="card">

<h2>Corte 📋</h2>

<p>Fecha: ${c.fecha}</p>

<p>Ventas: $${c.ventas}</p>

<p>Pendiente: $${c.pendiente}</p>

<p>Tickets: ${c.tickets}</p>

</div>

`;

}


