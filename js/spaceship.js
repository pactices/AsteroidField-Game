let spaceship = {
  img: new Image(),
  x: undefined,
  y: undefined,
  width: 60,
  height: 110,
  angle: 90,
  vx: 0,
  vy: 0,
  power: 3,
  draw: function () {
    this.img.src = 'img/spaceship.png'
    // this.img.onload = () => {
    game.ctx.save();
    game.ctx.translate(this.x, this.y);
    game.ctx.rotate(this.angle * Math.PI / 180);
    game.ctx.translate(-30, -55); // half width and height of spaceship
    game.ctx.drawImage(this.img, 0, 0, this.width, this.height);
    game.ctx.restore();
    // };
  },
  burn: function () {
    this.vx += Math.cos(-Math.PI / 2 + this.angle * Math.PI / 180) * this.power;
    this.vy += Math.sin(-Math.PI / 2 + this.angle * Math.PI / 180) * this.power;
  },
  move: function () {
    this.x += this.vx;
    this.y += this.vy;
  },
  explode: function () {
    console.log(`x=${spaceship.x + spaceship.width / 2 - 450} y=${spaceship.y + spaceship.height / 2 + 240}`);
    this.audio = new Audio('sound/explosion.wav');
    this.audio.play();
    explosion = new Image();
    explosion.src = "img/explosion5.png";
    explosion.onload = () => {
      game.ctx.drawImage(explosion, spaceship.x + spaceship.width / 2 - 175, spaceship.y + spaceship.height / 2 - 220, 350, 350);
    }
  }

}