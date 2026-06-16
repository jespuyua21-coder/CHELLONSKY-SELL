function cargarDashboard(){

let ventas=0;
let deudas=0;


(CHELONSKYSELL_DATA.ventas||[]).forEach(v=>{

ventas += Number(v.precio||0);

});


(CHELONSKYSELL_DATA.deudas||[]).forEach(d=>{

deudas += Number(d.monto||0);

});


document.getElementById("ventas").innerText="$"+ventas;

document.getElementById("deudas").innerText="$"+deudas;

document.getElementById("productos").innerText=
(CHELONSKYSELL_DATA.productos||[]).length;


document.getElementById("empleados").innerText=
(CHELONSKYSELL_DATA.empleados||[]).length;


}

cargarDashboard();
