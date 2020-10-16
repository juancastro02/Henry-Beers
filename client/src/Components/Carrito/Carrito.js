import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {getcarrito} from '../../Redux/Carrito'
import {useSelector, useDispatch} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
const Carrito = () => {

    const [quantitys, setQuantity] = useState([])

    const classes = useStyles();
    const carrito = useSelector(store => store.carrito.carrito)
    const dispatch = useDispatch()

    useEffect(()=>{

        dispatch(getcarrito(1))

        const fetchData =async()=>{
          await axios.post(`http://localhost:4000/users/1/carrito`)    
        }
        fetchData()
    },[])

    console.log(carrito)

    const onChange =(e)=>{
     setQuantity({
         ...quantitys,
         [e.target.name]: e.target.value
     })
    }


    const handlePost = ()=>{
        console.log(quantitys)
    }


    return( 
        <div>
       <table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">Product</th>
      <th scope="col">Price</th>
      <th scope="col">Stock</th>
      <th scope="col">Quantity</th>
      <th scope="col">Total</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
      {carrito.products && carrito.products.map((e)=>(
        <tr>
         <td>{e.name}</td>
         <td>{e.price}</td>
         <td>{e.stock}</td>
         <td><input type='number' onChange={(e)=> onChange(e)} name='quantity' id={e.name}/></td>
      <td ><label for={e.name}>${e.price * quantitys}</label></td>
         <td scope="col"> <Button variant="contained" color="secondary">Delete</Button></td>
        </tr>
      ))}
  </tbody>
</table>
<Button variant="contained" onClick={()=>handlePost()} >Default</Button>
        </div>
    )
}

export default Carrito