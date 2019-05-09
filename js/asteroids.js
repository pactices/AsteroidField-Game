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
    this.asteroidOrigin();
    // this.topLimit = canvas.y
    // this.rightLimit = canvas.x + canvas.width
    // this.bottomLimit = canvas.y + canvas.height
    // this.leftLimit = canvas.x
  }
  asteroidOrigin() {
    //determina de que lado aparece el asteroide
    let originSide = Math.floor(Math.random() * (4) + 1);
    // originSide = 4;
    //genera aleatoriamente el punto del lado donde aparece el asteroide
    if (originSide === 1) { //from the top
      this.x = Math.floor(Math.random() * (1330));
      this.y = 0 + this.vy;
      this.vx = this.vx;
    } else if (originSide === 2) { //from the right
      this.vx = -(this.vx);
      this.x = Math.floor(Math.random() * (1400));
      this.vy = -(this.vy);
      this.y = Math.floor(Math.random() * (600 - 100 + 1) + 100);
    } else if (originSide === 3) { //from the bottom
      this.vx = -(this.vx);
      this.x = Math.floor(Math.random() * (1300 - 100 + 1) + 100) - this.vx;
      this.vy = -(this.vy);
      this.y = 700 - this.vy;
    } else { //from the left
      this.x = 0 + this.vx;
      this.y = Math.floor(Math.random() * (650 - 50 + 1) + 50) + this.vy;
    }
  }

  draw() {
    console.log("x", this.x)
    console.log("y", this.y)
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
  move() {
    this.x += this.vx;
    this.y += this.vy;

  }

  // renewAsteroid();

  // offScreen() {
  //   if (this.x <= game.canvas.x /*leftLimit*/ ||
  //     this.x >= game.canvas.x + game.canvas.width /*rightLimit*/ ||
  //     this.y >= game.canvas.y + game.canvas.height /*bottomLimit*/ ||
  //     this.y <= game.canvas.y /*topLimit*/ ) {
  //     return offScreen
  //   }
  // }
}