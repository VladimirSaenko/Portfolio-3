
"use strict";

const rulesBtn = document.getElementById('rules-btn');
const closeBtn = document.getElementById('close-btn');
const rules = document.getElementById('rules');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let score = 0;
const brickRowCount = 5;
const brickColumnCount = 9;
const delay = 500; // Delay to reset the game

// Create ball props
const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 10,
  speed: 4,
  dx: 4,
  dy: -4,
  visib: true
}

// ball.x = 132; prost

// Create paddle props
const paddle = {
  x: canvas.width / 2 - 40,
  y: canvas.height - 20,
  w: 80,
  h: 10,
  speed: 8,
  dx: 0,
  visib: true
}

// Create brick props
const brickInfo = {
  w: 70,
  h: 20,
  pad: 10,
  offsetX: 45,
  offsetY: 60,
  visib: true 
}

const bricks = [];

for (let i = 0; i < brickColumnCount; i++) {
  bricks[i] = [];
  for (let j = 0; j < brickRowCount; j++) {
    const x = i * (brickInfo.w + brickInfo.pad) + brickInfo.offsetX;
    const y = j * (brickInfo.h + brickInfo.pad) + brickInfo.offsetY;
    bricks[i][j] = {
      x,
      y,
      ...brickInfo 
      // x: x, 
      // y: y, 
      // kek: 'lol'
      // w: brickInfo.w,
      // h: brickInfo.h,
      // pad: brickInfo.pad
      // offsetX: brickInfo.offsetX,
      // offsetY: brickInfo.offsetY,
      // visib: brickInfo.visib
    };
  };
}

// Draw ball on canvas
function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
  ctx.fillStyle = ball.visib ? '#00955dd' : 'transparent';
  ctx.fill();
  ctx.closePath();
}

// Draw paddle on canvas
// Нарисовать падлу
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h);
  ctx.fillStyle - paddle.visib ? '#00955dd' : 'transparent';
  ctx.fill();
  ctx.closePath();
}

// Draw score on canvas
function drawScore() {
  
}

// Draw bricks on canvas
function drawBricks() {
  bricks.forEach(column => {
    column.forEach(brick => {
      ctx.beginPath();
      ctx.rect(brick.x, brick.y, brick.w, brick.h);
      ctx.fillStyle = brick.visib ? '#0095dd' : 'transparent';
      ctx.fill();
      ctx.closePath();
    });
  });
};

// Move paddle on canvas
function movePaddle() {
  paddle.x += paddle.dx;

  if(paddle.x + paddle.w > canvas.width) {
    paddle.x = canvas.width - paddle.w;
  }

  if(paddle.x < 0) {
    paddle.x = 0;
  }
}

// Move ball on canvas
function moveBall() {
  ball.x += ball.dx;
  ball.y += ball.dy;

  if(ball.x + ball.size > canvas.width || ball.x - ball.size < 0) {
    ball.dx *= -1;
  }

  if(ball.y + ball.size > canvas.height || ball.y - ball.size < 0) {
    ball.dy *= -1;
  }

  if(ball.x - ball.size > paddle.x && 
    ball.x + ball.size < paddle.x + paddle.w && 
    ball.y + ball.size > paddle.y) {
    ball.dy = -ball.speed;
  }

  bricks.forEach(column => {
    column.forEach(brick => {
      if(brick.visib) {
        if(ball.x - ball.size > brick.x &&
          ball.x + ball.size < brick.x + brick.w &&
          ball.y + ball.size > brick.y &&
          ball.y - ball.size < brick.y + brick.h) {
            ball.dy *= -1;
            brick.visib = false;
            increaseScore();
          }
      }
    })
  })
}

// Increase score
function increaseScore() {

}

// Make all bricks appear
function showAllBricks() {
  
}

// Draw everything
function draw() {
  // clear canvas here

  drawBall();
  drawPaddle();
  drawScore();
  drawBricks();
}

// Update canvas drawing and animation
function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  movePaddle();
  moveBall();

  draw();

  requestAnimationFrame(update);
}

update();

// Keydown event
function keyDown(e) {
  if(e.key === 'ArrowRight') {
    paddle.dx = paddle.speed;
  }
  else if(e.key === 'ArrowLeft') {
    paddle.dx = -paddle.speed;
  }
}

// Keyup event
function keyUp(e) {
	if(e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
    paddle.dx = 0;
  }
}

// Keyboard event handlers

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

// Rules and close event handlers for rulesBtn and closeBtn

