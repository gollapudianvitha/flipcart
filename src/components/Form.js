import axios from 'axios'
import React from 'react'
import { useState } from 'react'
export default function Form() {
 const [id,setId]=useState('')
 const [brand,setBrand]=useState('')
 const [price,setPrice]=useState('')
 const [des,setDes]=useState('')
 const [img,setImg]=useState('')
 const [title,setTitle]=useState('')
 const productData={
    productId:id,
    title:title,
    brand:brand,
    price:price,
    description:des,
    thumbnail:img
 }
 const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3002/products',productData)
    .then((res)=>{alert("Success")})
 }
  return (
    <>
    <br />
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-md-4 bg-warning">
                <br />
                <h2 class="text-center text-white">Form</h2>
                <hr />
                <form method="post" onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label><i>Product ID</i></label>
                        <input type="text" placeholder="enter product id" onChange={(e)=>setId(e.target.value)} class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label><i>Product Title</i></label>
                        <input type="text" placeholder="enter product title" onChange={(e)=>setTitle(e.target.value)} class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label><i>Brand</i></label>
                        <input type="text" placeholder="enter brand" onChange={(e)=>setBrand(e.target.value)} class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label><i>Price:</i></label>
                        <input type="number" placeholder="enter price" onChange={(e)=>setPrice(e.target.value)} class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label><i>Description:</i></label>
                        <textarea type='text' placeholder="enter description" onChange={(e)=>setDes(e.target.value)} class='form-control'/>
                    </div>
                    <div class='mb-3'>
                        <label>Image URL:</label>
                        <input type='url' placeholder='enter image url' onChange={(e)=>setImg(e.target.value)} class='form-control'/> 
                    </div>
                    <div class="mb-3">
                         <button class="btn btn-success">Submit</button>
                    </div>
                    <hr />
                </form>
            </div>
        </div>
    </div>
    </>
  )
}