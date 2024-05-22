import React, {useState, useEffect} from 'react';
import ProductItem from './ProductItem';
import axios from 'axios';

function ProductList(){
    const [products, setProducts] = useState([]); 
    
    useEffect(() => {
        const fetchData = async () =>{
            try {
              const {data: response} = await axios.get('https://dummyjson.com/products');
              setProducts(response.products);
            } catch (error) {
              console.error(error.message);
            }
          }
          fetchData();
    }, []);
    return (
        <div>
            <h1>List of Products:</h1>
            <ul>
                {
                    products.map((product) => 
                    <ProductItem brand={product.brand} title={product.title} key={product.id}/>)
                }
            </ul>
        </div>
    )
}

export default ProductList;