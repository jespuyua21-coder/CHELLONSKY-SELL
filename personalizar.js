function guardarConfig(){

CHELONSKYSELL_DATA.configuracion={

negocio:document.getElementById("negocio").value,

color:document.getElementById("color").value,

tipografia:document.getElementById("fuente").value,

tema:document.getElementById("tema").value

};

guardarDatos();

actualizarPreview();

alert("Diseño guardado");

}


function actualizarPreview(){

let c=CHELONSKYSELL_DATA.configuracion;

let p=document.getElementById("preview");

p.innerText=c.negocio || "Mi negocio";

p.style.color=c.color;

p.style.fontFamily=c.tipografia;

}


actualizarPreview();
