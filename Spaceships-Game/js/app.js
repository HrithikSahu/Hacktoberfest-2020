// Global Variables for selecting levels and lives.
const levels = document.querySelector('#score').lastChild;
const lives = document.querySelector('#lives').lastChild;

// Sun class declaration.
class Sun {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
};
const sun = new Sun(400, 0, 75, 75);

// Enemies class declaration.
class Enemy {
  constructor(x, y, direction, style, width, height) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.style = style;
    this.width = width;
    this.height = height;
    this.speed = Math.floor(Math.random() + 1 * 2);
  }
  // This method describes the speed of the enemy and change in the direction when enemy reach at one end of the canvas.
  update() {
    if (this.direction === 'ltr' && this.x <= 800) {
      this.x += this.speed;

      if (this.x >= 800) {
        this.direction = 'rtl';
        this.x -= this.speed;
      }
    }
    if (this.direction === 'rtl' && this.x >= 0) {
      this.x -= this.speed;

      if (this.x <= 0) {
        this.direction = 'ltr';
        this.x += this.speed;
      }
    }
  };
};

// Player class declaration.
class Player {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  update() {
    // Player collides with Enemy
    allEnemies.forEach((ele) => {
      let lives = document.querySelector('#lives').lastChild;
      let levels = document.querySelector('#score').lastChild;

      if (this.x > ele.x + ele.width) {
        return false;
      } else if (this.x + this.width < ele.x) {
        return false;
      } else if (this.y > ele.y + ele.height) {
        return false;
      } else if (this.y + this.height < ele.y) {
        return false;
      } else {
        player.x = 430;
        player.y = 430;
        lives.innerHTML = parseInt(lives.innerHTML) - 1;
        if (lives.innerHTML <= 0) {
          lives.innerHTML = 3;
          levels.innerHTML = 0;
          runOutOfLives();
        }
      }
    });
    // Player reach the sun.
    let levels = document.querySelector('#score').lastChild;

    if (this.x > sun.x + sun.width) {
      return false;
    } else if (this.x + this.width < sun.x) {
      return false;
    } else if (this.y > sun.y + sun.height) {
      return false;
    } else if (this.y + this.height < sun.y) {
      return false;
    } else {
      player.x = 430;
      player.y = 430;
      levels.innerHTML = parseInt(levels.innerHTML) + 1;
      allEnemies.forEach((elem) => {
        elem.speed++;
      });
    }
  }
  // Handle input method, this method describes the movement of player when any up, down, left and right key is pressed. 
  handleInput(movement) {
    if (movement === 'left') {
      this.x -= 30;
      if (this.x <= 0) {
        this.x += 30;
      }
    } else if (movement === 'up') {
      this.y -= 30;
      if (this.y <= 0) {
        this.y += 30;
      }
    } else if (movement === 'right') {
      this.x += 30;
      if (this.x >= 800) {
        this.x -= 30;
      }
    } else if (movement === 'down') {
      this.y += 30;
      if (this.y >= 450) {
        this.y -= 30;
      }
    }
  }
}
const player = new Player(430, 430, 75, 75);

// Array containing all enemies.
const allEnemies = [
  enemy1 = new Enemy(100, 100, 'ltr', 'enemy1', 75, 75),
  enemy2 = new Enemy(800, 200, 'rtl', 'enemy2', 75, 75),
  enemy3 = new Enemy(0, 0, 'ltr', 'enemy3', 75, 75),
];

// Event Listener to respond when any up, down, left and right key is pressed.
document.addEventListener('keyup', function (e) {
  const allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});

// Game over funtion, when player run out of lives, this function will reset the postion(Enemy and Player) and speed.
function runOutOfLives() {
  alert("Game Over, Try Again");
  enemy1.x = 100;
  enemy1.y = 100;
  enemy2.x = 800;
  enemy2.y = 200;
  enemy3.x = 0;
  enemy3.y = 0;
  enemy1.speed = Math.floor(Math.random() + 1 * 2);
  enemy2.speed = Math.floor(Math.random() + 1 * 2);
  enemy3.speed = Math.floor(Math.random() + 1 * 2);
  player.x = 430;
  player.y = 430;
}