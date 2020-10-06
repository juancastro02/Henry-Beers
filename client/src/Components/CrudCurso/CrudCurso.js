import React, { useState } from 'react'
import './CrudCurso.css'

const CrudCurso = () => {
   const [video, setVideo] = useState({
       name: "",
       description:"",
       price:0,
       stock:0,
       image:""
   });
    
 const {name, description, price, stock, image} = video

   const handleSubmit =(e)=>{
     e.preventDefault()
     console.log(video)
     alert('enviado')
   }

   const handleChange = e =>{
    setVideo({
      ...video,
      [e.target.name] : e.target.value
    })
  }
    return(
        <div className='formCrudProduct' >
        <form onSubmit={(e)=> handleSubmit(e)} >
          <h6>Name</h6>
          <input type='text'  value={name} onChange={handleChange} name='name' placeholder='Ingrese el nombre...'/>  
          <h6>Description</h6>
          <input type='text'  value={description} onChange={handleChange} name='description' placeholder='Ingrese una descripción...'/>  
          <h6>Price</h6>
          <input  type='number'  value={price} onChange={handleChange} name='price' /> 
          <h6>Stock</h6>
          <input type='number'  value={stock} onChange={handleChange} name='stock' />  
          <h6>Image</h6>
          <input  type='text'  value={image} onChange={handleChange} name='image'  /> <br/><br/>
          <button type='submit'>Enviar</button> 
        </form>
        </div>
    )
}

export default CrudCurso