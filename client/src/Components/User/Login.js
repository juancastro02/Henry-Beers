import React, { useState } from "react";
import { Link } from "react-router-dom";
import updateUser from '../../Redux/user'

//falta la auth que compare las pass para loguear.

const Login = () => {
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




  //trabajaria sobre un segundo estado, a cual tenemos acceso a esos datos
  // name , username,email,password. --- > models/user
 
  // const update = () => {--------------->??? ES NECESARIO CREAR OTRO ESTADO PARA UPDATEAR?
  //   // State para iniciar sesión
  //   const [userdata, setuserData] = useState({
  //     name: "",
  //     username: "",
  //     email: "",
  //     password:"",
  //     isAdmin: false
  //   });
 
 
  // //Updatear usuario
  //  const updateUsuario = async() =>{
  //   const info = {
  //     name: user.name,
  //     username: user.username,
  //     email: user.email,
  //     password:user.password,
  //     isAdmin: user.isAdmin,
  //   }
  //      const {data} = await axios.put(`http://localhost:4000/users/:id`, info)
  //      console.log(data)
  //      alert('Usuario actualizado')
  //      setUser({
  //       // id: "",
  //       // name: "",------------> ???
  //       // description: ""
  //      })
  //  }

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
            /* onClick={}  agregar la funcion  que compara el usuario autenticado*/
          />
        </form>
          <Link to={"/NuevaCuenta"} className="enlace-cuenta">No tenes cuenta? Registrate</Link>
      </div>
    </div>
  );
};

export default Login;