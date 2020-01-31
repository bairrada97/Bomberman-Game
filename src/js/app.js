import "../scss/app.scss";

import { Display } from "./index";
import { Controller } from "./index";
import { Game } from "./index";
import { Engine } from "./index";

import LocomotiveScroll from "locomotive-scroll";

const App = (() => {
  const $Module = document.querySelector(".app");
  let display;
  let controller;
  let game;
  let engine;

  const init = () => {
    display = new Display($Module.querySelector("canvas"));
    controller = new Controller();
    game = new Game();
    engine = new Engine(1000 / 30, render, update);
    events();
    display.render();
    engine.start();
    display.buffer.canvas.height = game.world.height;
    display.buffer.canvas.width = game.world.width;
  };
  const events = () => {
    document.addEventListener("keydown", ({ keyCode, type }) => controller.keyListener({ keyCode, type }));
    document.addEventListener("keyup", ({ keyCode, type }) => controller.keyListener({ keyCode, type }));
  };

  const render = () => {
    display.fill(game.world.backgroundColor);
    display.drawRectangle(game.player.x, game.player.y, game.player.width, game.player.height, game.player.color);
    display.drawRectangle(game.enemy.x, game.enemy.y, game.enemy.width, game.enemy.height, game.enemy.color);
    display.render();
  };

  const update = () => {
    if (controller.left) {
      game.player.moveLeft();
    }
    if (controller.right) {
      game.player.moveRight();
    }
    if (controller.up) {
      game.player.moveUp();
      controller.up = false;
    }
    game.update();
  };

  return {
    init: init
  };
})();
window.addEventListener("load", function(event) {
  App.init();
});
