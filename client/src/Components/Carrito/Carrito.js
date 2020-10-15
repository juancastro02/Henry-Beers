 import React, { useEffect } from 'react'

const Carrito = () =>{

    useEffect(()=>{
        const fetchData =async()=>{
          await axios.post(`http://localhost:4000/user/1/carrito`)    
        }
        fetchData()
    },[])

    return( 
        <div>
    
        </div>
    )
}

export default Carrito