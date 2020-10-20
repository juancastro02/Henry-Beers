import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { postUser, cleanMessage } from '../../Redux/user'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'



const NuevaCuenta = ({ history }) => {

    const user = useSelector(store => store.user.user);
    const dispatch = useDispatch()


    useEffect(() => {
        if (user.token) {
            history.push('/')
          }
    
        return () => dispatch(cleanMessage())
    
      }, [user])


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

     
    }

    const handleCreate = () => {
        const info = {
            name: usuario.nombre,
            email: usuario.email,
            password: usuario.password
        }
    
          dispatch(postUser(info))
          history.push('/login');
        
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
                        <input type="submit" className=" btn btn-primario btn-block" onClick={(e) => handleCreate(e)} />
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