import "../scss/app.scss";

import { Display } from "./index";
import { Controller } from "./index";
import { Game } from "./index";
import { Engine } from "./index";

const App = (() => {
  const $Module = document.querySelector(".app");

  const display = new Display(document.querySelector("canvas"));
  const init = () => {
    // const controler = new Controller();
    // const game = new Game();
    // const engine = new Engine(1000 / 30, render, update);

    events();
    display.render();
    //engine.start();
  };
  const events = () => {};

  return {
    init: init
  };
})();
App.init();
