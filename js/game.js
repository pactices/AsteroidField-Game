const game = {
  canvas: document.getElementById("mycanvas"),
  ctx: undefined,
  frames: 0,
  highscore: 0,
  init: function () {
    this.ctx = this.canvas.getContext("2d");

  },

  start: function () {
    this.reset();
    this.interval = setInterval(this.updateGame.bind(this), 30);
  },
  reset: function () {
    spaceship.x = game.canvas.width / 2;
    spaceship.y = game.canvas.height / 2;
    this.background = new Background(
      this.canvas.width,
      this.canvas.height,
      this.ctx
    );
    this.framesCounter = 0;
    this.asteroidField = [new Asteroid(this.ctx)];
    // this.highscore = 0; //SI YA EMPIEZA EN ZERO, TIENE SENTIDO ESTO AQUI???

  },
  drawAll: function () {
    this.background.draw();
    spaceship.draw();
    this.asteroidField.forEach(function (asteroid) {
      asteroid.draw();

    });
  },
  updateGame: function () {
    game.frames += 1;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // controlamos que frameCounter no sea superior a 1000
    if (this.frames > 10000) {
      this.frames = 0;
    }

    if (this.frames % 500 === 0) { //CADA CUANTO GENERA UM NUEVO ASTEROIDE
      this.asteroidField.push(new Asteroid(this.ctx));
    }

    // meter en this.moveAll();
    this.background.move();
    spaceship.move();
    this.asteroidField.forEach(function (asteroid) {
      asteroid.move();

    });

    this.drawAll();

    // detect collision
    if (this.hasCollided()) {
      this.over();

    };
    // console.log("colision", this.hasCollided());

    this.renewAsteroid();


    //codigo para fazer entrar do lado oposto ao lado por onde saiu
    if (this.isOffRight()) {
      spaceship.x = 0;
    } else if (this.isOffLeft()) {
      spaceship.x = 1430;
    } else if (this.isOffTop()) {
      spaceship.y = 700
    } else if (this.isOffBottom()) {
      spaceship.y = 0;
    };

    // update and draw the score ON THE SCREEN
    this.scoreDraw();
  },

  //chequeo si el asteroide salió de la pantalla y lo limpio del array
  //esto elimina los obstáculos del array que estén fuera de la pantalla
  renewAsteroid: function () {
    let asteroidCounter = 0;
    this.asteroidField = this.asteroidField.filter(function (asteroid) {
      if (asteroid.x < -asteroid.width || asteroid.x > game.canvas.width || asteroid.y < -asteroid.height || asteroid.y > game.canvas.height) {
        asteroidCounter++;
        return false
      } else return true;
    });
    for (let i = 0; i < asteroidCounter; i++) {
      this.asteroidField.push(new Asteroid(this.ctx));
    }
  },





  clear: function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  scoreDraw: function () {
    var points = this.frames;
    this.ctx.font = "20px sans-serif";
    this.ctx.fillStyle = "white";
    this.ctx.fillText("Score: " + points, 50, 50);
    return points;
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
        game.top(spaceship) > game.bottom(asteroid) ||
        game.right(spaceship) < game.left(asteroid) ||
        game.bottom(spaceship) < game.top(asteroid) ||
        game.left(spaceship) > game.right(asteroid)
      );
    });
  },

  isOffTop: function () {
    return (spaceship.y < 0 /*topLimit*/ );
  },
  isOffRight: function () {
    return (spaceship.x > game.canvas.width /*rightLimit*/ );
  },
  isOffBottom: function () {
    return (spaceship.y > game.canvas.height /*bottomLimit*/ );
  },
  isOffLeft: function () {
    return (spaceship.x < 0 /*leftLimit*/ );
  },

  over: function () {
    // Stops clock(clears setInterval).
    clearInterval(this.interval);
    // Stores highscore.
    this.highscore = this.scoreDraw();
    spaceship.explode();
    setTimeout(() => {
      this.ctx.fillStyle = "white";
      this.ctx.fillRect(450, 50, 600, 300);
      this.ctx.font = "80px sans-serif";
      this.ctx.letterspacing = "2em";
      this.ctx.fillStyle = "black";
      this.ctx.fillText("GAME OVER", 500, 140);
      this.ctx.font = "30px sans-serif";
      this.ctx.fillText("Your score:   " + this.highscore, 500, 200);
      this.ctx.fillText("Highest ever:   " + localStorage.getItem("puntuacion"), 500, 250);
      this.ctx.font = "20px sans-serif";
      this.ctx.fillStyle = "green";
      this.ctx.fillText("Press ENTER to Restart", 800, 300);


      if (this.highscore > Number(localStorage.getItem("puntuacion"))) {
        this.ctx.fillStyle = "red";
        this.ctx.fillText("NEW RECORD", 500, 300);
        localStorage.setItem('puntuacion', this.highscore);
      };

    }, 20);
  }
};


// function setHighest() {
//   console.log(localStorage)
//   if (this.highscore > Number(localStorage.getItem("puntuacion"))) {
//     localStorage.setItem(this.highscore);
//   } else {
//     return this.highscore;
//   }
// }

game.init();
game.start();

function setEventListeners() {
  document.onkeydown = e => {
    if (e.keyCode === 37) { //LEFT_ARROW
      spaceship.angle -= 5;
    } else if (e.keyCode === 38) { //UP_ARROW
      spaceship.burn();
    } else if (e.keyCode === 39) { //RIGHT_ARROW
      spaceship.angle += 5;
    } else if (e.keyCode === 13) {
      game.init();
      game.start();
      game.frames = 0;
    }
  };
}

setEventListeners();