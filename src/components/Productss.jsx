import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { Rating } from '@mui/material'
import { tablets } from '../responsive'
import "./slider.scss"

const Productss = ({ item }) => {
    const Info = styled.div`
    flex:1;
    opacity:0;
    background-color: gray;
    height: 100%;
    width:100%;
    background-color: rgba(0,0, 0, 0.2);
    z-index:3;
    position: absolute;
    top:0;
    left:0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition:all 0.5s ease ;
    cursor: pointer;

}    

    `
const Containor=styled.div`
align-items: center;
width:100%;
${tablets({width:"100%"})}


`

    const ImageCaontainor = styled.div`
    flex:1;
    margin: 2px;
    min-width: 250px;
    max-width:370px;
${tablets({maxWidth:"none"})}

    height:350px;
    display: flex;
    align-items: center;
    background-color: #FAF9F6;
    position: relative;
    background-color: aliceblue;
    
    ;&& :hover${Info}{
        opacity:1;
    
    }

    `
    const Circle = styled.div`
    height: 200px;
    width:200px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    opacity:0.2

    `
    const Image = styled.img`
    padding:10px;
    height: 100%;
    width:100%;
    z-index:2;
    object-fit: contain;
   
    `

    const Icon = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin:2px;
    cursor: pointer;
    transition:all 0.5s ease ;
    && :hover{
    background-color: aliceblue;
    transform: scale(1.1);
}
    `
const MoreInfo=styled.div`
flex:1;
margin:8px;
min-width: 250px;
max-width:370px;
${tablets({maxWidth:"none"})}

`
const Desc=styled.div`

text-align: center;

`
const Price=styled.span`
font-size: 30px;

`
const Rate=styled.span``



    return (
        <div className='p_containor'>
            <Containor>
                <Circle />
                <ImageCaontainor>
                <Image src={item && item.img} />
                <Info>
                    <Icon>
                        <ShoppingCartOutlined />
                    </Icon>
                    <Icon>
                        <SearchOutlined />
                    </Icon>
                    <Icon>
                        <FavoriteBorderOutlined />
                    </Icon>
                </Info>
                </ImageCaontainor>
                <MoreInfo>

                <Desc>
                Lorem ips    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, sapiente....
                </Desc>
                <div className='d-flex align-items-center mt-3 justify-content-center'  >
                <Price>
                    $80
                </Price>
                <Rate>
                    <Rating name="read-only" value={3} readOnly />
                </Rate>
                </div>
                </MoreInfo>
            </Containor>
        </div>
    )
}

export default Productss
