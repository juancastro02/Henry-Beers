import React from 'react';
import Product from './componentes/Product'
import SearchBar from './componentes/searchBar'
import CrudCurso from './Components/CrudCurso/CrudCurso'
import CrudCategory from './Components/CrudCategory/CrudCategory'

function App() {
  return (
    <div >
      <SearchBar/>
      <Product/>
       <CrudCurso/>
       <CrudCategory/>
    </div>
  );
}

export default App;
