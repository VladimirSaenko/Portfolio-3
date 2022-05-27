
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
        case 'lightgrey':
            colorlist.style.color = '#eeeeee';
            document.documentElement.style.setProperty('--level0', '#eeeeee');
            document.documentElement.style.setProperty('--level1', '#cfd8dc');
            document.documentElement.style.setProperty('--level2', '#90a4ae');
            document.documentElement.style.setProperty('--level3', '#546e7a');
            document.documentElement.style.setProperty('--level4', '#263238');
        break;
        case 'brown':
            colorlist.style.color = '#eeeeee';
            document.documentElement.style.setProperty('--level0', '#eeeeee');
            document.documentElement.style.setProperty('--level1', '#d7ccc8');
            document.documentElement.style.setProperty('--level2', '#a1887f');
            document.documentElement.style.setProperty('--level3', '#6d4c41');
            document.documentElement.style.setProperty('--level4', '#3e2723');
        break;
        case 'cyan':
            colorlist.style.color = 'cyan';
            document.documentElement.style.setProperty('--level0', '#eeeeee');
            document.documentElement.style.setProperty('--level1', '#b2ebf2');
            document.documentElement.style.setProperty('--level2', '#4dd0e1');
            document.documentElement.style.setProperty('--level3', '#00acc1');
            document.documentElement.style.setProperty('--level4', '#006064');
        break;
        case 'lightapelsin':
            colorlist.style.color = '#f4511e';
            document.documentElement.style.setProperty('--level0', '#eeeeee');
            document.documentElement.style.setProperty('--level1', '#ffccbc');
            document.documentElement.style.setProperty('--level2', '#ff8a65');
            document.documentElement.style.setProperty('--level3', '#f4511e');
            document.documentElement.style.setProperty('--level4', '#bf360c');
        break;
        case 'purple':
            colorlist.style.color = '#5e35b1';
            document.documentElement.style.setProperty('--level0', '#eeeeee');
            document.documentElement.style.setProperty('--level1', '#d1c4e9');
            document.documentElement.style.setProperty('--level2', '#9575cd');
            document.documentElement.style.setProperty('--level3', '#5e35b1');
            document.documentElement.style.setProperty('--level4', '#311b92');
        break;
        case 'bamboo':
            colorlist.style.color = '#7cb342';
            document.documentElement.style.setProperty('--level0', '#eeeeee');
            document.documentElement.style.setProperty('--level1', '#dcedc8');
            document.documentElement.style.setProperty('--level2', '#aed581');
            document.documentElement.style.setProperty('--level3', '#7cb342');
            document.documentElement.style.setProperty('--level4', '#33691e');
        break;
        case 'sourlemon':
            colorlist.style.color = '#c0ca33';
            document.documentElement.style.setProperty('--level0', '#eeeeee');
            document.documentElement.style.setProperty('--level1', '#f0f4c3');
            document.documentElement.style.setProperty('--level2', '#dce775');
            document.documentElement.style.setProperty('--level3', '#c0ca33');
            document.documentElement.style.setProperty('--level4', '#827717');
        break;
        case 'teal':
            colorlist.style.color = 'teal';
            document.documentElement.style.setProperty('--level0', '#eeeeee');
            document.documentElement.style.setProperty('--level1', '#b2dfdb');
            document.documentElement.style.setProperty('--level2', '#4db6ac');
            document.documentElement.style.setProperty('--level3', '#00897b');
            document.documentElement.style.setProperty('--level4', '#004d40');
        break;
        case 'sunset':
            colorlist.style.color = '#fed800';
            document.documentElement.style.setProperty('--level0', '#eeeeee');
            document.documentElement.style.setProperty('--level1', '#fed800');
            document.documentElement.style.setProperty('--level2', '#ff6f01');
            document.documentElement.style.setProperty('--level3', '#fd2f24');
            document.documentElement.style.setProperty('--level4', '#811d5e');
        break;
        case 'seablue':
            colorlist.style.color = '#00a1f3';
            document.documentElement.style.setProperty('--level0', '#eeeeee');
            document.documentElement.style.setProperty('--level1', '#6bcdff');
            document.documentElement.style.setProperty('--level2', '#00a1f3');
            document.documentElement.style.setProperty('--level3', '#48009a');
            document.documentElement.style.setProperty('--level4', 'darkblue');
        break;
        case 'lightteal':
            colorlist.style.color = '#7fffd4';
            document.documentElement.style.setProperty('--level0', 'rgb(237, 237, 237)');
            document.documentElement.style.setProperty('--level1', '#7fffd4');
            document.documentElement.style.setProperty('--level2', '#76eec6');
            document.documentElement.style.setProperty('--level3', '#66cdaa');
            document.documentElement.style.setProperty('--level4', '#458b74');
        break;
        case 'deepblack':
            colorlist.style.color = 'white';
            document.documentElement.style.setProperty('--level0', 'black');
            document.documentElement.style.setProperty('--level1', '#646464');
            document.documentElement.style.setProperty('--level2', '#a5a5a5');
            document.documentElement.style.setProperty('--level3', '#dddddd');
            document.documentElement.style.setProperty('--level4', 'white');
        break;
        case 'forestberries':
            colorlist.style.color = '#bd93f9';
            document.documentElement.style.setProperty('--level0', 'rgb(63, 70, 78)');
            document.documentElement.style.setProperty('--level1', '#44475a');
            document.documentElement.style.setProperty('--level2', '#6272a4');
            document.documentElement.style.setProperty('--level3', '#bd93f9');
            document.documentElement.style.setProperty('--level4', '#ff79c6');
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
