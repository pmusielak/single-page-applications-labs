import {useParams, Link} from 'react-router-dom';

function ProductDetails({products}){
    const {id} = useParams();
    const product = Object.values(products).find((product) => {if(product.id == parseInt(id)){return product}})
    if(!product){
        return null;
    }
    console.log(product);

    return (
        <div>
            <h1>{product.title}</h1>
            {product.category}<br/>
            {product.brand}<br/>
            {product.description}<br/>
            {product.price}<br/>
            <img src={product.thumbnail}></img><br/>
            <Link to='/'>Go back</Link>
        </div>

    )
}

export default ProductDetails;