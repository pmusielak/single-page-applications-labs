import React, {useState, useEffect} from 'react';
import ProductItem from './ProductItem';
import axios from 'axios';

function ProductList({products}){
    const [filter, setFilter] = useState();

    function onFilterChange(params) {
        setFilter(params.target.value);
        products.forEach(product => {
            if(product.title.includes(filter)){
                return product;
            }
        })
        console.log(products);

    }
    function productFilter(products){
        console.log(products.title);
        return products.title.includes(filter);
    }
    return (
        <div>
            <h1>List of Products:</h1>
            <label>Filter by product title:</label>
            <input id="filter" onChange={onFilterChange}></input>
            
            <ul>
                {
                    products.filter(function (product){if(filter == '' || !filter){return product} return product.title.toLowerCase().includes(filter.toLowerCase())}).map((product) => 
                    <ProductItem brand={product.brand} title={product.title} product_id={product.id} key={product.id}/>)
                }
            </ul>
        </div>
    )
}

export default ProductList;