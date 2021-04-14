
// "use strict"

let container = document.getElementById("container");
let form  = document.getElementsByTagName('form')[0];
// let colorPoints1 = document.getElementById("color1");
// let colorPoints2 = document.getElementById("color2");
// let colorPoints3 = document.getElementById("color3");
let options = {
  dots: 300,
  dotSize: 4,
  dotInterval: 1,
  spread: 2,
  speed: 0.0005,
};
let color1 = 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + ')';
let color2 = 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + ')';
let color3 = 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + ')';
let colors = [
  color1, color2, color3
];
const spiral = document.createElement('canvas'); // create spiral
const ctx = spiral.getContext('2d');
document.body.appendChild(spiral);
spiral.width = window.innerWidth;
spiral.height = window.innerHeight;
let interval = options.dotInterval;
const xmid = spiral.width/2;
const ymid = spiral.height/2;

for (const option in options) {
  if (form[option].type == 'checkbox') {
    form[option].checked = options[option];
    continue;
  }
  form[option].value = options[option];
}

function getRandomColor() {
  colors[0] = 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + ')';
  colors[1] = 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + ')';
  colors[2] = 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + ')';
}

animate();

function animate() {
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, spiral.width, spiral.height);
  ctx.fill();
  drawSpiral(interval);
  interval += options.speed;
  window.requestAnimationFrame(animate);
}

function drawSpiral (interval) {
  ctx.moveTo(xmid, ymid);
  let spread = 2;
  let tick = 0;
  for (let i=0; i<options.dots; i++) {
    x = Math.cos(i)*spread + xmid;
    y = Math.sin(i)*spread + ymid;
    ctx.moveTo(x, y);
    ctx.beginPath();
    const color = colors[tick%3];
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.arc(x,y,options.dotSize,0,2*Math.PI);
    ctx.lineTo(x,y)
    ctx.stroke();
    ctx.fill();
    i += interval;
    spread += options.spread;
    tick++;
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  for (const option of form.elements) {
    if (option.type == 'submit') {
      continue;
    } else if (option.type == 'checkbox') {
      options[option.name] = option.checked;
    } else if (option.type == 'number' || option.type == 'range') {
      options[option.name] = parseFloat(option.value);
    } else {
      options[option.name] = option.value;
    }
  }
  
  interval = options.dotInterval;
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
