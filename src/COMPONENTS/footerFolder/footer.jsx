import React from "react";
import "./styles.css";

import logo from "./logo.webp";
const Footer = ({ nextPageFunction }) => {
  return (
    <>
      <div>
        <div className="next-page-buttons">
          <button
            onClick={() => {
              nextPageFunction("-");
            }}
          >
            Back
          </button>
          <button
            onClick={() => {
              nextPageFunction("+");
            }}
          >
            Next
          </button>
        </div>
      </div>
      <div className="footer-contenedor">
        <div className="creditos">
          Sitio hecho por
          <a href="https://jacktony12.github.io/Leon_WEBSITE/" target="_blank">
            Antony Leon
          </a>
          <hr />
          <p>
            Imagenes libres de derechos de Autor en alta calidad, este sitio usa
            la API de
            <a href="https://pixabay.com/es/" target="_blank">
              Pixabay
            </a>
              Las imagenes pueden ser limitadas.
              Fecha
            2021-2022
          </p>
        </div>
        <div className="logo-contenedor">
          <img src={logo} alt="" />
        </div>
      </div>
    </>
  );
};

export default Footer;
