import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Baner from '../components/Baner'
import NewsLeter from '../components/NewsLeter'
import Footer from '../components/Footer'
import P1 from '../components/images/c5.avif'
import { Add, Remove } from '@mui/icons-material'
import {mobile, tablets} from '../responsive'
const OneProduct = () => {
    const Container = styled.div``
    const Wrapper = styled.div`
    display:flex;
    padding:50px;
    flex-wrap-wrap;
    justify-content: space-between;
    
    ${tablets({flexDirection:"column"})}
    ${tablets({padding:"15px"})}

    `
    const ImageContainer = styled.div`  flex:1
    width: 400px;
    height: 500px;
    overflow: hidden;
    justify-content: left;

    ${tablets({width:"100%"})}

    ;
    
    `
    const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain; 
    `
    const InfoContainer = styled.div`
    flex:1;
    padding:0 30px
    
    `
    const Title = styled.h3`
    font-size:30px;
    font-weight:700px;

    `
    const Description = styled.p` 
    
    `
const Price = styled.span`

    font-size:40px;
`

const FilterContainor= styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 50%;
margin:30px 0px;
`


const Filter= styled.div`
display: flex;
align-items: center;
`

const FilterColOpt= styled.div`
display: flex;
align-items: center;
justify-content: space-between;

`

const FilterColor= styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin-left:10px;
`
const FilterTitle= styled.h4`
font-size:20px;
font-weight:300;
`
const FilterSize= styled.select``
const FilterSizeOpt= styled.option``

const AddContainor= styled.div`
width:50%;
`
const AmountConatainor= styled.div`
display: flex;
align-items: center;
justify-content: space-between;

`
const Amount= styled.div`
padding:5px 10px;
border-radius: 8px;

border:1px solid #a08152;
`
const BtnOpt = styled.div`
display: flex;
align-items: center;

`
const Button= styled.button`
padding:14px;
border:2px solid #a08152;
cursor: pointer;

`

  return (
    <div>
      <Container>
        <Navbar/>
        <Baner/>
        <Wrapper>
<ImageContainer>
  <Image src={P1}/>
</ImageContainer>
<InfoContainer>
  <Title>Dress Old Fashion</Title>
  <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore expedita accusantium inventore impedit nulla, veniam vel obcaecati tenetur nemo minus nisi placeat ipsam sed delectus. At corrupti expedita nesciunt quibusdam?</Description>
<Price>200$</Price>
<FilterContainor>
  <Filter>
  <FilterTitle>
Color
  </FilterTitle>
  <FilterColOpt>
  <FilterColor color="red"/>
  <FilterColor  color="blue"/>
  <FilterColor  color="gray"/>
  </FilterColOpt>
  </Filter>
  <Filter>
    <FilterTitle>Size</FilterTitle>
    <FilterSize>
      <FilterSizeOpt>XL</FilterSizeOpt>
      <FilterSizeOpt>L</FilterSizeOpt>
      <FilterSizeOpt>M</FilterSizeOpt>
      <FilterSizeOpt>S</FilterSizeOpt>
      <FilterSizeOpt>XS</FilterSizeOpt>
    </FilterSize>
  </Filter>
</FilterContainor>
<AddContainor>
<AmountConatainor>
  <BtnOpt>
<Remove/>
<Amount>1</Amount>
<Add/>
  </BtnOpt>
<Button>ADD TO CART</Button>
</AmountConatainor>
</AddContainor>

</InfoContainer>
        </Wrapper>
        <NewsLeter/>
        <Footer/>
      </Container>
    </div>
  )
}

export default OneProduct
