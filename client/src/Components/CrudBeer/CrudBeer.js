import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import './CrudBeer.css'
import {useSelector, useDispatch} from 'react-redux'
import {getCategory} from '../../Redux/category'

const CrudBeer = () => {

  const dispatch = useDispatch()
  const categories = useSelector(store=> store.category.categories)
  useEffect(()=>{
   dispatch(getCategory())
  },[])

   const [video, setVideo] = useState({
       name: "",
       description:"",
       price:0,
       stock:0,
       image:"",
       category:[]
   });
    
 const {name, description, price, stock, image, category} = video

   const submitBeer= async()=>{
     const info = {
       name: video.name,
       description: video.description ,
       price: video.price,
       stock: video.stock,
       image: video.image,
       category: video.category
     }

     const {data} = await axios.post('http://localhost:4000/products/create', info)
     console.log(data)
   }

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
          {categories.map((e)=>(
            <Fragment>
            <input type='checkbox' value={category} onChange={handleChange} name='category'/> 
            {console.log(category)}
            <span>{e.name}</span>
            </Fragment>
          ))}
          <button type='submit' onClick={()=> submitBeer()} >Enviar</button> 
        </form>
        </div>
    )
}

export default CrudBeer