const CHELONSKYSELL_DATA = {
  negocios: [],
  usuarios: [],
  empleados: [],
  productos: [],
  ventas: [],
  clientes: [],
  deudas: [],
  cortes: {
    diarios: [],
    semanales: []
  },
  configuracion: {
    tema: "system",
    color: "#2563eb",
    tipografia: "Inter"
  }
};

function guardarDatos(){
  localStorage.setItem(
    "CHELONSKYSELL",
    JSON.stringify(CHELONSKYSELL_DATA)
  );
}

function cargarDatos(){
  const datos = localStorage.getItem("CHELONSKYSELL");
  if(datos){
    Object.assign(
      CHELONSKYSELL_DATA,
      JSON.parse(datos)
    );
  }
}

cargarDatos();
