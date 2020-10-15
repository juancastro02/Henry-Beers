import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../Alertas/alertaContext';
import AuthContext from '../Alertas/authContext';
// import { getUsers, createUser, updateUser } from '../../Redux/user'
import axios from 'axios'



const NuevaCuenta = (props) => {

    // extraer los valores del context
    /* const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    const authContext = useContext(AuthContext);
    const { mensaje, autenticado,  registrarUsuario } = authContext; */

    // // En caso de que el usuario se haya autenticado o registrado o sea un registro duplicado
    // useEffect(() => {
    //     if(autenticado) {
    //         props.history.push('/proyectos');
    //     }

    //     if(mensaje) {
    //         mostrarAlerta(mensaje.msg, mensaje.categoria);
    //     }
    //     // eslint-disable-next-line
    // }, [mensaje, autenticado, props.history]);

    // State para iniciar sesión
    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    // extraer de usuario
    const { nombre, email, password, confirmar } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }


    const onSubmit = (e) =>{
        e.preventDefault()
    }

    // Cuando el usuario quiere iniciar sesión
    const regisCuenta = async () => {
        //e.preventDefault();

        //crear axios al registro
        // const { data } = await axios.post('http://localhost:4000/users')
        const info = {
            name: usuario.nombre,
            email: usuario.email,
            password: usuario.password
            /* confirmar: "" */// esto no va por bbdd
        }
        const { data } = await axios.post('http://localhost:4000/users', info)
        console.log(data)
        alert('Usuario Creado!')
        guardarUsuario({
            name: "",
            email: "",
            password: ""
            /* confirmar: "" */// esto no va por bbdd, si no que es una funcion comparadora entre pass
        })

     

        /*   const dispatch = useDispatch()
        cuando presiones registrar haga el llamado a   */

        //  Validar que no haya campos vacios
        /*  if( nombre.trim() === '' || 
          email.trim() === '' || 
          password.trim() === '' || 
         confirmar.trim() === '' ) {
             alert('Todos los campos son obligatorios', 'alerta-error');
            return;
          }
 
          Password minimo de 6 caracteres
          if(password.length < 6) {
             alert('El password debe ser de al menos 6 caracteres', 'alerta-error');
              return;
          }
 
         //  Los 2 passwords no son iguales
          if(password !== confirmar) {
             alert('Los passwords no son iguales', 'alerta-error');
              return;
          }
  */
        //  Pasarlo al action
        /*  registrarUsuario({
             nombre, 
             email, 
             password
         }); */
    }



    return (
        <div className="form-usuario">
            {/* { alerta ? ( <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div> )  : null } */}
            <div className="contenedor-form sombra-dark">
                <h1>Crear una cuenta</h1>

                <form
                 onSubmit={(e)=>onSubmit(e)}  //<form onSubmit={(e)=> (e)} > 
                //  const handleSubmit =(e)=>{
                //  e.preventDefault()
                //  alert('Producto creado exitosamente')
                //    }
                >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu Nombre"
                            value={nombre}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Password</label>
                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repite tu Password"
                            value={confirmar}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className=" btn btn-primario btn-block" onClick={() => regisCuenta()} />
                    </div>
                </form>

                <Link to={'/login'} className="enlace-cuenta">
                    Volver a Iniciar Sesión
                </Link>
            </div>
        </div>
    );
}

export default NuevaCuenta;