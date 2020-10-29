import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getcarrito } from "../Redux/Carrito";
import { logoutUser } from "../Redux/user";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from '../Components/SearchBar/SearchBar'
import "./Home.css";

const Home = ({setSearchApp}) => {
  const usuario = useSelector((store) => store.user.user);
  const carrito = useSelector((store) => store.carrito.carrito);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(usuario.id);
    console.log(usuario);
    dispatch(getcarrito(1));
    // const fetchData =async()=>{
    //   await axios.post(`http://localhost:4000/users/1/carrito`)
    // }
    // fetchData()
  }, [usuario]);

  return (
    <div>
      <header id="home" className="header">
        <nav className="navbar fixed-top navbar-light bg-light">
          <div className="nav-center container">
            <a href="#home" className="logo">
              <h1>
                HENRY <span>BEERS</span>
              </h1>
            </a>
            <div className="nav-menu">
              <div className="nav-top">
                <div className="logo">
                  <h1>
                    HENRY<span>BEERS</span>
                  </h1>
                </div>
                <div className="close">
                  <i className="fas fa-times"></i>
                </div>
              </div>
              <ul className="nav-list">
                <li className="nav-item">
                  <a href="#home" className="nav-link scroll-link">
                    Inicio
                  </a>
                </li>
                <li className="nav-item">
                <Link to='/catalogo' >
                  <a href="#shop" className="nav-link scroll-link">
                    Cervezas
                  </a>
                  </Link>
                </li>

                <li className="nav-item">
                <Link to="/catalogo">
                  <a href="#new" className="nav-link scroll-link">
                    Hot
                  </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="#blog" className="nav-link scroll-link">
                    Nosotros
                  </a>
                </li>
              </ul>
            </div>

            <div className="nav-icons">
              {/* hacer menu desplegable para login y registrarse menu dropdown*/}
              {!usuario.id && (
                <Link to="/login">
                  {" "}
                  <span>
                    <i className="fas fa-user"></i>
                  </span>
                </Link>
              )}
              {/* {!usuario.id && (
                <Link to="/NuevaCuenta">
                  {" "}
                  <i className="fas fa-user"></i>
                </Link>
              )} */}

              {/* abrir searchbar para buscar */}

              {/* <span>
                <i className="fas fa-search"></i>    
                </span> */}

              {/* ver el carrito */}
              <span>
                <i className="fas fa-shopping-basket"></i>
              </span>
            </div>
                <SearchBar setSearchApp={setSearchApp} />
            <div className="hamburger">
              <i className="fas fa-bars"></i>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Home;
