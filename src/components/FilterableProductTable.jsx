import React from 'react'
import ProductTable from './ProductTable';
import SearchBar from './SearchBar'
import {useState} from 'react'

export default function FilterableProductTable(props){
    
    const [products, setProducts] = useState(props.products.data)
    const [filteredProducts, setFilteredProducts] = useState(props.products.data)
   
    function filterProducts(product){
        if(product === "") setFilteredProducts(products)
        else {
            const filtered = filteredProducts.filter((elem)=>elem.name.toLowerCase().includes(product.toLowerCase()))
            setFilteredProducts(filtered)
        }
    }
    function showStock(isChecked){
        if(isChecked === "true"){
            const filtered = filteredProducts.filter((elem)=>elem.stocked === true)
            setFilteredProducts(filtered)
        }
        if(isChecked === "false"){
            setFilteredProducts(products)
        }
    }
    
    return (
        <div>
            <SearchBar filterProducts={filterProducts} showStock={showStock }/>
            <ProductTable products={filteredProducts}/>
        </div>
    );
  }

