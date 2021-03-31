
"use strict"

let container = document.getElementById("container");
let flask1 = document.getElementById("flask1");
let flask2 = document.getElementById("flask2");
let flask3 = document.getElementById("flask3");
let flask4 = document.getElementById("flask4");
let flask5 = document.getElementById("flask5");
let color1= getRandomInt(5,1000);
let color2= getRandomInt(5,1000);
let color3= getRandomInt(5,1000);
let color4= getRandomInt(5,1000);
let color5= getRandomInt(5,1000);
let chemistrynameLength = 5;
let chemistrynames = [
    'гидро','хлор','ин','ан','дал','то','нид','рин','рол','ка',
    'лин','кло','гекса','нол','бен','зол','окс','гли','ин','лит',
    'кси','эти','лен','поли','ти','кол','трит','пен','бу','та',
    'про','ар','зил','ард','зил','ал','па','аква','ви','зол',
    'гид','де','аце','тон','ол','изо','бит','дио','ксид','лиз',
    'ват','троп','бон','тер','эпо','се','ка','рид','кар','аз'
];
let substanceName1 = document.getElementById("name1");
let substanceName2 = document.getElementById("name2");
let substanceName3 = document.getElementById("name3");
let substanceName4 = document.getElementById("name4");
let substanceName5 = document.getElementById("name5");
let name1 = "";
let name2 = "";
let name3 = "";
let name4 = "";
let name5 = "";

function getRandomSubstancesNames() {
    for(let i = 0; i < chemistrynameLength; i++) {
        let randomName1 = Math.floor(Math.random() * chemistrynames.length);
        let randomName2 = Math.floor(Math.random() * chemistrynames.length);
        let randomName3 = Math.floor(Math.random() * chemistrynames.length);
        let randomName4 = Math.floor(Math.random() * chemistrynames.length);
        let randomName5 = Math.floor(Math.random() * chemistrynames.length);
        name1 += chemistrynames[randomName1];
        name2 += chemistrynames[randomName2];
        name3 += chemistrynames[randomName3];
        name4 += chemistrynames[randomName4];
        name5 += chemistrynames[randomName5];
        substanceName1.innerHTML = name1;
        substanceName2.innerHTML = name2;
        substanceName3.innerHTML = name3;
        substanceName4.innerHTML = name4;
        substanceName5.innerHTML = name5;
    }
}

function renameRandomSubstancesNames() {
    substanceName1.innerHTML = "";
    substanceName2.innerHTML = "";
    substanceName3.innerHTML = "";
    substanceName4.innerHTML = "";
    substanceName5.innerHTML = "";
    name1 = "";
    name2 = "";
    name3 = "";
    name4 = "";
    name5 = "";
    for(let i = 0; i < chemistrynameLength; i++) {
        let randomName1 = Math.floor(Math.random() * chemistrynames.length);
        let randomName2 = Math.floor(Math.random() * chemistrynames.length);
        let randomName3 = Math.floor(Math.random() * chemistrynames.length);
        let randomName4 = Math.floor(Math.random() * chemistrynames.length);
        let randomName5 = Math.floor(Math.random() * chemistrynames.length);
        name1 += chemistrynames[randomName1];
        name2 += chemistrynames[randomName2];
        name3 += chemistrynames[randomName3];
        name4 += chemistrynames[randomName4];
        name5 += chemistrynames[randomName5];
        substanceName1.innerHTML = name1;
        substanceName2.innerHTML = name2;
        substanceName3.innerHTML = name3;
        substanceName4.innerHTML = name4;
        substanceName5.innerHTML = name5;
    }
}

substanceName1.addEventListener('click', function() {
    substanceName1.innerHTML = "";
    name1 = "";
    for(let i = 0; i < chemistrynameLength; i++) {
        let randomName1 = Math.floor(Math.random() * chemistrynames.length);
        name1 += chemistrynames[randomName1];
        substanceName1.innerHTML = name1;
    }
})

