import React, {useEffect, useState} from 'react';
import ProductCard from '../ProductCard/ProductCard';
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'
import {getbeers} from '../../Redux/beer'
import './Catalogo.css'

function Catalogo ({category,search,products}) {
  const [productscatalogo, setProductscatalogo] = useState();
  const dispatch = useDispatch()
  const beer = useSelector(store => store.beer.beers)

  useEffect(()=>{
   dispatch(getbeers())
   console.log('soy Categories')
  },[])


  useEffect(() => {
    dispatch(getbeers())
    const fetchData = async()=>{
        console.log(search)
        const {data} = await axios.get(`http://localhost:4000/products/${search ? 'find/search?name='+search : ""}`)
        console.log(data)
        setProductscatalogo(data)
    }
    fetchData()
    
},[products])


console.log(productscatalogo)

    return ( 
      <div className = 'catalogo'>
                    {productscatalogo && productscatalogo.map(p=>(
                    <ProductCard
                    key={p.id}
                    id={p.id}
                    name={p.name}
                    price={p.price}
                    image={p.image}
                    stock={p.stock}
                    category={p.category}
                    />
                ))}
      </div>

    );
    } 

export default Catalogo;