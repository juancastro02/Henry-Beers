import React from "react";

const Categories = () => {
  return (
    <div>
      <section class="section category">
        <h2 class="title">Encontra los mejores sabores a tu medida!</h2>
        <div class="category-center container">
          <div class="category-box">
            <img src={require("../img/image2.jpg")} alt="" />
            <div class="content">
              <h2>Cerveza Lager</h2>
              <span>5 Cervezas</span>
              <a href="#">comprar ya</a>
            </div>
          </div>

          <div class="category-box">
            <img src={require("../img/Guinness-01.jpg")} alt="" />
            <div class="content">
              <h2>Cerveza Negra</h2>
              <span>4 Cervezas</span>
              <a href="#">comprar ya</a>
            </div>
          </div>

          <div class="category-box">
            <img src={require("../img/beer.jpg")} alt="" />
            <div class="content">
              <h2>Cerveza Roja</h2>
              <span>7 Cervezas</span>
              <a href="#">comprar ya</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
