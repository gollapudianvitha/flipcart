import React from 'react';
import axios from 'axios';
import {useEffect,useState} from 'react';
export default function Products() {
    const [products,setProducts]=useState([{}]);
    useEffect(()=>{
        axios.get('http://localhost:3002/products')
        .then(res=>setProducts(res.data))
    },0)
    console.log(products)
  return (
    <>
    {
        products.map((element,index)=>{
            return(
                <>
                <div class="card float-start mt-3 ml"  style={{width:"20rem",height:"30rem"}}>
                <img src={element.thumbnail}  style={{width:"18rem",height:"20rem"}} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">{element.title}</h5>
                <p class="card-text">{element.description}</p>
             </div>
              <ul class="list-group list-group-flush">
              <li class="list-group-item">{element.title}</li>
              <li class="list-group-item"><span class="fnt"><b>PRICE:</b></span>{element.price}</li>
              <li class="list-group-item"><span class="fnt"><b>Brand:</b></span>{element.brand}</li>
            </ul>
            <div class="card-body">
            
           </div>
           </div>
                </>
            )
        })
    }
    </>
  )
}