import {Link} from "react-router-dom";

function ProductItem({brand, title, product_id}){
    console.log(product_id);
    return(
        <li><Link to={`/details/${product_id}`} style={{ textDecoration: 'none', color: 'white' }}>{title}</Link> ({brand})</li>
    )
}

export default ProductItem;