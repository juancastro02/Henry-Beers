import React from "react";

const Footer = () => {
  return (
    <div>
      <footer id="footer" className="section footer">
        <div className="container">
          <div className="footer-container">
            <div className="footer-center">
              <h3>EXTRAS</h3>
              <a href="#">Regalos</a>
              <a href="#">Localizacion</a>
            </div>
            <div className="footer-center">
              <h3>INFORMACION</h3>
              <a href="#">Sobre Nosotos</a>
              <a href="#">Politica de Privacidad</a>
              <a href="#">Terminos & Condiciones</a>
              <a href="#">Contactanos</a>
            </div>
            <div className="footer-center">
              <h3>MI CUENTA</h3>
              <a href="#">Inicio</a>
              <a href="#">Mi carrito</a>
              <a href="#">Deseados</a>
              <a href="#">Salir</a>
            </div>
            <div className="footer-center">
              <h3>CONTACTANOS</h3>
              <div>
                <span>
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                42 Dream House, Dreammy street, 7131 Dreamville, USA
              </div>
              <div>
                <span>
                  <i className="far fa-envelope"></i>
                </span>
                company@gmail.com
              </div>
              <div>
                <span>
                  <i className="fas fa-phone"></i>
                </span>
                456-456-4512
              </div>
              <div>
                <span>
                  <i className="far fa-paper-plane"></i>
                </span>
                Dream City, USA
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
