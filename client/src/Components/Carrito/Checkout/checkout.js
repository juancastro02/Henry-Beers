import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './Checkout.css';
import postCheckout from '../../../Redux/Store/store'



export default function FormularioDatosEnvio() {

	const carrito = useSelector(state => state.carrito.carrito);
	const dispatch = useDispatch();

	
	const [inputValues, setInputValues] = useState({
		pais:'',
		ciudad: '',
		direccion_envio: '',
		codigo_postal: 0,
		numero_telefono: 0,
		
	});
	const {pais, ciudad,direccion_envio, codigo_postal,numero_telefono } = ordenCompra
	

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

    const handleChange = async e =>{
		e.preventDefault();
		const ordenCreada = {...inputValues}
	} 

	const handleCreate = e => {


	 setInputValues({...inputValues, [e.target.name]: e.target.value});
	};

	const handleBuy = async(e) =>{ 
		
	/* const ordenCreada = {...inputValues, status:'carrito'} */
    if(!user.id){
      alert('Debes logearte primero')
    }

    if(user.id){//con esto paso a procesaro
      const {data} = await axios.put(`http://localhost:4000/users/procesando/${carrito.id}` ) 
      alert('Compra exitosa')
	}
	
	dispatch(postCheckout())//paso los datos a la bbdd
   
    }



	return (
		<div className="productFormAdmin overAll">
			<div className="productTableTitleContainer">
				<div className="productTableTitle">
					<form className="FormEnvio">
						<h3>Formulario de Envio</h3>

						{/* <div className="lineaformularioenvio">
							<span htmlFor="Nombre" className="">
								Nombre:
							</span>
							<input
								className="product"
								type="text"
								name="nombre_usuario"
								value={nombre_usuario}
								placeholder="Nombre"
								onChange={handleCreate}
							/>
						</div>

						<div className="lineaformularioenvio">
							<span htmlFor="Apellido" className="">
								Apellido:
							</span>
							<input
								className="product"
								type="text"
								name="apellido_usuario"
								value={apellido_usuario}
								placeholder = "Apellido"
								onChange={handleCreate}
							/>
						</div> */}

						<div className="lineaformularioenvio">
							<span htmlFor="Pais" className="">
								Pais:
							</span>
							<input
								className="product"
								type="text"
								name="Pais"
								value={pais}
								placeholder="Pais"
								onChange={handleCreate}
							/>
						</div>

						<div className="lineaformularioenvio">
							<span htmlFor="Ciudad" className="">
								Ciudad:
							</span>
							<input
								className="product"
								type="text"
								name="Ciudadad"
								value={ciudad}
								placeholder="Ciudad"
								onChange={handleCreate}
							/>
						</div>

						<div className="lineaformularioenvio">
							<span htmlFor="Direccion" className="">
								Dirección:
							</span>
							<input
								className="product"
								type="text"
								name="eireccion_envioon_envio"
								value={direccion_envio}
								placeholder="Dirección"
								onChange={handleCreate}
							/>
						</div>

						<div className="lineaformularioenvio">
							<span htmlFor="CodigoPostal" className="">
								Código Postal:
							</span>
							<input
								className="product"
								type="text"
								name="codigo_postal"
								value={codigo_postal}
								placeholder="Código Postal"
								onChange={handleCreate}
							/>
						</div>

						<div className="lineaformularioenvio">
							<span htmlFor="Telefono" className="">
								Telefono:
							</span>
							<input
								className="product"
								type="text"
								name="numero_telefono"
								value={numero_telefono}
								placeholder="Telefono"
								onChange={handleCreate}
							/>
						</div>

						<div className="formActionContainer">
                            <button
                             type="submit"
                              className="SendBtn"
                               value="Edit"
                                onClick={handleBuy}>
								Aceptar
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
