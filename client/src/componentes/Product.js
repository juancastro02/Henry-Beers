import React from 'react';
const Product = (props) => {
    const products = [
        { id: 1, name: 'hola', description: 'adsds', price: 32434, stock: 3243, image: 'dfsdf' },
        { id: 2, name: 'hola2', description: 'adsds', price: 32434, stock: 3243, image: 'dfsdf' },
        { id: 3, name: 'hola3', description: 'adsds', price: 32434, stock: 3243, image: 'dfsdf' }
    ]


    return (
        <div>
        <h1>{products[0].name}</h1>
        <h2>{products[0].description}</h2>
        <h2>{products[0].price}</h2>
        <h2>{products[0].stock}</h2>
        <h2>{products[0].image}</h2>
       </div>    
    );
}

export default Product;