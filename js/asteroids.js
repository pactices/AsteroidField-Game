class Asteroid {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = undefined;
    this.y = undefined;
    this.width = 80;
    this.height = 60;
    this.vx = 10;
    this.vy = 10;

    // this.width = game.canvas.width;
    // this.height = game.canvas.height;
    this.img = new Image();
    // this.img.onload = () => {
    this.img.src = "img/asteroid.png";
    // }
    this.audio = new Audio('sound/blip.wav');
    // this.audio.play();
    this.asteroidOrigin();
    // this.topLimit = canvas.y
    // this.rightLimit = canvas.x + canvas.width
    // this.bottomLimit = canvas.y + canvas.height
    // this.leftLimit = canvas.x
  }
  asteroidOrigin() {
    //determina de que lado aparece el asteroide
    let originSide = Math.floor(Math.random() * (4) + 1);
    // originSide = 2;
    //genera aleatoriamente el punto del lado donde aparece el asteroide
    if (originSide === 1) { //from the top
      this.x = Math.floor(Math.random() * (game.canvas.width - 400) + 200);
      this.y = -this.height;
      let angle = Math.floor(Math.random() * (160 - 20) + 110);
      let vel = Math.floor(Math.random() * (5) + 3);
      this.vx = Math.cos(-Math.PI / 2 + angle * Math.PI / 180) * vel;
      this.vy = Math.sin(-Math.PI / 2 + angle * Math.PI / 180) * vel;
      console.log(`angle=${angle} vx=${this.vx} vy=${this.vy}`);
    } else if (originSide === 2) { //from the right
      this.x = game.canvas.width;
      this.y = Math.floor(Math.random() * (game.canvas.height - 100) + 50);
      let angle = Math.floor(Math.random() * (160 - 20) + 200);
      let vel = Math.floor(Math.random() * (5) + 3);
      this.vx = Math.cos(-Math.PI / 2 + angle * Math.PI / 180) * vel;
      this.vy = Math.sin(-Math.PI / 2 + angle * Math.PI / 180) * vel;
    } else if (originSide === 3) { //from the bottom
      this.x = Math.floor(Math.random() * (game.canvas.width - 400) + 200);
      this.y = game.canvas.height;
      let angle = Math.floor(Math.random() * (160 - 20) + 290);
      let vel = Math.floor(Math.random() * (5) + 3);
      this.vx = Math.cos(-Math.PI / 2 + angle * Math.PI / 180) * vel;
      this.vy = Math.sin(-Math.PI / 2 + angle * Math.PI / 180) * vel;
    } else { //from the left
      this.x = -this.width;
      this.y = Math.floor(Math.random() * (game.canvas.height - 100) + 50);
      let angle = Math.floor(Math.random() * (160 - 20) + 20);
      let vel = Math.floor(Math.random() * (5) + 3);
      this.vx = Math.cos(-Math.PI / 2 + angle * Math.PI / 180) * vel;
      this.vy = Math.sin(-Math.PI / 2 + angle * Math.PI / 180) * vel;
    }
  }

  draw() {
    // console.log("x", this.x)
    // console.log("y", this.y)
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
  move() {
    this.x += this.vx;
    this.y += this.vy;

  }

}