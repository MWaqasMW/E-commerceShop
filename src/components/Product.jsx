import React from 'react'
import Productss from './Productss'
import { Products } from '../data'
import styled from 'styled-components'
const Product = () => {
    const Container=styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: center;

`
 


  return (
    <Container>
{Products.map(item => (
  <Productss item={item} />
  ))}
  </Container>
  )
}

export default Product
