
const canvas = document.getElementById("my-canvas");
canvas.style.backgroundColor = "#000000";

const ctx = canvas.getContext("2d");

const drawGridSystem = () => {
    ctx.font='12px monospace';
    ctx.strokeStyle ="#333"; // Gris tenue para la grilla
    ctx.lineWidth = 0.1;
    ctx.fillStyle = "#07fdfc";
    ctx.font = "10px Arial"; // Configurar la fuente para fillText

    for (let x = 0; x < canvas.width; x += 10) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.lineWidth = x % 50 === 0 ? 0.5 : 0.25;
        ctx.stroke();
        //if (x % 50 === 0) ctx.fillText(x, x, 10);
    }

    for (let y = 0; y < canvas.height; y += 10) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.lineWidth = y % 50 === 0 ? 0.5 : 0.25;
        ctx.stroke();
        //if (y % 50 === 0) ctx.fillText(y, 0, y + 10);
    }
}
