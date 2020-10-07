import React from 'react';
import Product from './componentes/Product'
import SearchBar from './componentes/searchBar'
import CrudCurso from './Components/CrudCurso/CrudCurso'
import CrudCategory from './Components/CrudCategory/CrudCategory'
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar'



function App() {
  return (
    <div >
      <BrowserRouter>
        <Route path='/' component={NavBar} />
        <Route exact path="/products/:productoId" component={Product} />
        <Route exact path="/category" component={CrudCategory} />
        <Route exact path="/products/:productoId" component={Product} />
        <Route exact path="/products" component={CrudCurso} />
        {/* <Route exact path='/catalogo' component={Catalogo} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
