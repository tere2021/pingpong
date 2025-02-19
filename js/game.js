    const playersPoints = {
        player1: 0,
        player2: 0,
    };
    const MAX_POINTS = 6;
    
    let startTime = 0;
    let elapsedTime = 0;
    let timerInterval;
    
    function drawPoints() {
        ctx.font = '20px Orbitron, sans-serif';
        ctx.textAlign = 'center';
    
        ctx.fillStyle = 'yellow';
        ctx.fillText("Player 1", canvas.width / 4, 40);
    
        ctx.font = 'bold 20px Orbitron, sans-serif';
        ctx.fillStyle = 'green';
        ctx.fillText("Player 2", (canvas.width / 4) * 3, 40);
    
        ctx.font = '30px Orbitron, sans-serif';
        ctx.fillStyle = 'red';
        ctx.fillText(playersPoints.player1, canvas.width / 4, 80);
        ctx.fillText(playersPoints.player2, (canvas.width / 4) * 3, 80);
    
        // Dibujar el temporizador debajo del marcador
        ctx.fillStyle = 'white';
        ctx.font = '16px Orbitron, sans-serif'; // Tamaño de fuente más pequeño
        ctx.fillText("TIME: " + formatTime(elapsedTime), canvas.width / 2, 110); // Posición debajo del marcador
    }
    
    function formatTime(ms) {
        const totalSeconds = Math.floor(ms / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        const milliseconds = ms % 1000;
    
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().slice(0, 2)}`; // Formato HH:MM:SS
    }
    
    function startTimer() {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            drawFrame(); // Redibujar el frame para actualizar el temporizador
        }, 10); // Actualizar cada 10 milisegundos para mayor precisión
    }
    
    function stopTimer() {
        clearInterval(timerInterval);
    }
    
    function resetTimer() {
        stopTimer();
        elapsedTime = 0;
    }



function checkGameOver() {
    if (playersPoints.player1 >= MAX_POINTS ||
        playersPoints.player2 >= MAX_POINTS) {

        playGameOverSound();
        ctx.font = "bold 30px Orbitron, sans-serif";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        ctx.fillText("Game Over!", canvas.width / 2, canvas.height / 2);
        stopTimer(); // Detener el temporizador al finalizar el juego
        return true;
    }
    return false;
}