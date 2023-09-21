import React from 'react'
import Navbar from '../components/Navbar'
import Baner from '../components/Baner'
import Footer from '../components/Footer'
import styled from 'styled-components'
import p1 from '../components/images/grey-folded-t-shirt_125540-812-removebg-preview.png'
import p2 from '../components/images/c6.avif'
import p3 from '../components/images/c1.jpg'
import p4 from '../components/images/troser-removebg-preview.png'
import "./style.scss"
import { Add, Remove } from '@mui/icons-material'
import 'bootstrap/dist/css/bootstrap.min.css';
const Cart = () => {
    const Conatainor = styled.div``

    const Wrapper = styled.div`
    padding: 20px;

   
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
    
    `
    const TopButton=styled.button`
    font-weight: 600;
    cursor: pointer;
    padding: 10px;
    border:${props=>props.type === "filled" };
    background-color:${props=>props.type === "filled" ? "black" : "transparent"};
    color:${props=>props.type === "filled" && "#fff"};
    `
    const TopTexts = styled.div``
    const TopText = styled.span`
    cursor: pointer;
    margin: 0px 10px;
    text-decoration: underline;
    `
    






    const Summery = styled.div`
    flex:1;`
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
              
                        <h4 className=''>Order Summery</h4>
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


                 </div>
                 <div className='bottom'>
                    <div className="left">
                        <div className='sub-left'>
                        <div className='d-flex '>
                       <div className="img"><img src={p2} alt="img" /></div>
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
                       <div className="img"><img src={p3} alt="img" /></div>
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
                       <div className="img"><img src={p4} alt="img" /></div>
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
                    </div>


                 </div>
                </Wrapper>
                <Footer />
            </Conatainor>


        </div>
    )
}

export default Cart
