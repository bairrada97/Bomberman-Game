export class Enemy {
  constructor() {
    this.color = "#ff0000";
    this.jumping = false;
    this.velocityX = 0;
    this.velocityY = 0;
    this.height = 16;
    this.width = 16;
    this.x = 30;
    this.y = 60;
    this.centerX = this.x + this.width * 0.5;
    this.centerY = this.y + this.height * 0.5;
  }

  update() {}
}
