document.addEventListener("DOMContentLoaded",()=>{
const btn=document.getElementById("themeBtn");
if(btn){btn.onclick=()=>{
document.documentElement.style.colorScheme =
document.documentElement.style.colorScheme==="dark" ? "light":"dark";
}}
let h=new Date().getHours();
let t=h<12?"Buenos días 👋":h<19?"Buenas tardes 👋":"Buenas noches 👋";
let g=document.getElementById("greeting");
if(g)g.textContent=t;
});
function openAdmin(){window.location.href="./admin.html";}