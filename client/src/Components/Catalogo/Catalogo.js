import React, {useEffect} from 'react';
import ProductCard from '../ProductCard/ProductCard';
import {useSelector, useDispatch} from 'react-redux'
import {getbeers} from '../../Redux/beer'
import './Catalogo.css'

function Catalogo () {
  const dispatch = useDispatch()
  const beer = useSelector(store => store.beer.beers)
  useEffect(()=>{
   dispatch(getbeers())
   console.log('soy Categories')
  },[])


    return ( 
      <div className = 'catalogo'>
        {beer.map(c => <ProductCard
            image={c.image}
            name={c.name}
            id={c.id}
            price={c.price}
          /> )}
      </div>

    );
    } 

export default Catalogo;