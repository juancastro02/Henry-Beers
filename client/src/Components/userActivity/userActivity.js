import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { BrowserRouter, Route} from 'react-router-dom'
import  {useDispatch, useSelector} from "react-redux"; 
import {logoutUser} from '../../Redux/user'
import misCarritos from '../MisCarritos/MisCarritos'
import MisCarritos from "../MisCarritos/MisCarritos";


const UserActivity = ({history}) => {

    const usuario = useSelector(store => store.user.user)
    const dispatch = useDispatch()


   useEffect(()=> {
    if (!usuario.id) {
        history.push("/")
    }

   },[usuario]);
    
    return (
        <BrowserRouter>
       
        <h1 style= {{textAlign: "center", marginTop: "35px", fontFamily: "fantasy"}}>Panel de Usuario</h1>
     
            <div style={{  height: "130px", backgroundColor: "#ffe033"  , color: "white", marginTop: "20px", marginLeft: "auto", marginRight: "auto" }} >
                <div style={{ padding: "15px 15px 15px 15px", color:"white" }} >
                    <div>
                        <Link> <h4 style={{color:"grey", textAlign:"center" }}>Datos Personales</h4> </Link>
                    </div>
                    <div>
                        <Link to= "/misCarritos"> <h4 style={{color:"grey", textAlign:"center" }}>Mis carritos</h4> </Link>
                    </div>
                    <div>
                       <Link to= "/" onClick={()=>dispatch(logoutUser())}>  
                        <h4 style={{color:"grey", textAlign:"center" }}>Cerrar Sesión</h4> 
                        </Link>
                    </div>
                </div>
            </div>
            <div>
            <Route
                    exact path='/misCarritos'
                    render={() => <MisCarritos />}
                />

              
            </div>
        
        </BrowserRouter>
    )
}

export default UserActivity