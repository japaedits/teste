let score = 0;
let timeLeft = 10;
let gameInterval;
let timerInterval;

const ball = document.getElementById('ball');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start-btn');
const openButton = document.getElementById('open-btn');
const messageScreen = document.getElementById('message-screen');
const gameArea = document.getElementById('game-area');

function startGame() {
  score = 0;
  timeLeft = 10;
  scoreDisplay.textContent = `Pontuação: ${score}`;
  timerDisplay.textContent = `Tempo: ${timeLeft}s`;
  ball.style.display = 'block';
  startButton.disabled = true;
  openButton.style.display = 'none';
  messageScreen.style.display = 'none';

  // Atualizar o timer
  timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Tempo: ${timeLeft}s`;
    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);

  // Movimentar a bolinha
  gameInterval = setInterval(moveBall, 700);
}

function moveBall() {
  const areaWidth = gameArea.clientWidth;
  const areaHeight = gameArea.clientHeight;

  const ballWidth = ball.offsetWidth;
  const ballHeight = ball.offsetHeight;

  const randomX = Math.random() * (areaWidth - ballWidth);
  const randomY = Math.random() * (areaHeight - ballHeight);

  ball.style.left = `${randomX}px`;
  ball.style.top = `${randomY}px`;
}

function clickBall() {
  score++;
  scoreDisplay.textContent = `Pontuação: ${score}`;
}

function endGame() {
  clearInterval(timerInterval);
  clearInterval(gameInterval);
  ball.style.display = 'none';
  startButton.disabled = false;
  openButton.style.display = 'block';
}

function openMessage() {
  openButton.style.display = 'none';
  messageScreen.style.display = 'block';
}

ball.addEventListener('click', clickBall);
startButton.addEventListener('click', startGame);
openButton.addEventListener('click', openMessage);
