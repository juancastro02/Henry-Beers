import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../Redux/user.js";
import { useDispatch, useSelector } from "react-redux"; 

//falta la auth que compare las pass para loguear.

const Login = ({history}) => {

  const usuario = useSelector(store => store.user.user)
  const dispatch = useDispatch();

  useEffect(() => {
    if (usuario.token) {
      history.push('/')
    }

  }, [ usuario])

  // State para iniciar sesión
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  // extraer de usuario
  const { email, password } = user;

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    console.log(email);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    //aca pasar axios para SIGNUP / LOGIN
  };

  const handleLogin = () => {
      dispatch(loginUser(user))
  }

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="email"> Email </label>
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
            <label htmlFor="password">Password </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={onChange}
            />
          </div>

          <input
            type="submit"
            className="btn btn-primario btn-block"
            onClick={(e)=>handleLogin(e)}
          />
        </form>
          <Link to={"/NuevaCuenta"} className="enlace-cuenta">No tenes cuenta? Registrate</Link>
      </div>
    </div>
  );
};

export default Login;