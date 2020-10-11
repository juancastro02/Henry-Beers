import React,{useState, useEffect} from 'react';
import Product from './Components/Product/Product'
import Catalogo from './Components/Catalogo/Catalogo.js'
import CrudBeer from './Components/CrudBeer/CrudBeer'
import CrudCategory from './Components/CrudCategory/CrudCategory'
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar'
import {useSelector, useDispatch} from 'react-redux'
import {getbeers} from './Redux/beer'
import {getCategory} from './Redux/category'


function App() {

  const [search, setSearchApp] = useState({
    array: [],
    word: "",
  });

  const dispatch = useDispatch()
  const category = useSelector(store => store.category.categories)
  const products = useSelector(store => store.beer.beers )

  useEffect(()=>{ // Similar al componentDidMount
    dispatch(getbeers())
    dispatch(getCategory())
  },[])


  return (
    <div >
      <BrowserRouter>
        <Route path='/' 
        render={()=> <NavBar setSearchApp={setSearchApp} />} 
        />

        <Route
        exact path="/products/search"
        render={()=> <Catalogo products = {search.array} search={search.word}/>}
        />

        <Route exact path="/catalogo/:productoId" 
        component={Product}
         />

         <Route 
         exact path= "/catalogo/:id"
         render={({match})=> <Catalogo products={products.filter(p => p.categoryId === Number(match.params.id))} category={Number(match.params.id)} />}
        />  

        <Route exact path="/crud"
         component={CrudCategory} 
         />

        <Route exact path="/crud" 
        component={CrudBeer} 
        />
        <Route exact path='/catalogo' 
         component={Catalogo} 
         /> 
      </BrowserRouter>
    </div>
  );
}

export default App;
