import React from 'react';
import Product from './Components/Product/Product'
import Catalogo from './Components/Catalogo/Catalogo.js'
import CrudBeer from './Components/CrudBeer/CrudBeer'
import CrudCategory from './Components/CrudCategory/CrudCategory'
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar'



function App() {
  return (
    <div >
      <BrowserRouter>
        <Route path='/' 
        component={NavBar} 
        />

        <Route exact path="/products/:productoId" 
        component={Product}
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
