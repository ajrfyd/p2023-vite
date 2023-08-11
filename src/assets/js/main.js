import { menu } from "./menu.js";
import { link } from "./link.js";
import { port } from "./port.js";
import { smooth } from "./smooth.js";


window.addEventListener("load", () => {
  menu();
  link();
  port();
  smooth();
});