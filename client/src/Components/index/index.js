import React from "react";
import Catalogo from "../Catalogo/Catalogo";
import Carrusel from "../Carrusel/carrusel";

const Inicio = () => {
  return (
    <div>
      <div>
        <img
          src="https://images.ctfassets.net/sz2xpiwl6od9/2UuFQgcfoDaQJ6LlcsXXhj/aaa473b7d45afbd4334dfab7d7a2e78f/Elements-of-Beer-CBB37-4-Fewer-Yeasts.jpg?w=1600&fm=jpg"
          style={{
            width: "2000px",
            height: "650px",
            marginTop: "3px",
            display: "flex",
            justifyContent: "center",
          }}
        />
    <h2>Que opinan nuestros clientes</h2>
        <Carrusel />
      </div>
      <h2>Hecha un vistazo a nuestros productos estrellas</h2>
      <div>
        <Catalogo />
      </div>
    </div>
  );
};
export default Inicio;
