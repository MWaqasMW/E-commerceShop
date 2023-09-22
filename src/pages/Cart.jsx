import React from 'react'
import Navbar from '../components/Navbar'
import Baner from '../components/Baner'
import Footer from '../components/Footer'
import styled from 'styled-components'
import p1 from '../components/images/grey-folded-t-shirt_125540-812-removebg-preview.png'
import p2 from '../components/images/c6.avif'
import p3 from '../components/images/c1.jpg'
import p4 from '../components/images/troser-removebg-preview.png'
import { tablets,mobile,sub_mobiles } from '../responsive'
import "./style.scss"
import { Add, Remove } from '@mui/icons-material'
import 'bootstrap/dist/css/bootstrap.min.css';
const Cart = () => {
    const Conatainor = styled.div``

    const Wrapper = styled.div`
    padding: 20px;
    ${tablets({padding:"10px"})}

   
    `

    const Title = styled.p`
    font-weight: 300;
    text-align: center;
    font-size:30px
    `

    const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin:10px;
    
    justify-content: space-between;
    ${mobile({flexDirection:"column", justifyContent:"center"  })}
    
    `
    const TopButton = styled.button`
    font-weight: 600;
    cursor: pointer;
    padding: 10px;
    border:${props => props.type === "filled"};
    background-color:${props => props.type === "filled" ? "black" : "transparent"};
    color:${props => props.type === "filled" && "#fff"};

    `
    const TopTexts = styled.div``
    const TopText = styled.span`
    cursor: pointer;
    margin: 0px 10px;
    text-decoration: underline;
    ${tablets({display:"none"})}

    `


    const Bottom = styled.div`
    display:flex;
    justify-content: space-between;
padding-top:20px
flex-direction: row;

${tablets({flexDirection:"column"})}

`
    const Info = styled.div`
    flex:3;
    padding:10px;


    `
    const Product = styled.div`
display:flex;
justify-content: space-between;
${sub_mobiles({display:"block"})}
`
const ProductDetail = styled.div`
display:flex;
flex:2;
`
    const Image = styled.div`
width: 200px;
height: 200px;

`
    const Details = styled.div`
padding:20px;
display: flex;
flex-direction: column;
justify-content: space-between;
`
    const ProductName = styled.div``
    const ProductId = styled.div``
    const ProductColor = styled.div`
width: 23px;
height: 23px;
border-radius: 50%;
background-color: ${props => props.color};  
`
    const ProductSize = styled.div``

    const PriceDatail = styled.div`
flex:1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


`
    const AmountContainor = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
    const Amount = styled.div`
font-size:28px;
padding:10px;
${mobile({fontSize:"22px"})}

`
    const Price = styled.div`
font-size:40px;
${mobile({fontSize:"26px"})}

font-weight:200;
`
    const Hr = styled.div`
background-color:#000;
height:1px;
margin:20px 0px;
`


    const Summary = styled.div`
    flex:1;
    border: 0.5px solid lightgray;
    padding: 25px;
    border-radius: 10px;
    height:63vh;
    `

    const SumTitle = styled.h2``
    const SumItem = styled.div`
    margin:30px 0px;
    display: flex;
    justify-content: space-between; 
    font-weight:${props=>props.type === "total" && "500"};
    font-size:${props=>props.type === "total" && "24px"};
    
    `
    const SumText = styled.span``
    const SumPrice = styled.span``
    const Button = styled.button`
    width: 100%;
background-color: black;
padding: 10px;
color: #fff;
font-weight: 600;
    `

    return (
        <div>
            <Conatainor>
                <Navbar />
                <Baner />
                <Wrapper>
                    <Title>Your Bage</Title>
                    <Top>
                        <TopButton >CONTINUE SHOPPING</TopButton>
                        <TopTexts>
                            <TopText>Shoppings Bag(2)</TopText>
                            <TopText>Your Whislist(0)</TopText>
                        </TopTexts>
                        <TopButton type='filled'>CHECKOUT NOW</TopButton>
                    </Top>



                    <Bottom>
                        <Info>
                            <Product>
                                <ProductDetail>
                                    <Image>
                                        <img src={p1} alt="img" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                                    </Image>
                                    <Details>
                                        <ProductName><b>Product:</b> GreyT-Shirt</ProductName>
                                        <ProductId><b>ID:</b> 3-3544554444</ProductId>
                                        <ProductColor color='gray' />
                                        <ProductSize><b>Size:</b> 32.6</ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDatail>
                                    <AmountContainor>
                                        <Add />
                                        <Amount><b>2</b></Amount>
                                        <Remove />
                                    </AmountContainor>
                                    <Price>
                                        $ 20
                                    </Price>
                                </PriceDatail>
                            </Product>
                            <Hr />
                            <Product>
                                <ProductDetail>
                                    <Image>
                                        <img src={p4} alt="img" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                                    </Image>
                                    <Details>
                                        <ProductName><b>Product:</b> GreyT-Shirt</ProductName>
                                        <ProductId><b>ID:</b> 3-3544554444</ProductId>
                                        <ProductColor color='gray' />
                                        <ProductSize><b>Size:</b> 32.6</ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDatail>
                                    <AmountContainor>
                                        <Add />
                                        <Amount><b>2</b></Amount>
                                        <Remove />
                                    </AmountContainor>
                                    <Price>
                                        $ 20
                                    </Price>
                                </PriceDatail>
                            </Product>
                            <Hr />
                            <Product>
                                <ProductDetail>
                                    <Image>
                                        <img src={p4} alt="img" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                                    </Image>
                                    <Details>
                                        <ProductName><b>Product:</b> GreyT-Shirt</ProductName>
                                        <ProductId><b>ID:</b> 3-3544554444</ProductId>
                                        <ProductColor color='gray' />
                                        <ProductSize><b>Size:</b> 32.6</ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDatail>
                                    <AmountContainor>
                                        <Add />
                                        <Amount><b>2</b></Amount>
                                        <Remove />
                                    </AmountContainor>
                                    <Price>
                                        $ 20
                                    </Price>
                                </PriceDatail>
                            </Product>
                            <Hr />
                            <Product>
                                <ProductDetail>
                                    <Image>
                                        <img src={p2} alt="img" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                                    </Image>
                                    <Details>
                                        <ProductName><b>Product:</b> GreyT-Shirt</ProductName>
                                        <ProductId><b>ID:</b> 3-3544554444</ProductId>
                                        <ProductColor color='gray' />
                                        <ProductSize><b>Size:</b> 32.6</ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDatail>
                                    <AmountContainor>
                                        <Add />
                                        <Amount><b>2</b></Amount>
                                        <Remove />
                                    </AmountContainor>
                                    <Price>
                                        $ 20
                                    </Price>
                                </PriceDatail>
                            </Product>
                        </Info>
                        <Summary>
                            <SumTitle>ORDER SUMMERY</SumTitle>
                            <SumItem>
                                <SumText>SubTotal</SumText>
                                <SumPrice>$ 70</SumPrice>
                            </SumItem>
                            <SumItem>
                                <SumText>Estimated Shipping</SumText>
                                <SumPrice>$ 7</SumPrice>
                            </SumItem>
                            <SumItem>
                                <SumText>Shiping Discount</SumText>
                                <SumPrice>$ 2</SumPrice>
                            </SumItem>
                            <SumItem type="total">
                                <SumText >Total</SumText>
                                <SumPrice>$ 70</SumPrice>
                            </SumItem>
                            <Button>Check Now</Button>
                        </Summary>
                    </Bottom>
                </Wrapper>
                <Footer />
            </Conatainor>


        </div>
    )
}

export default Cart



{/* <div className='bottom' >
                    <div className="left">
                        <div className='sub-left'>
                        <div className='d-flex '>
                       <div className="img"><img src={p1} alt="img" /></div>
                        <div className="productDetail">
                            <span><b>Product:</b>T-Shit</span>
                            <span><b>Id:</b>783734637646647</span>
                            <span className='color'></span>
                            <span><b>Size:</b>34.4</span>
                        </div>
                        </div>
                    <div className="center">
                        <div className='d-flex align-items-center'>
                        <Add/>
                        <span>2</span>
                        <Remove/>
                        </div>
                        <div className="price">$ 20</div>
                            </div>
                    </div>
                    </div>
                    
         
                    <div className="right">
              
         
                    </div>
                    


                 </div>
                 <div className='bottom'>
                    <div className="left">
                        <div className='sub-left'>
                        <div className='d-flex '>
                       <div className="img"><img src={p1} alt="img" /></div>
                        <div className="productDetail">
                            <span><b>Product:</b>T-Shit</span>
                            <span><b>Id:</b>783734637646647</span>
                            <span className='color'></span>
                            <span><b>Size:</b>34.4</span>
                        </div>
                        </div>
                    <div className="center">
                        <div className='d-flex align-items-center'>
                        <Add/>
                        <span>2</span>
                        <Remove/>
                        </div>
                        <div className="price">$ 20</div>
                            </div>
                    </div>
                    </div>
                    
         
                    <div className="right">
              
                        <h4 className='fs-2'>Order Summery</h4>
                        <div className='summeryItem'>
                        <div className='d-flex justify-content-between'>
                        <div>Subtitle</div><span>$ 60</span>
                        </div>
                        <div className='d-flex justify-content-between'>
                        <div>Estamited Shipping</div><span>$ 60</span>
                        </div>
                        <div className='d-flex justify-content-between'>
                        <div >Shipping Discount</div><span>$ 60</span>
                        </div>
                        <div className='d-flex justify-content-between'>
                        <div className='fs-2'>Total</div><span className='fs-2'>$ 60</span>
                        </div>
                        </div>
                        <TopButton type='filled' className='text-center mt-19'>CHECKOUT NOW</TopButton>

                    </div>
                    


                 </div> */}