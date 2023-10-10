import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'
import {tablets} from '../responsive'

const Categories = () => {

    const Container=styled.div`
    display: flex;
 align-items: center;
justify-content: space-evenly;
margin:10px;
${tablets({display:"block"})}

    `


  return (
    <Container>
{categories?.map(item => (
  <CategoryItem item={item} />
  ))}
  </Container>

  )
}

export default Categories
