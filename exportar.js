function exportar(){

let datos = JSON.stringify(
CHELONSKYSELL_DATA,
null,
2
);

let blob = new Blob(
[datos],
{type:"application/json"}
);

let url = URL.createObjectURL(blob);

let a=document.createElement("a");

a.href=url;

a.download="CHELONSKYSELL_respaldo.json";

a.click();

URL.revokeObjectURL(url);

}