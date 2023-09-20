import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Baner from '../components/Baner'
import NewsLeter from '../components/NewsLeter'
import Footer from '../components/Footer'
import P1 from '../components/images/c6.avif'
const OneProduct = () => {
    const Container = styled.div``
    const Wrapper = styled.div`
    display:flex;
    padding:50px;

    `
    const ImageContainer = styled.div`  flex:1
    flex-wrap-wrap;
    ;
    
    `
    const Image = styled.img`
    width: 100%;
height: 90vh;
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
const FilterColor= styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
`
const FilterTitle= styled.h4`
font-size:20px;
font-weight:300;
`
const FilterSize= styled.select``
const FilterSizeOpt= styled.option``

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
  <FilterTitle>
Color
  </FilterTitle>
  <FilterColor color="red"/>
  <FilterColor  color="blue"/>
  <FilterColor  color="gray"/>
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
</InfoContainer>
        </Wrapper>
        <NewsLeter/>
        <Footer/>
      </Container>
    </div>
  )
}

export default OneProduct
