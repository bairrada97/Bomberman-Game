import { Player } from "./index";
import { Enemy } from "./index";
import { World } from "./index";

export class Game {
  constructor() {
    this.player = new Player();
    this.enemy = new Enemy();
    this.world = new World();
  }

  collideWorld(object) {
    if (object.x < 0) {
      object.x = 0;
      object.velocityX = 0;
    } else if (object.x + object.width > this.world.width) {
      object.x = this.world.width - object.width;
      object.velocityX = 0;
    }
    if (object.y < 0) {
      object.y = 0;
      object.velocityY = 0;
    } else if (object.y + object.height > this.world.height) {
      object.jumping = false;
      object.y = this.world.height - object.height;
      object.velocityY = 0;
    }
  }
  handleCollisions(player, enemy) {
    var playerTop = player.y,
      playerBottom = player.y + player.height,
      playerLeft = player.x,
      playerRight = player.x + player.width,
      enemyTop = enemy.y,
      enemyBottom = enemy.y + enemy.height,
      enemyLeft = enemy.x,
      enemyRight = enemy.x + enemy.width;

    if (playerBottom > enemyTop && this.distanceBetween(playerBottom, enemyTop) < this.distanceBetween(playerBottom, enemyBottom)) {
      player.topCollision = true;
      player.y = enemy.y - player.height;
      player.velocityY = 0;
      player.jumping = false;
    } else if (playerTop < enemyBottom && this.distanceBetween(playerTop, enemyBottom) < this.distanceBetween(playerTop, enemyTop)) {
      player.bottomCollision = true;
      player.y = enemy.y + enemy.height;
      player.velocityY = 0;
    } else if (playerRight > enemyLeft && this.distanceBetween(playerRight, enemyLeft) < this.distanceBetween(playerRight, enemyRight)) {
      player.rightCollision = true;
      player.x = enemy.x - player.width;
      player.velocityX = 0;
    } else if (playerLeft < enemyRight && this.distanceBetween(playerLeft, enemyRight) < this.distanceBetween(playerLeft, enemyLeft)) {
      player.leftCollision = true;
      player.x = enemy.x + enemy.width + 0.01;
      player.velocityX = 0;
    }
  }
  distanceBetween(a, b) {
    return Math.abs(b - a);
  }

  hasCollide(player, enemy) {
    if (player.y > enemy.y + enemy.height || player.x + player.width < enemy.x || player.y + player.height < enemy.y || player.x > enemy.x + enemy.width) {
      return false;
    }
    return true;
  }

  update() {
    this.player.velocityY += this.world.gravity;
    this.player.velocityY *= this.world.friction;
    this.player.velocityX *= this.world.friction;
    this.player.update();
    if (this.hasCollide(this.player, this.enemy)) this.handleCollisions(this.player, this.enemy);
    this.collideWorld(this.player);
  }
}
