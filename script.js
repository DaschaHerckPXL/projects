let startTime;
let timeOut;
let canClick = false;
let gameRunning = false;

const gameArea = document.getElementById("game-area");
const result = document.getElementById("result");
const startBtn = document.getElementById("start");


function startGame() {

    if (gameRunning) return;

    gameRunning = true;
    canClick = false;
    gameArea.style.backgroundColor = "red";
    result.textContent = "Wacht tot het groen wordt…";

    // tussen 8 en 3 seconden
    const delay = Math.random() * (8000 - 3000) + 3000;

    timeOut = setTimeout(() => {
        if (!gameRunning) return;
        gameArea.style.backgroundColor = "green";
        startTime = Date.now();
        result.textContent = "Klik nu!";
        canClick = true;
    }, delay);
}

gameArea.addEventListener("click", () => {
    if (!gameRunning) return;

    if (!canClick) {
        clearTimeout(timeOut);
        result.textContent = "Te vroeg, probeer opnieuw!";
        gameRunning = false;
        gameArea.style.backgroundColor = "grey"; 
        return;
    }

    const reactionTime = Date.now() - startTime;
    result.textContent = `Je reactietijd: ${reactionTime} ms`;
    canClick = false;
    gameRunning = false;
    gameArea.style.backgroundColor = "green";
});

startBtn.addEventListener("click", startGame);