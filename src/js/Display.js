export class Display {
  constructor(canvas) {
    this.buffer = document.createElement("canvas").getContext("2d");
    this.context = canvas.getContext("2d");
    this.circles = [];
    this.radius = 20;
    this.velocity = 3;
    this.velX = Math.cos((Math.PI / 180) * this.radius) * this.velocity;
    this.velY = Math.sin((Math.PI / 180) * this.radius) * this.velocity;
  }

  resize(width, height, height_width_ratio) {
    if (height / width > height_width_ratio) {
      this.context.canvas.height = width * height_width_ratio;
      this.context.canvas.width = width;
    } else {
      this.context.canvas.height = height;
      this.context.canvas.width = height / height_width_ratio;
    }

    this.context.imageSmoothingEnabled = false;
  }

  drawCircle(x, y, radius) {
    this.context.beginPath();
    this.context.arc(x, y, radius, 0, 2 * Math.PI, false);
    this.context.fillStyle = "green";
    this.context.fill();
    this.context.lineWidth = 5;
    this.context.strokeStyle = "#003300";
    this.context.stroke();
  }

  bounce(circle) {
    if (circle.x - this.radius < 0 || circle.y - this.radius < 0 || circle.x + this.radius > this.context.canvas.width || circle.y + this.radius > this.context.canvas.height) {
      circle.direction += Math.PI / 2;
    }
    if (circle.direction > 2 * Math.PI) {
      circle.direction -= 2 * Math.PI;
    }
  }

  draw() {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    this.circles.forEach(circle => {
      circle.x = circle.x + Math.cos(circle.direction);
      circle.y = circle.y + Math.sin(circle.direction);
      this.drawCircle(circle.x, circle.y, this.radius);
      this.bounce(circle);
    });
    requestAnimationFrame(() => this.draw());
  }

  render() {
    this.context.drawImage(this.buffer.canvas, 0, 0, this.buffer.canvas.width, this.buffer.canvas.height, 0, 0, this.context.canvas.width, this.context.canvas.height);
    for (var i = 0; i < 20; i++) {
      var x = this.radius + Math.random() * (this.context.canvas.width - 2 * this.radius);
      var y = this.radius + Math.random() * (this.context.canvas.height - 2 * this.radius);
      var direction = Math.random() * 2.0 * Math.PI;
      this.circles.push({ x: x, y: y, direction: direction });
    }
    this.draw();
  }
}
