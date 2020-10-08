import React, { useState } from 'react';
import NavBar from '../Components/NavBar/NavBar.js';


const SearchBar = ({ props }) => {
    const [listProducts, setListProducts] = useState({
        busqueda: ""
    });
    const { busqueda } = listProducts

    const onChange = e => {
        setListProducts({
            ...listProducts,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log(busqueda)
    }

    return (
        <form onSubmit={(e)=>onSubmit(e)} >
            <div>
                <NavBar/>
                <input
                    type="text"
                    placeholder="Producto..."
                    value={busqueda}
                    onChange={onChange}
                    name='busqueda'
                />
            </div>
            <div>
                <input
                    type="submit"
                    value="Enviar"
                />
            </div>
        </form>
    );
}

export default SearchBar;

