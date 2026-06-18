import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "jotai";
import { store } from "../ReactComponents/store.js";

import ReactUI from "./ReactUI.jsx";
import initGame from "../ReactComponents/initGame.js";

import "./index.css";

const ui = document.getElementById("ui");
const GAME_WIDTH = 1920;
const GAME_HEIGHT = 1080;

document.documentElement.style.setProperty("--width", GAME_WIDTH);
document.documentElement.style.setProperty("--height", GAME_HEIGHT);
document.documentElement.style.setProperty("--scale", "1");

new ResizeObserver(() => {
  document.documentElement.style.setProperty(
    "--scale",
    Math.min(
      ui.parentElement.offsetWidth / ui.offsetWidth,
      ui.parentElement.offsetHeight / ui.offsetHeight
    )
  );
}).observe(ui.parentElement);

createRoot(document.getElementById("ui")).render(
  <StrictMode>
    <Provider store={store}>
      <ReactUI />
    </Provider>
  </StrictMode>
);

initGame();
