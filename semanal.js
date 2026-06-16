function generarSemana(){

let total=0;
let deudores=[];


CHELONSKYSELL_DATA.ventas.forEach(v=>{

total += Number(v.precio || 0);

});


CHELONSKYSELL_DATA.deudas.forEach(d=>{

deudores.push(d);

});


let semana={

fecha:new Date().toLocaleDateString(),
ventas:total,
pendientes:deudores.length,
deudores:deudores

};


CHELONSKYSELL_DATA.cortes.semanales.push(semana);

guardarDatos();


document.getElementById("resumen").innerHTML=`

<div class="card">

<h2>Reporte semanal</h2>

<p>Ventas: $${semana.ventas}</p>

<p>Deudores: ${semana.pendientes}</p>

<p>Lista preparada para cobranza 📲</p>

</div>

`;

}


