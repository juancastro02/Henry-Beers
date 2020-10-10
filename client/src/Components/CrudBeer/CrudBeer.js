import React, { useState, useEffect, Fragment } from 'react'
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
    overflow:'scroll'
  }
});

const CrudBeer = () => {

  const dispatch = useDispatch()
  const categories = useSelector(store=> store.category.categories)
  const beer = useSelector(store => store.beer.beers)
  useEffect(()=>{
   dispatch(getCategory())
   dispatch(getbeers())
  },[beer,categories])

   const [video, setVideo] = useState({
       id: "",
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
      image: video.image,
      category: video.category
  };

   const {data} = axios.put(`http://localhost:4000/products/${video.id}` ,dataPost)

   console.log(data)
};



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
  const classes = useStyles();
    return(
      <div className="crud_content">
      <div className="productsAdmin">
          <h3 className='h111'>Products</h3>
          <div className={classes.root}>
            <List component="nav" aria-label="secondary mailbox folders">
              {beer && beer.map(p => <ListItem button onClick={()=>handleSearch(p)} value={p.id}>
                <ListItemText primary={p.name} secondary={p.price}/>
              </ListItem>)}
            </List>
          </div>
      </div>
        <div className='formCrudProduct' style={{marginTop: "5%"}} >
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
          <button type='submit' onClick={()=> handleUpdate()} >Update</button>
        </form>
        </div>
      </div>  
    )
}

export default CrudBeer