import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Baner from '../components/Baner'
import Product from '../components/Product'
import NewsLeter from '../components/NewsLeter'
import Footer from '../components/Footer'

const ProductList = () => {

const Conntainer =styled.div`
`
const Title =styled.h1``
const FilterContainer= styled.div`
display: flex;
justify-content: space-between;

`
const Filter= styled.div`
margin:20px;
display: flex;
align-items: center;
`

const FilterText= styled.div`
font-size: 20px;
font-weight: 600;
`
const Select = styled.select`
padding:10px;
margin-right:15px;

`
const Option = styled.option``

  return (
    <div>
      <Conntainer>
      <Navbar/>
        <Baner/>
      <Title>
        Dresses
      </Title>
      <FilterContainer>
        <Filter><FilterText>Filter Product:</FilterText>
        <Select>
          <Option disabled selected>
            Color
          </Option>
          <Option>White</Option>
          <Option>Black</Option>
          <Option>Red</Option>
          <Option>Blue</Option>
          <Option>Yellow</Option>
          <Option>Green</Option>
        </Select>
        <Select>
          <Option disabled selected>
            Size
          </Option>
          <Option>XS</Option>
          <Option>L</Option>
          <Option>M</Option>
          <Option>S</Option>
          <Option>XL</Option>
        </Select>
        </Filter>
        <Filter><FilterText>Sort Product:</FilterText>
        <Select>
          <Option disabled selected>
            Newest
          </Option>
          <Option>Price ace</Option>
          <Option>Price desc</Option>
       
        </Select>
        </Filter>
        
      </FilterContainer>
      <Product/>
<NewsLeter/>
<Footer/>
      </Conntainer>
    </div>
  )
}

export default ProductList
