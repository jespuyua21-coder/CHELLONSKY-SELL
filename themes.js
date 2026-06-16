const themeConfig = {

    mode: "system",

    colors: {
        primary: "#2563eb",
        background: "",
        card: ""
    },

    font: "system"

};


function applyTheme(){

    document.documentElement.style.setProperty(
        "--primary",
        themeConfig.colors.primary
    );


    document.documentElement.style.setProperty(
        "--font",
        themeConfig.font
    );

}



function changeColor(color){

    themeConfig.colors.primary = color;

    applyTheme();

}


function setMode(mode){

    themeConfig.mode = mode;

    document.body.dataset.theme = mode;

}


applyTheme();
