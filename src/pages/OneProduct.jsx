import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Baner from '../components/Baner'
import NewsLeter from '../components/NewsLeter'
import Footer from '../components/Footer'
import { Add, Remove } from '@mui/icons-material'
import {tablets} from '../responsive'
import {useLocation} from 'react-router-dom'
import { publicRequest } from '../requestMethods.js'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/cartRedux'
import 'bootstrap/dist/css/bootstrap.min.css';


const OneProduct = () => {




  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [product, setProducts]= useState({})
  const [quantity,setQuantity]=useState(1);
  const [size,setSize]= useState([])
const dispatch = useDispatch()

useEffect(()=>{
const getProduct= async()=>{
try{
  const res = await publicRequest.get("moreProducts/find/"+id)
  setProducts(res.data)
}catch(err){
  console.log(err)
}

}
getProduct()


},[id])

const handleQuantity=(type)=>{
if(type === "desc"){

quantity > 1 &&  setQuantity(quantity -1)
}else{
  setQuantity(quantity +1)
}
}
const handleClick=()=>{
  dispatch(addProduct({...product, quantity}))
};

const Container = styled.div``
const Wrapper = styled.div`
    display:flex;
    padding:50px;
    flex-wrap-wrap;
    justify-content: space-between;
    
    ${tablets({flexDirection:"column"})}
    ${tablets({padding:"15px"})}
    
    `
    const ImageContainer = styled.div`  
    flex:1;
    ${tablets({flex:"none"})}
    
    max-width: 670px;
    min-width: 200px;
    height: 470px;
    overflow: hidden;
    justify-content: left;

    
    ;
    
    `
    const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    background-image: url(${product.img});
    background-size: contain;
     background-position: center;
        background-repeat: no-repeat;
        
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
cursor:pointer;
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
<ImageContainer data-aos="fade-right">
  <Image  />
</ImageContainer>
<InfoContainer data-aos="fade-left">
  <Title>{product.title}</Title>
  <Description>{product.desc}Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam dolor voluptates veritatis aperiam minima similique voluptatibus nulla commodi obcaecati ipsa officia libero distinctio maxime, modi ullam a eaque architecto excepturi.</Description>
<Price>${product.price}</Price>
<FilterContainor>
  <Filter>
  <FilterTitle>
Color
  </FilterTitle>
  <FilterColOpt >
    <FilterColor color={product.color}/>
    </FilterColOpt>
  </Filter>
  <Filter>
    <FilterTitle>Size</FilterTitle>
    <FilterSize>
      {product && product.size?.map((v)=>(
        <FilterSizeOpt key={v} onChange={(e)=>setSize(e.target.value)}>{size}</FilterSizeOpt>
      
        )) }
    </FilterSize>
  </Filter>
</FilterContainor>
<AddContainor>
<AmountConatainor>
  <BtnOpt>
<div className='btn btn-light'><Remove  onClick={()=>handleQuantity("desc")}/></div>
<Amount>{quantity}</Amount>
<div className='btn btn-light'><Add  onClick={()=>handleQuantity("ase")}/></div>
  </BtnOpt>
<Button onClick={handleClick}>ADD TO CART</Button>
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
