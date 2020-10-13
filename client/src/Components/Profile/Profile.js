import React from 'react'
import './Profile.css'


const Profile = () =>{
    var now = new Date().toLocaleTimeString();
    setTimeout("now()", 1000)
    
    return(
           <div style={{ display: 'flex', flexDirection: "column", textAlign: "center"}} >
        <h1 style={{marginRight: "auto", marginLeft: "auto"}} > Hola Admin!</h1>
    <h2 >La hora es: {now}</h2>
       </div>
    )
    
}


  

  export default Profile 
  //setTimeout(function, milliseconds, param1, param2, ...)