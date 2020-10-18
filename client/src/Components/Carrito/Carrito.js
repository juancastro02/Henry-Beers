import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {getcarrito} from '../../Redux/Carrito'
import {useSelector, useDispatch} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './Carrito.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
const Carrito = () => {

    const classes = useStyles();
    const carrito = useSelector(store => store.carrito.carrito)
    const dispatch = useDispatch()

    useEffect(()=>{

        dispatch(getcarrito(1))

        const fetchData =async()=>{
          await axios.post(`http://localhost:4000/users/1/carrito`)    
        }
        fetchData()
    },[carrito])

    console.log(carrito)

    const DestroyCart = async()=>{
     const {data} = await axios.delete(`http://localhost:4000/users/1/deletecart/${carrito.id}`)
     alert('Carrito eliminado correctamente')
    }

    const handleBuy = async() =>{
    const {data} = await axios.put(`http://localhost:4000/users/procesando/${carrito.id}`) 
    alert('Compra exitosa')
    }

    const DeleteProduct = async(id)=>{
     const {data} = await axios.delete(`http://localhost:4000/users/product/${id}/delete/${carrito.id}`)
    }

    const Increment = async(id)=>{
       const {data} = await axios.put(`http://localhost:4000/users/product/${id}/increment/${carrito.id}`)
       await axios.put(`http://localhost:4000/products/decrement/${id}`)
    }

    const Decrement = async(id,quantity)=>{
      if(quantity <= 1){
        const {data} = await axios.delete(`http://localhost:4000/users/product/${id}/delete/${carrito.id}`)
      }else if(quantity > 0){
        const {data} = await axios.put(`http://localhost:4000/users/product/${id}/decrement/${carrito.id}`)
        await axios.put(`http://localhost:4000/products/increment/${id}`)
      }
   }


    return( 
        <div>
       { carrito.products && carrito.products[0] && <div><table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">Product</th>
      <th scope="col">Price</th>
      <th scope="col">Stock</th>
      <th scope="col">Quantity</th>
      <th scope="col"></th>
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
         <td >{e.orden.quantity}</td>
         <td  ><Button variant="contained" onClick={()=>Increment(e.id)} >+</Button><span>    </span><Button variant="contained" onClick={()=> Decrement(e.id,e.orden.quantity)} >-</Button></td>
      <td ><label for={e.name}>${e.price * e.orden.quantity }</label></td>
         <td scope="col"> <Button variant="contained" color="secondary" onClick={()=> DeleteProduct(e.id)} >Delete</Button></td>
        </tr>
      ))}
  </tbody>
</table>
<Button variant="contained" style={{backgroundColor: "green", color: "white", marginLeft: "10px"}} onClick={()=> handleBuy()} >Buy</Button> 
<Button variant="contained" style={{backgroundColor: "red", color: "white", marginLeft: "30px"}} onClick={()=> DestroyCart()} >Delete Cart</Button></div>}
{carrito.products && !carrito.products[0] && <div className='titnocarrito' style={{marginLeft: "340px"}}>
                    <div className='divcarritovacio'>
                    <h2>¡Your Shopping Cart is empty!</h2>
                    </div>
                </div>}
        </div>
    )
}

export default Carrito