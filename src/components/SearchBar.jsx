import React from 'react'
import {useState} from "react";

export default function SearchBar(props){

const [product, setProduct] = useState("")

function handleInput(event){
    
    setProduct(event.target.value)
    props.filterProducts(event.target.value)

    
}
function handleInputCheck(event){
    if(event.target.checked === true){
        props.showStock("true")
    
    }else{
        props.showStock("false")
        
    }
}

return (
    <div>
        <label htmlFor="searchBar">Search Bar</label>
        <input name="searchBar" type="text" onChange={handleInput} value={product.value}/>
        
        <label htmlFor='stocked' >Only show products on stock</label>
        <input type="checkbox" name="stocked" onChange={handleInputCheck} />
    </div> 
    )
}