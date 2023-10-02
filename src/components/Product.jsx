import React from 'react'
import Productss from './Productss'
import { Products } from '../data'
import styled from 'styled-components'

const Product = ({cat,filters,sort}) => {
  console.log(cat,filters,sort)
    const Container=styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content:center;
width:100%;
margin-top:20px;
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
