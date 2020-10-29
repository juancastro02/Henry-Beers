import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// const glide1 = document.getElementById("glide1");
// const glide2 = document.getElementById("glide2");
// const glide3 = document.getElementById("glide3");

// if (glide1)
//   new Glide(glide1, {
//     type: "carousel",
//     startAt: 0,
//     autoplay: 3000,
//     hoverpause: true,
//     perView: 1,
//     animationDuration: 800,
//     animationTimingFunc: "linear",
//   }).mount();

// if (glide2)
//   new Glide(glide2, {
//     type: "carousel",
//     startAt: 0,
//     perView: 5,
//     hoverpause: false,
//     autoplay: 2000,
//     animationDuration: 800,
//     animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
//     breakpoints: {
//       1200: {
//         perView: 3,
//       },
//       768: {
//         perView: 2,
//       },
//     },
//   }).mount();

// if (glide3) {
//   new Glide(glide3, {
//     type: "carousel",
//     startAt: 0,
//     perView: 3,
//     rewin: false,
//     autoplay: 3000,
//     animationDuration: 800,
//     animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
//     breakpoints: {
//       998: {
//         perView: 2,
//       },
//       768: {
//         perView: 1,
//       },
//     },
//   }).mount();
// }

const GlideBanner = () => {
  return (
    <div>
      <main>
        <section className="hero">
          <div className="glide glide1" id="glide1">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides glide__hero">
                <li className="glide__slide">
                  <div className="banner">
                    <div className="banner-content">
                      <span>Lo Nuevo del 2020</span>
                      <h1>CERVEZAS HECHAS PARA VOS!</h1>
                      <h3>Importadas de todo el mundo y al mejor precio</h3>
                      <div className="buttons-group">
                        <Link to="/catalogo">
                          <button>VER MAS</button>
                        </Link>
                      </div>
                      <img
                        src={require("../img/b3.png")} 
                        className="special_01"
                        alt=""
                      ></img>
                    </div>
                    <li className="glide__slide">
                      <div className="banner banner1">
                        <div className="banner-content">
                          <span>Lo Nuevo del 2020</span>
                          <h1>CERVEZAS HECHAS PARA VOS!</h1>
                          <h3>Importadas de todo el mundo y al mejor precio</h3>
                          <div className="buttons-group">
                            <Link to="/catalogo">
                              <button>VER MAS</button>
                            </Link>
                          </div>
                        </div>
                        <img
                          src={require("../img/b1.png")}
                          className="special_02"
                          alt=""
                        />
                      </div>
                    </li>
                    <li className="glide__slide">
                      <div className="banner">
                        <div className="banner-content">
                          <span>Lo Nuevo del 2020</span>
                          <h1>CERVEZAS HECHAS PARA VOS!</h1>
                          <h3>Importadas de todo el mundo y al mejor precio</h3>
                          <div className="buttons-group"></div>
                        </div>
                        <img
                          src={require("../img/b2.png")}
                          className="special_03"
                          alt=""
                        />
                      </div>
                    </li>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="glide__arrows" data-glide-el="controls">
            <button
              className="glide__arrow glide__arrow--left"
              data-glide-dir="<"
            >
              <i className="fas fa-arrow-left"></i>
            </button>
            <button
              className="glide__arrow glide__arrow--right"
              data-glide-dir=">"
            >
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GlideBanner;
