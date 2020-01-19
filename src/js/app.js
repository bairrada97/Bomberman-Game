import "../scss/app.scss";

import { Display } from "./index";
import { Controller } from "./index";
import { Game } from "./index";
import { Engine } from "./index";

const App = (() => {
  const $Module = document.querySelector(".app");
  let display;
  let controler;
  let game;
  let engine;

  const init = () => {
    display = new Display(document.querySelector("canvas"));
    controler = new Controller();
    game = new Game();
    engine = new Engine(1000 / 30, render, update);
    events();
    display.render();
    engine.start();
    display.buffer.canvas.height = game.world.height;
    display.buffer.canvas.width = game.world.width;
  };
  const events = () => {
    document.addEventListener("keydown", ({ keyCode }) => {
      if (keyCode == 37) game.left = true;
      if (keyCode == 39) game.right = true;
      if (keyCode == 38) game.up = true;
      if (keyCode == 40) game.down = true;
    });
    document.addEventListener("keyup", ({ keyCode }) => {
      if (keyCode == 37) game.left = false;
      if (keyCode == 39) game.right = false;
      if (keyCode == 38) game.up = false;
      if (keyCode == 40) game.down = false;
    });
  };

  const render = () => {
    display.fill(game.world.backgroundColor);
    display.drawRectangle(game.player.x, game.player.y, game.player.width, game.player.height, game.player.color);
    display.render();
  };

  const update = () => {
    game.update();
  };

  return {
    init: init
  };
})();
window.addEventListener("load", function(event) {
  App.init();
});
