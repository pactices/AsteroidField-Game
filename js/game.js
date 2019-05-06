const game = {
  canvas: document.getElementById("mycanvas"),
  ctx: undefined,
  frames: 0,
  highscore: 0,
  init: function () {
    this.ctx = this.canvas.getContext("2d")
    // call updateGame() every 20 milliseconds
    // 
  },
  // drawBackground: function () {
  //   document.body.style.backgroundImage = "url(img/sky.png)";
  // },
  start: function () {
    this.reset();
    this.interval = setInterval(this.updateGame.bind(this), 2000 / 60);
  },
  reset: function () {
    spaceship.x = game.canvas.width / 2;
    spaceship.y = game.canvas.height / 2;
    this.background = new Background(this.canvas.width, this.canvas.height, this.ctx);
    this.framesCounter = 0;
    this.asteroidField = [];
    this.score = 0;
    this.generateAsteroid();
    // this.renewAsteroid();
  },
  updateGame: function () {
    game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);
    spaceship.move(); // meter dentro de moveAll
    // this.moveAll();

    this.drawAll();
    this.asteroidField.forEach(function (asteroid) {
      asteroid.move();
    });
    // game.drawBackground();
    // spaceship.draw();
    // generateAsteroid();
  },
  generateAsteroid: function () {
    this.asteroidField.push(new Asteroid(game.ctx));
  },
  clear: function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  drawAll: function () {
    this.background.draw();
    // this.asteroidField.draw(); CON ESTO NO PINTA EL BACKGROUND
    // generateAsteroid();
    spaceship.draw();
    this.asteroidField.forEach(function (asteroid) {
      asteroid.draw();
      // asteroidField.draw(); //CON ESTO PINTA EL FONDO PERO NO EL ASTEROIDE
    });
  },
  top(elm) {
    return elm.y;
  },
  right(elm) {
    return elm.x + elm.width;
  },
  bottom(elm) {
    return elm.y + elm.height;
  },
  left(elm) {
    return elm.x;
  },

  hasCollided: function () {
    return this.asteroidField.some(asteroid => {
      return !(
        top(spaceship) > bottom(asteroid) ||
        right(spaceship) < left(asteroid) ||
        bottom(spaceship) < top(asteroid) ||
        left(spaceship) > right(asteroid)
      );
    });
  }
  // moveAll: function (asteroid) {
  //   asteroid.move();
  // },
  // renewAsteroid() {
  //   /*if (offScreen)*/
  //   for (i = 0; i < this.asteroidField.length; i++) {
  //     this.asteroidField[i].x += 1;
  //     this.asteroidField[i].draw();
  //   }
  //   this.frames += 1;
  //   this.asteroidField.draw();
  // }
}

game.init();
game.start();

function setEventListeners() {
  document.onkeydown = e => {
    if (e.keyCode === 37) {
      spaceship.angle -= 5;
    } else if (e.keyCode === 38) {
      spaceship.burn();
    } else if (e.keyCode === 39) {
      spaceship.angle += 5;
    }
  }
};

setEventListeners();

// keys: {
//   LEFT_KEY: 37,
//   UP_KEY: 38,
//   RIGHT_KEY: 39
// },