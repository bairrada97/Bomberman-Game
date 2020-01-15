export class Engine {
  constructor(time_step, update, render) {
    this.accumulated_time = 0;
    this.animation_frame_request = undefined;
    this.time = undefined;
    this.time_step = time_step;
    this.updated = false;
    this.update = update;
    this.render = render;
  }

  start() {
    this.accumulated_time = this.time_step;
    this.time = window.performance.now();
    this.animation_frame_request = window.requestAnimationFrame(this.handleRun);
  }

  stop() {
    window.cancelAnimationFrame(this.animation_frame_request);
  }
}
