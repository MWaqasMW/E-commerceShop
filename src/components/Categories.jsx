import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'
const Categories = () => {
    const Container=styled.div`
    
    `
  return (
    <div>
{categories.map(item => (
  <CategoryItem item={item} key={item.id} />
))}

    </div>
  )
}

export default Categories
