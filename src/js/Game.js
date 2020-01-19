export class Game {
  constructor() {
    this.left = false;
    this.right = false;
    this.up = false;
    this.down = false;
    this.player = {
      color: "#000000",
      height: 16,
      jumping: true,
      speed: 0.3,
      velocity_x: 0,
      velocity_y: 0,
      width: 16,
      x: 100,
      y: 50
    };
    this.world = {
      backgroundColor: "#ffffff",
      height: 72,
      width: 128
    };
  }

  move() {
    if (this.left) {
      this.player.x -= this.player.speed;
    }
    if (this.right) {
      this.player.x += this.player.speed;
    }
    if (this.up) {
      this.player.y -= this.player.speed;
    }
    if (this.down) {
      this.player.y += this.player.speed;
    }
  }
  update() {
    this.move();
  }
}
