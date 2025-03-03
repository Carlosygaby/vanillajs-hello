import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronombres = ["La", "Nuestra"];
let adjetivos = ["pequeña", "gran"];
let objeto = ["casa", "estafa"];

const generarDominio = (numero) => {
  let listaDominios = "";
  for (let i = 0; i < numero; i++) {
    let dominio =
      pronombres[Math.floor(Math.random() * pronombres.length)] +
      adjetivos[Math.floor(Math.random() * adjetivos.length)] +
      objeto[Math.floor(Math.random() * objeto.length)];

    listaDominios += `<li>${dominio}.com</li>`;
  }
  document.getElementById("lista").innerHTML = listaDominios;
};

window.onload = function () {
  generarDominio(8);
};
