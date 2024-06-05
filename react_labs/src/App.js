import './App.css';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails'
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom'

function App() {
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
    <div className="App">
      <div className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/"
              element={<ProductList products={products} />} />
            <Route path="details/:id"
              element={<ProductDetails products={products} />} />
          </Routes>
        </BrowserRouter> 
      </div>
    </div>
  );
}

export default App;
