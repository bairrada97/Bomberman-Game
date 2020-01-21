export class Controller {
  constructor() {
    this.left = false;
    this.right = false;
    this.up = false;
    this.down = false;
  }

  keyListener({ keyCode, type }) {
    const keyState = type == "keydown" ? true : false;

    if (keyCode == 37) this.left = keyState;
    if (keyCode == 39) this.right = keyState;
    if (keyCode == 38) this.up = keyState;
    if (keyCode == 40) this.down = keyState;
  }
}
