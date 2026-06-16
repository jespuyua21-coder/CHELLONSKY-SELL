function agregarProducto(){

let producto={

nombre:document.getElementById("producto").value,
stock:Number(document.getElementById("stock").value),
costo:Number(document.getElementById("costo").value),
fecha:new Date().toLocaleDateString()

};


CHELONSKYSELL_DATA.productos.push(producto);

guardarDatos();

mostrarInventario();

}



function mostrarInventario(){

let lista=document.getElementById("lista");

lista.innerHTML="";


CHELONSKYSELL_DATA.productos.forEach(p=>{


let alerta = p.stock <= 5 ? " ⚠️ Poco stock" : "";


lista.innerHTML += `

<div class="card">

<h3>${p.nombre}</h3>

<p>
Stock: ${p.stock}${alerta}
</p>

<p>
Costo: $${p.costo}
</p>


</div>

`;

});


}


mostrarInventario();
