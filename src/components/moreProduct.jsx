
import React, { useEffect, useState } from 'react'
import MoreProductss from './moreProductss'
import styled from 'styled-components'
import axios from "axios"

const MoreProduct = ({ cat, filters, sort }) => {
  const Container = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin: 40px 0px;
  `

  const [moreproducts, setMoreProducts] = useState([])
  const [filterProduct, setFilterProduct] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(cat ? `http://localhost:5000/api/moreProducts?categories=${cat}` : `http://localhost:5000/api/moreProducts`)
        setMoreProducts(res.data.products)
      } catch (err) {
        console.error(err.message);
      }
    }
    getProducts();
  }, [cat]);

  useEffect(() => {
    try {
      const filteredProducts = moreproducts.filter((item) =>
        Object.entries(filters).every(([key, value]) => item[key].includes(value))
      )
      setFilterProduct(filteredProducts)
    } catch (err) {
      console.log(err.message)
    }
  }, [cat, moreproducts, filters])

  useEffect(() => {
    if (sort === "newest") {
      setFilterProduct((prev) => [...prev].sort((a, b) => a.timestamp - b.timestamp))
    } else if (sort === "asc") {
      setFilterProduct((prev) => [...prev].sort((a, b) => b.price - a.price))
    } else if (sort === "desc") {
      setFilterProduct((prev) => [...prev].sort((a, b) => a.price - b.price))
    }
  }, [sort])

  return (
    <Container>
      {filterProduct.length > 0 ? (
        filterProduct.map((item) => (
          <MoreProductss key={item.id} item={item} />
        ))
      ) : (
        <p>No products available.</p>
      )}
    </Container>
  )
}

export default MoreProduct
