import { Player } from "./index";
import { World } from "./index";

export class Game {
  constructor() {
    this.player = new Player();
    this.world = new World();
  }

  collideObject(object) {
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

  update() {
    this.player.velocityY += this.world.gravity;

    this.player.update();
    this.player.velocityX *= this.world.friction;
    this.player.velocityY *= this.world.friction;
    this.collideObject(this.player);
  }
}
