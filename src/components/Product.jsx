import React, { useEffect, useState } from 'react'
import Productss from './Productss'
import styled from 'styled-components'
import axios from "axios"

const Product = ({cat,filters,sort}) => {
  const Container=styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content:center;
  width:100%;
  margin-top:20px;
  `


  const [products,setProducts] = useState([])


useEffect(() => {
  const getProducts = async () => {
    try {
      const res = await axios( cat ? `http://localhost:5000/api/products?categories=${cat}`
      :`http://localhost:5000/api/products`)
      
      setProducts(res.data.products);
    }
    catch (err) {
      console.error(err.message);
    }
  }
 getProducts();
}, [cat]);




  return (
    <Container>
    {products.length > 0 ? (
      products?.map((item) => (
        <Productss key={item.id} item={item} />
      ))
    ) : (
      <p>No products available.</p>
    )}
  </Container>
  )
}

export default Product




