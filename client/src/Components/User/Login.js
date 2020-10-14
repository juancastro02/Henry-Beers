import React, { useState } from 'react';

const Login = () => {

  // State para iniciar sesión
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  // extraer de usuario
  const { email, password } = user;

  const onChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
    console.log(email)
  }

  const onSubmit = e => {
    e.preventDefault();
  }

  return (
    <div>
      <div><h1>Iniciar Sesión</h1></div>
      <form onSubmit={onSubmit}>
        <div>
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
        <div>
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

        <input type="submit" value="Iniciar Sesión" />
      </form>
      <div>
        <label>No tenes cuenta? </label>
        <input type="submit" value="Registrate" />
      </div>
    </div>

  );
}

export default Login;