substanceName2.addEventListener('click', function() {
    substanceName2.innerHTML = "";
    name2 = "";
    for(let i = 0; i < chemistrynameLength; i++) {
        let randomName2 = Math.floor(Math.random() * chemistrynames.length);
        name2 += chemistrynames[randomName2];
        substanceName2.innerHTML = name2;
    }
})

substanceName3.addEventListener('click', function() {
    substanceName3.innerHTML = "";
    name3 = "";
    for(let i = 0; i < chemistrynameLength; i++) {
        let randomName3 = Math.floor(Math.random() * chemistrynames.length);
        name3 += chemistrynames[randomName3];
        substanceName3.innerHTML = name3;
    }
})

substanceName4.addEventListener('click', function() {
    substanceName4.innerHTML = "";
    name4 = "";
    for(let i = 0; i < chemistrynameLength; i++) {
        let randomName4 = Math.floor(Math.random() * chemistrynames.length);
        name4 += chemistrynames[randomName4];
        substanceName4.innerHTML = name4;
    }
})

substanceName5.addEventListener('click', function() {
    substanceName5.innerHTML = "";
    name5 = "";
    for(let i = 0; i < chemistrynameLength; i++) {
        let randomName5 = Math.floor(Math.random() * chemistrynames.length);
        name5 += chemistrynames[randomName5];
        substanceName5.innerHTML = name5;
    }
})

function autoColorFlasks() {
    flask1.style.filter = 'hue-rotate(' + color1 + 'deg)';
    flask2.style.filter = 'hue-rotate(' + color2 + 'deg)';
    flask3.style.filter = 'hue-rotate(' + color3 + 'deg)';
    flask4.style.filter = 'hue-rotate(' + color4 + 'deg)';
    flask5.style.filter = 'hue-rotate(' + color5 + 'deg)';
}

flask1.addEventListener('click', function() {
    color1 = getRandomInt(0,1000);
    flask1.style.filter = 'hue-rotate(' + color1 + 'deg)';
    document.getElementById('audio').play();
    if(matchMedia("screen and (min-width: 300px) and (max-width: 800px)")) {
        document.getElementById('audio').pause();
    }
})

flask1.addEventListener('mouseout', function() {
    document.getElementById('audio').pause();
})

flask2.addEventListener('click', function() {
    color2 = getRandomInt(0,1000);
    flask2.style.filter = 'hue-rotate(' + color2 + 'deg)';
    document.getElementById('audio').play();
    if(matchMedia("screen and (min-width: 300px) and (max-width: 800px)")) {
        document.getElementById('audio').pause();
    }
})

flask2.addEventListener('mouseout', function() {
    document.getElementById('audio').pause();
})

flask3.addEventListener('click', function() {
    color3 = getRandomInt(0,1000);
    flask3.style.filter = 'hue-rotate(' + color3 + 'deg)';
    document.getElementById('audio').play();
    if(matchMedia("screen and (min-width: 300px) and (max-width: 800px)")) {
        document.getElementById('audio').pause();
    }
})

flask3.addEventListener('mouseout', function() {
    document.getElementById('audio').pause();
})

flask4.addEventListener('click', function() {
    color4 = getRandomInt(0,1000);
    flask4.style.filter = 'hue-rotate(' + color4 + 'deg)';
    document.getElementById('audio').play();
    if(matchMedia("screen and (min-width: 300px) and (max-width: 800px)")) {
        document.getElementById('audio').pause();
    }
})

flask4.addEventListener('mouseout', function() {
    document.getElementById('audio').pause();
})

flask5.addEventListener('click', function() {
    color5 = getRandomInt(0,1000);
    flask5.style.filter = 'hue-rotate(' + color5 + 'deg)';
    document.getElementById('audio').play();
    if(matchMedia("screen and (min-width: 300px) and (max-width: 800px)")) {
        document.getElementById('audio').pause();
    }
})

flask5.addEventListener('mouseout', function() {
    document.getElementById('audio').pause();
})

