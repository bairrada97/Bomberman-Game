export class Player {
  constructor() {
    this.color = "#ff0000";
    this.jumping = true;
    this.velocityX = 0;
    this.velocityY = 0;
    this.height = 16;
    this.width = 16;
    this.x = 100;
    this.y = 50;
    this.centerX = this.x + this.width * 0.5;
    this.centerY = this.y + this.height * 0.5;
  }
  moveLeft() {
    this.velocityX -= 0.55;
  }
  moveRight() {
    this.velocityX += 0.55;
  }
  moveUp() {
    if (!this.jumping) {
      this.color = "#" + Math.floor(Math.random() * 16777216).toString(16); // Change to random color
      /* toString(16) will not add a leading 0 to a hex value, so this: #0fffff, for example,
        isn't valid. toString would cut off the first 0. The code below inserts it. */
      if (this.color.length != 7) {
        this.color = this.color.slice(0, 1) + "0" + this.color.slice(1, 6);
      }
      this.jumping = true;
      this.velocityY -= 20;
    }
  }
  moveDown() {
    this.velocityY += 1;
  }

  update() {
    this.x += this.velocityX;
    this.y += this.velocityY;
  }
}
