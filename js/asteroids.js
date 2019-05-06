class Asteroid {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 0;
    this.y = 350;
    this.width = 80;
    this.height = 60;
    this.vx = 5;
    this.vy = 5;
    // this.width = game.canvas.width;
    // this.height = game.canvas.height;
    this.img = new Image();
    // this.img.onload = () => {
    this.img.src = "img/asteroid.png";
    // }

    // this.topLimit = canvas.y
    // this.rightLimit = canvas.x + canvas.width
    // this.bottomLimit = canvas.y + canvas.height
    // this.leftLimit = canvas.x
  }
  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
  move() {
    this.x += this.vx;
    // this.y *= this.vy;
    // renewAsteroid();
  }

  // renewAsteroid() {
  //   /*if (offScreen)*/
  //   for (i = 0; i < myAsteroids.length; i++) {
  //     myAsteroids[i].x += 1;
  //     myAsteroids[i].draw();
  //   }
  //   game.frames += 1;
  //   this.draw();
  // }

  // offScreen() {
  //   if (this.x <= game.canvas.x /*leftLimit*/ ||
  //     this.x >= game.canvas.x + game.canvas.width /*rightLimit*/ ||
  //     this.y >= game.canvas.y + game.canvas.height /*bottomLimit*/ ||
  //     this.y <= game.canvas.y /*topLimit*/ ) {
  //     return offScreen
  //   }
  // }
}
