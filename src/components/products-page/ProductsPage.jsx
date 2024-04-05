import { useState } from "react";
import jsonData from "../../data.json";
import ProductTable from "../product-table/ProductTable";


function ProductPage ( ){
    const [products, setProducts] = useState(jsonData)
    return ( 
        <>
        <div>
        <h1>IronStore</h1>
        </div>
        <ProductTable products={products}/>
        </>
    )
}

export default ProductPage;