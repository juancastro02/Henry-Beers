import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {getcerveza} from '../../Redux/beer'

const Product = (data) => {
  const dispatch = useDispatch()
  const beer = useSelector(store => store.beer.beer)
  console.log(data.match.params.productoId)
  useEffect(()=>{
    dispatch(getcerveza(data.match.params.productoId))
    console.log('soy product')
  },[])

    return (
          <div class="card text-center">
            <h2 class="card-title">{beer.name}</h2>
                    <div class="card-body">
                    <img src={beer.image} />
                <p class="card-text">{beer.description}</p>
              </div>
                  <div class="card-footer text-muted">
                          Stock:{beer.stock}
               </div>
          </div> 
    );
}

export default Product