import React from 'react'
import Navbar from '../components/Navbar'
import Baner from '../components/Baner'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { tablets,mobile,sub_mobiles } from '../responsive'
import "./style.scss"
import { Add, Remove } from '@mui/icons-material'
import 'bootstrap/dist/css/bootstrap.min.css';
import StripeCheckout from 'react-stripe-checkout'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { Link } from 'react-router-dom'




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
flex-wrap: wrap;
${sub_mobiles({justifyContent:"center"})}


`
const Product = styled.div`
display:flex;
justify-content: space-between;
margin:10px;
flex-wrap: wrap;
${sub_mobiles({flexDirection:"column",justifyContent:"center"})}


`
const ProductDetail = styled.div`
display:flex;
flex:2;
    ${sub_mobiles({flexDirection:"column", alignItems: "center"})}



`
const Image = styled.div`
min-width: 250px;
max-width: 280px;
height: 250px;

`
const Details = styled.div`
padding:20px;
display: flex;
flex-direction: column;
justify-content: space-between;

`
const ProductName = styled.div`
margin:5px;

`
const ProductId = styled.div`
margin:5px;

`
const ProductColor = styled.div`
width: 23px;
height: 23px;
border-radius: 50%;
background-color: ${props => props.color}; 
margin:5px;

`
const ProductSize = styled.div`
margin:5px;

`

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
const Cart = () => {
const KEY = process.env.STRIPE_KEY;


const [stripeToken, setStripeToken] = useState(null);

const onToken = (token) => {
  setStripeToken(token);
};
console.log(stripeToken)


    const cart = useSelector(state=>state.cart)

    return (
        <div>
            <Conatainor>
                <Navbar />
                <Baner />
                <Wrapper>
                    <Title>Your Bage</Title>
                    <Top>
                      <Link to={"/"}>
                       <TopButton >CONTINUE SHOPPING</TopButton>
                      </Link> 
                        <TopTexts>
                            <TopText>Shoppings Bag(2)</TopText>
                            <TopText>Your Whislist(0)</TopText>
                        </TopTexts>
                        <TopButton type='filled'>CHECKOUT NOW</TopButton>
                    </Top>



                    <Bottom>
                        <Info>
                            {cart.products.map(product=>(
                                <Product>
                                <ProductDetail>
                                    <Image>
                                        <img src={product.img} alt="img" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                                    </Image>
                                    <Details>
                                        <ProductName><b>Product:</b>{product.title}</ProductName>
                                        <ProductId><b>ID:</b> {product._id}</ProductId>
                                        <ProductColor color={product.color} />
                                        <ProductSize><b>Size:</b> {product.size}</ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDatail>
                                    <AmountContainor>
                                        <Add />
                                        <Amount><b>{product.quantity}</b></Amount>
                                        <Remove />
                                    </AmountContainor>
                                    <Price>
                                        ${product.price * product.quantity}
                                    </Price>
                                </PriceDatail>
                            </Product>
                            )
                            )
                        }
                        <Hr />
                        </Info>
                        <Summary>
                            <SumTitle>ORDER SUMMERY</SumTitle>
                            <SumItem>
                                <SumText>SubTotal</SumText>
                                <SumPrice>$ {cart.total}</SumPrice>
                            </SumItem>
                            <SumItem>
                                <SumText>Estimated Shipping</SumText>
                                <SumPrice>+$ 7</SumPrice>
                            </SumItem>
                            <SumItem>
                                <SumText>Shiping Discount</SumText>
                                <SumPrice>-$ 7</SumPrice>
                            </SumItem>
                            <SumItem type="total">
                                <SumText >Total</SumText>
                                <SumPrice>$ {cart.total}</SumPrice>
                            </SumItem>
                            <StripeCheckout
        name="Three Comma Co."
        description="Big Data Stuff"
        image="https://cdn11.bigcommerce.com/s-va5pcinq8p/images/stencil/394x197/nest_wraps_logo_1680582268__91327.original.png"
        amount={cart.total*100}
        token={onToken}
        currency="USD"
        stripeKey={KEY}
        locale="US"
        email="info@vidhub.co"
        shippingAddress
        billingAddress
        >
                            <Button>Check Now</Button>
      </StripeCheckout>
                        </Summary>
                    </Bottom>
                </Wrapper>
                <Footer />
            </Conatainor>


        </div>
    )
}

export default Cart



