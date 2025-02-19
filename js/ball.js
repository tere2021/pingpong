const ball = {
        x: 100,
        y: 50,
        dx: 2,
        dy: 2,
        radius: 6,
        color: "#ffffff",


    draw: function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    },
    updatePosition: function(){
        this.x += this.dx;
        this.y += this.dy;
        this.checkCollision();
        this.checkCollisionWithPaddle();
    },

    checkCollision: function(){
        // colision pared derecha
        if(this.x + this.radius > canvas.width){
            //si la paleta pega pared derecha punto player1
            playersPoints.player1++;
            this.reverseDirection("x");
        }
        // colision pared izquierda
        if(this.x - this.radius < 0){
            //si la paleta pega pared izq punto player2
            playersPoints.player2++;
            this.reverseDirection("x");
        }
        //colision pared arriba o abajo
        if( this.y - this.radius < 0  ||
            this.y + this.radius > canvas.height){
            this.reverseDirection("y");
        }
    },

    checkCollisionWithPaddle: function (){
        //verificamos colision c paleta derecha: paddle2
        if(this.x + this.radius > paddle2.x &&
            this.y > paddle2.y &&
            this.y < paddle2.y + paddle2.height
        ){
            this.reverseDirection("x");
            playHitSound(); // Sonido al golpear con la paleta derecha
        }
        //verificamos colision c paleta izw: paddle1
        
        if(this.x - this.radius < paddle1.x &&
            this.y > paddle1.y &&
            this.y < paddle1.y + paddle1.height
        ){
            this.reverseDirection("x");
            playHitSound(); // sonido al pegar con la paleta izquierda
        }
    },
    reverseDirection: function(axis){
        if(axis === "x"){
            this.dx = -this.dx;
        }else if(axis === "y") {
            this.dy = -this.dy;
        }  
    },
};

