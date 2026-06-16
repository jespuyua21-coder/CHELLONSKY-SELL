document.addEventListener("DOMContentLoaded",()=>{


const btn = document.getElementById("themeBtn");


btn.addEventListener("click",()=>{


    if(document.body.dataset.theme === "dark"){

        setMode("light");
        btn.textContent="☀️";

    }else{

        setMode("dark");
        btn.textContent="🌙";

    }


});



const hour = new Date().getHours();

let text="Bienvenido 👋";


if(hour < 12){

text="Buenos días 👋";

}else if(hour < 19){

text="Buenas tardes 👋";

}else{

text="Buenas noches 👋";

}


document.getElementById("greeting").textContent=text;



});