function repaintAllFlasks() {
    color1 = getRandomInt(5,1000);
    color2 = getRandomInt(5,1000);
    color3 = getRandomInt(5,1000);
    color4 = getRandomInt(5,1000);
    color5 = getRandomInt(5,1000);
    flask1.style.filter = 'hue-rotate(' + color1  + 'deg)';
    flask2.style.filter = 'hue-rotate(' + color2 + 'deg)';
    flask3.style.filter = 'hue-rotate(' + color3  + 'deg)';
    flask4.style.filter = 'hue-rotate(' + color4  + 'deg)';
    flask5.style.filter = 'hue-rotate(' + color5 + 'deg)';
}

function ifEqualyColorFlasks() {
    if(flask1.style.filter == flask2.style.filter || flask1.style.filter == flask3.style.filter || flask1.style.filter == flask4.style.filter
    || flask1.style.filter == flask5.style.filter || flask2.style.filter == flask1.style.filter || flask2.style.filter == flask3.style.filter ||
    flask2.style.filter == flask4.style.filter || flask2.style.filter == flask5.style.filter || flask3.style.filter == flask1.style.filter ||
    flask3.style.filter == flask2.style.filter || flask3.style.filter == flask4.style.filter || flask3.style.filter == flask5.style.filter ||
    flask4.style.filter == flask1.style.filter || flask4.style.filter == flask2.style.filter || flask4.style.filter == flask3.style.filter ||
    flask4.style.filter == flask5.style.filter || flask5.style.filter == flask1.style.filter || flask5.style.filter == flask2.style.filter ||
    flask5.style.filter == flask3.style.filter || flask5.style.filter == flask4.style.filter) {
        color1 = getRandomInt(5,1000);
        color2 = getRandomInt(5,1000);
        color3 = getRandomInt(5,1000);
        color4 = getRandomInt(5,1000);
        color5 = getRandomInt(5,1000);
        flask1.style.filter = 'hue-rotate(' + color1  + 'deg)';
        flask2.style.filter = 'hue-rotate(' + color2 + 'deg)';
        flask3.style.filter = 'hue-rotate(' + color3  + 'deg)';
        flask4.style.filter = 'hue-rotate(' + color4  + 'deg)';
        flask5.style.filter = 'hue-rotate(' + color5 + 'deg)';
    }
}

function ifEqualySubstancesNames() {
    if(substanceName1.innerHTML == substanceName2 || substanceName1.innerHTML == substanceName3 || substanceName1.innerHTML == substanceName4 
    || substanceName1.innerHTML == substanceName5 ||substanceName2.innerHTML == substanceName1 || substanceName2.innerHTML == substanceName3 
    || substanceName2.innerHTML == substanceName4 || substanceName2.innerHTML == substanceName5 || substanceName3.innerHTML == substanceName1
    || substanceName3.innerHTML == substanceName2 || substanceName3.innerHTML == substanceName4 || substanceName3.innerHTML == substanceName5
    || substanceName4.innerHTML == substanceName1 || substanceName4.innerHTML == substanceName2 || substanceName4.innerHTML == substanceName3
    || substanceName4.innerHTML == substanceName5 || substanceName5.innerHTML == substanceName1 || substanceName5.innerHTML == substanceName2
    || substanceName5.innerHTML == substanceName3 || substanceName5.innerHTML == substanceName4){
        for(let i = 0; i < chemistrynameLength; i++) {
            let randomName1 = Math.floor(Math.random() * chemistrynames.length);
            let randomName2 = Math.floor(Math.random() * chemistrynames.length);
            let randomName3 = Math.floor(Math.random() * chemistrynames.length);
            let randomName4 = Math.floor(Math.random() * chemistrynames.length);
            let randomName5 = Math.floor(Math.random() * chemistrynames.length);
            name1 += chemistrynames[randomName1];
            name2 += chemistrynames[randomName2];
            name3 += chemistrynames[randomName3];
            name4 += chemistrynames[randomName4];
            name5 += chemistrynames[randomName5];
            substanceName1.innerHTML = name1;
            substanceName2.innerHTML = name2;
            substanceName3.innerHTML = name3;
            substanceName4.innerHTML = name4;
            substanceName5.innerHTML = name5;
        }
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

autoColorFlasks();
getRandomSubstancesNames();