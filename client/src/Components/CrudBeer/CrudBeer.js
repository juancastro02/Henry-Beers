import React, { useState, useEffect, Fragment } from 'react'
import Select from 'react-select'
import axios from 'axios'
import './CrudBeer.css'
import {useSelector, useDispatch} from 'react-redux'
import {getCategory} from '../../Redux/category'
import {getbeers} from '../../Redux/beer'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
  root: {
    borderRadius:'0 0 10px 10px',
    color: 'white',
    backgroundColor: 'rgb(108 117 125)',
  }
});

const CrudBeer = () => {

  const dispatch = useDispatch()
  const categories = useSelector(store=> store.category.categories)
  const beer = useSelector(store => store.beer.beers)
   useEffect(()=>{
   dispatch(getCategory())
   dispatch(getbeers())
  },[])

   const [video, setVideo] = useState({
       id: "",
       name: "",
       description:"",
       price:"",
       stock:"",
       image:"",
   });

  const [categoria, setCategory] = useState([])
     
 const {name, description, price, stock, image} = video

   const handlePost= async()=>{
     const info = {
       name: video.name,
       description: video.description ,
       price: video.price,
       stock: video.stock,
       image: video.image,
     }

     console.log(video.id, categoria)
     const {data} = await axios.post('http://localhost:4000/products/create', info)
     console.log(data)
     {categoria.map(async(e)=>{
      console.log(e.value) 
      console.log(data.id)
       await axios.post(`http://localhost:4000/products/${data[0].id}/category/${e.value}`)
     })}
   
   }


   const handleSearch = async (product) => {
    setVideo(product)
   };



const handleUpdate = async () => {
  if (!video.name || !video.description || !video.price || !video.stock || !video.image) {
      return alert("Debe completar todos los campos para agregar un producto");
  };
  
  const dataPost = {
      name: video.name,
      description: video.description,
      price: video.price,
      stock: video.stock,
      image: video.image
  };

   const {data} = axios.put(`http://localhost:4000/products/${video.id}` ,dataPost)
   console.log(categoria)
   categoria.map(async(e)=>( 
    await axios.post(`http://localhost:4000/products/${video.id}/category/${e.value}`)
   ))
};



   const handleSubmit =(e)=>{
     e.preventDefault()
     alert('enviado')
   }

   const handleChange = e =>{
   setVideo({
      ...video,
      [e.target.name] : e.target.value
    })
  }


  const classes = useStyles();
    return(
      <div style={{marginTop: "-100px"}} >
      <div className="productsAdmin" >
          <div className={classes.root}  style={{width: "200px"}} >
          <h3 className='h111'>Beers</h3>
            <List component="nav" aria-label="secondary mailbox folders">
              {beer && beer.map(p => <ListItem button onClick={()=>handleSearch(p)} value={p.id}>
                <ListItemText primary={p.name} secondary={p.price}/>
              </ListItem>)}
            </List>
          </div>
      </div>
        <div className='formCrudProduct' style={{marginLeft: "700px"}} >
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
          <Select
          isMulti
        
          options={categories.map((e)=> ({
            label: e.name, value: e.id
          }))}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={setCategory}
          name= "category"
          />
          <button type='submit' onClick={()=> handlePost()} >Enviar</button> 
          <button type='submit' onClick={()=> handleUpdate()} >Update</button>
        </form>
        </div>
      </div>  
    )
}

export default CrudBeer