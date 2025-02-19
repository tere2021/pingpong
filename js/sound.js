const hitSound = new Audio("./assets/sounds/hit.wav");
const gameOverSound = new Audio("./assets/sounds/gameover.mp3");

function playHitSound() {
    hitSound.currentTime = 0; // Reinicia el sonido para que no haya retrasos
    hitSound.play();
}

function playGameOverSound() {
    gameOverSound.currentTime = 0;
    gameOverSound.play();
}
