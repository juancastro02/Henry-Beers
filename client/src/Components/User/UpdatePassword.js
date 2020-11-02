import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {cleanMessageResetPassword, updateUser } from '../../Redux/user'


export default function UpdatePassword({token}) {
  const resetPasswordMessage = useSelector(store => store.user.reset_password)
  const dispatch = useDispatch()

  const [Password, setResetPassword] = useState('');
  
  const [error, setError] = useState(false);
  const [usuario, guardarUsuario] = useState({
    password: '',
    nueva: '',
    confirm: ''
  });
  
 
  const handleUpdatePassword = async () => {

    if(usuario.confirm != usuario.nueva){
      setError(true)
    }

    if (usuario.confirm == usuario.nueva) {
      setError(false)
      // dispatch(updateUser(usuario.password, token));

      const info = {
        actualPassword: usuario.password,
        newPassword: usuario.nueva
      }

      const config = {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }

      const { data } = await axios.put('http://localhost:4000/auth/update/password', info, config )

      alert('La contraseña ha sido cambiada con exito')

    }
  }
  

  // extraer de usuario
  const { email, password, nueva } = usuario;
  
  const handleInput = (e) => {
    // if (error) setError("");
    // if (Password) setResetPassword('');
    guardarUsuario({ ...usuario, [e.target.name]: e.target.value });

  };


  const handleSubmit = (e) =>{
    e.preventDefault()
  }


  useEffect(() => {
    return () => dispatch(cleanMessageResetPassword())
  }, [])

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Cambiar Contraseña</h1>

        <form onSubmit={handleSubmit}>
        <hr />

        {
          error ? <div className='mx-auto text-center'><span className='text-danger'> Las contraseñas no coinciden </span></div>: null
        }

          {
            resetPasswordMessage && <div className='mx-auto text-center'><span className={resetPasswordMessage.ok === true ? 'text-success' : 'text-danger'}>{resetPasswordMessage.message}</span></div>
          }
          <div className="campo-form">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu Password"
              value={usuario.password}
              onChange={handleInput}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="confirmar">Nueva contraseña</label>
            <input
              type="password"
              id="nueva"
              name="nueva"
              placeholder="Escribe tu Password"
              value={usuario.nueva}
              onChange={handleInput}
            />
          </div>
          
          <div className="campo-form">
            <label htmlFor="confirmar">Confirmar contraseña</label>
            <input
              type="password"
              id="confirm"
              name="confirm"
              placeholder="Repite tu Password"
              value={usuario.confirm}
              onChange={handleInput}
            />
          </div>

          <div className="campo-form">
            <button
              className=" btn btn-primario btn-block"  onClick={() => handleUpdatePassword()} 
            >Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}