
"use strict"

let mando = document.getElementById("mando");
let container = document.getElementById("container");
let toggle = document.getElementById("slider");
let gitSupp = document.getElementById("gitSupp");
let isActive = false;

function activateMando() {
    if(!isActive){
        mando.style.visibility = 'visible';
        gitSupp.style.visibility = 'visible';
        container.style.background = '#121011';
        toggle.style.backgroundImage = "linear-gradient(#000000,#5a5252,#585552, #6d6565, #000000)";
    }
    else if(isActive){
        mando.style.visibility = 'hidden';
        gitSupp.style.visibility = 'hidden';
        container.style.background = '#5ec4e0';
        toggle.style.backgroundImage = "linear-gradient( #aefaa7, #00ff22, #1eff00, #33ff00, #aefda7 )";
    }
    isActive = !isActive;  
}