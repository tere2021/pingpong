let on = false;
let gameOver = false;

function drawFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPoints(); // Mantiene el score en pantalla
    drawGridSystem(); // Dibuja la grilla

    // Dibujamos los elementos del juego
    ball.draw();
    paddle1.draw();
    paddle2.draw();

    if (on && !gameOver) {
        ball.updatePosition();
        paddle1.followBall();
        if (checkGameOver()) {
            gameOver = true;
        }
    }
    if (gameOver) {
        ctx.font = "30px monospace";
        ctx.fillStyle = "white";
        ctx.fillText("Game Over!", canvas.width / 2 - 50, canvas.height / 2);
    }
}

setInterval(drawFrame, 1000 / 60);

document.getElementById("toggleButton").addEventListener("click", () => {
    if (gameOver) {
        resetGame();
        gameOver = false;
        resetTimer(); // Reiniciar el temporizador al reiniciar el juego
    }
    on = !on;
    if (on) {
        startTimer(); // Iniciar el temporizador al iniciar el juego
    } else {
        stopTimer(); // Detener el temporizador si se pausa el juego
    }
    document.getElementById("toggleButton").textContent = on ? "Detener Juego" : "Iniciar Juego";
});

function resetGame() {
    playersPoints.player1 = 0;
    playersPoints.player2 = 0;
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.dx = 2;
    ball.dy = 2;
}