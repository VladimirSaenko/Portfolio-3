
"use strict";

let blocksbox = document.getElementById("blocks-box");
let colorlist = document.getElementById("colorlist");

for(let i = 0; i < 53; i++) {
    let section = document.createElement('section');
    for(let j = 0; j < 7; j++) {
        let div = document.createElement('div');
        div.classList.add('color-level0');
        section.appendChild(div);
        div.addEventListener('click', (e) => {
            const target = e.target;
            if (target.classList.contains('color-level0')) {
                div.classList.add('color-level1');
                div.classList.remove('color-level0');
            }
            else if(target.classList.contains('color-level1')) {
                div.classList.add('color-level2');
                div.classList.remove('color-level1'); 
            }
            else if(target.classList.contains('color-level2')) {
                div.classList.add('color-level3');
                div.classList.remove('color-level2'); 
            }
            else if(target.classList.contains('color-level3')) {
                div.classList.add('color-level4');
                div.classList.remove('color-level3');
            }
            else if(target.classList.contains('color-level4')) {
                div.classList.add('color-level0');
                div.classList.remove('color-level4');
            }
        })
    }
    blocksbox.appendChild(section);
}

colorlist.addEventListener('input', () => {
    switch (colorlist.value) {
        case 'halloween':
            colorlist.style.color = 'orange';
            document.documentElement.style.setProperty('--level0', 'rgb(63, 70, 78)');
            document.documentElement.style.setProperty('--level1', 'rgb(98, 28, 2)');
            document.documentElement.style.setProperty('--level2', 'rgb(190, 85, 28)');
            document.documentElement.style.setProperty('--level3', 'rgb(249, 122, 29)');
            document.documentElement.style.setProperty('--level4', 'rgb(251, 223, 100)');
        break;
        case 'office':
            colorlist.style.color = 'blue';
            document.documentElement.style.setProperty('--level0', 'rgb(63, 70, 78)');
            document.documentElement.style.setProperty('--level1', 'rgb(4, 20, 82)');
            document.documentElement.style.setProperty('--level2', 'rgb(7, 18, 134)');
            document.documentElement.style.setProperty('--level3', 'rgb(38, 30, 193)');
            document.documentElement.style.setProperty('--level4', 'rgb(17, 1, 250)');
        break;
        case 'angry':
            colorlist.style.color = 'red';
            document.documentElement.style.setProperty('--level0', 'rgb(63, 70, 78)');
            document.documentElement.style.setProperty('--level1', 'rgb(82, 8, 4)');
            document.documentElement.style.setProperty('--level2', 'rgb(134, 7, 7)');
            document.documentElement.style.setProperty('--level3', 'rgb(192, 14, 14)');
            document.documentElement.style.setProperty('--level4', 'rgb(250, 1, 1)');
        break;
        case 'windu':
            colorlist.style.color = 'purple';
            document.documentElement.style.setProperty('--level0', 'rgb(63, 70, 78)');
            document.documentElement.style.setProperty('--level1', 'rgb(76, 4, 82)');
            document.documentElement.style.setProperty('--level2', 'rgb(134, 7, 117)');
            document.documentElement.style.setProperty('--level3', 'rgb(192, 14, 186)');
            document.documentElement.style.setProperty('--level4', 'rgb(250, 1, 246)');
        break;
        case 'standard2':
            colorlist.style.color = 'rgb(0, 172, 66)';
            document.documentElement.style.setProperty('--level0', 'rgb(238, 238, 238)');
            document.documentElement.style.setProperty('--level1', 'rgb(205, 237, 130)');
            document.documentElement.style.setProperty('--level2', 'rgb(113, 206, 101)');
            document.documentElement.style.setProperty('--level3', 'rgb(0, 172, 66)');
            document.documentElement.style.setProperty('--level4', 'rgb(0, 110, 37)');
        break;
        case 'bananawolf':
            colorlist.style.color = 'yellow';
            document.documentElement.style.setProperty('--level0', 'rgb(63, 70, 78)');
            document.documentElement.style.setProperty('--level1', 'rgb(98, 101, 11)');
            document.documentElement.style.setProperty('--level2', 'rgb(186, 186, 14)');
            document.documentElement.style.setProperty('--level3', 'rgb(231, 221, 36)');
            document.documentElement.style.setProperty('--level4', 'gold');
        break;
        default:
            colorlist.style.color = 'greenyellow';
            // colorlist.style.color = 'rgb(59, 207, 93)';
            document.documentElement.style.setProperty('--level0', 'rgb(63, 70, 78)');
            document.documentElement.style.setProperty('--level1', 'rgb(4, 76, 39)');
            document.documentElement.style.setProperty('--level2', 'rgb(0, 111, 52)');
            document.documentElement.style.setProperty('--level3', 'rgb(46, 163, 74)');
            document.documentElement.style.setProperty('--level4', 'rgb(59, 207, 93)');
        break;
    }
})
