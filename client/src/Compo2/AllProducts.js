import React from "react";

const AllProducts = () => {
  return (
    <div>
      <section class="section" id="shop">
        <div class="title-container">
          <div class="section-titles">
            <div class="section-title active" data-id="latest">
              <span class="dot"></span>
              <h1 class="primary-title">Todas las cervezas</h1>
            </div>
          </div>
        </div>

        <div class="shop-center product-center container"></div>
      </section>

      <div class="section brands container">
        <div class="glide" id="glide2">
          <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
              <li class="glide__slide">
                <img src={require("../img/scotish.png")} alt="" />
              </li>
              <li class="glide__slide">
                <img src={require("../img/b1.png")} alt="" />
              </li>
              <li class="glide__slide">
                <img src={require("../img/b2.png")} alt="" />
              </li>
              <li class="glide__slide">
                <img src={require("../img/b3.png")} alt="" />
              </li>
              <li class="glide__slide">
                <img src={require("../img/hobsons-craft-beer-cans.png")} cla alt="" />
              </li>
              <li class="glide__slide">
                <img src={require("../img/DTX-Cans-Web.png")} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
