import React, { useState } from "react";

const FormularioDatosEnvio = () => {
  const [form, actualizarForm] = useState({
    pais: "",
    ciudad: "",
    direccion_envio: "",
    codigo_postal: "",
    numero_telefono: "",
  });

  const actualizarState = (e) => {
    actualizarForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const {
    pais,
    ciudad,
    direccion_envio,
    codigo_postal,
    numero_telefono,
  } = form;
 
	useEffect(() => {
		setInputValues({
			    pais:'',
				ciudad: '',
				direccion_envio: '',
 				codigo_postal: '',
				numero_telefono: '',
				
			});
		},
 		[ carrito.id ]
 	);




  /* const handleBuy = async(e) =>{ 
	const user = useSelector(store => store.user.user)		 
        if(!user.id){
          alert('Debes iniciar sesion')
         }
    
        if(user.id){//con esto paso a procesado
          const {data} = await axios.put(`http://localhost:4000/users/procesando/${carrito.id}` ) 
          alert('Compra exitosa')
    	} */




  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Finalizar Compra</h1>

        <form
        /*  onSubmit={(e)=>onSubmit(e)} */
        >
          <div className="campo-form">
            <label htmlFor="Pais">Pais</label>
            <input
              type="text"
              id="nombre"
              name="Pais"
              placeholder="Pais"
              value={pais}
              /* onChange={onChange} */
            ></input>
          </div>

          <div className="campo-form">
            <label htmlFor="ciudad">Ciudad</label>
            <input
              type="ciudad"
              id="ciudad"
              name="ciudad"
              placeholder="Ciudad"
              value={ciudad}
              /* onChange={onChange} */
            />
          </div>

          <div className="campo-form">
            <label htmlFor="direccion">Direccion</label>
            <input
              type="direccion"
              id="direccion"
              name="direccion"
              placeholder="calle, numero, dpto..."
              value={direccion_envio}
              /* onChange={onChange} */
            />
          </div>

          <div className="campo-form">
            <label htmlFor="codigo_postal">Codigo Postal</label>
            <input
              type="codigo_postal"
              id="codigo_postal"
              name="codigo_postal"
              placeholder="Codigo Postal"
              value={codigo_postal}
              /* onChange={onChange} */
            />
          </div>
          <div className="campo-form">
            <label htmlFor="Telefono">Telefono</label>
            <input
              type="numero_telefono"
              id="numero_telefono"
              name="numero_telefono"
              placeholder="0111561111111"
              value={numero_telefono}
              /* onChange={onChange} */
            />
          </div>

          <div className="campo-form">
            <button
              type="submit"
              className=" btn btn-primario btn-block"
              /* onClick={(e) => handleCreate(e)} */
            >
              Comprar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormularioDatosEnvio;
