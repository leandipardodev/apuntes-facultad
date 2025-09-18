import cursorStyles from "./cursor.js";
import fetchStart, { flechas, ventana } from "./fetch-html.js";
import focus from "./focus.js";
import rotarHoja from "./rotar-hoja.js";
import seleccionarSemestre from "./select-semestre.js";
document.addEventListener("DOMContentLoaded", (e) => {
  focus();
  rotarHoja("#booklet-rotate");
  seleccionarSemestre();
  cursorStyles();
  setTimeout(() => {
    fetchStart();
    flechas();
    ventana();
  }, 0);
});
