const paddle1 = {
    x: 10,
    y: canvas.height/2-30,
    width: 10,
    height: 60,
    color:"orange",
    speed: 3,
    side: "left",
    //dibujo la paleta
    draw: function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    },
    followBall: function(){
        if(ball.y <this.y + this.height/2){
            this.y -=  this.speed -2;
        }else{
            this.y += this.speed -2 ;
        }
    },
};


const paddle2 = {
    x: canvas.width - 20,
    y: canvas.height / 2 - 30,
    width: 10,
    height: 60,
    color:"green",
    speed: 5,
    side: "right",
    //dibujo la paleta
    draw: function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    },
};

//evento mousemove para la paleta2
canvas.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    //posicion del mouse en Y en el canvas
    const mouseY = e.clientY - rect.top;

    paddle2.y = mouseY - paddle2.height / 2;
});