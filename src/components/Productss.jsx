import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'


const Productss = ({ item }) => {
    const Info = styled.div`
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
    console.log(item)
    const Container = styled.div`
    flex:1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    background-color: #FAF9F6;
    position: relative;
    
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
    height: 90%;
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
    margin:10px;
    cursor: pointer;
    transition:all 0.5s ease ;
    && :hover{
    background-color: aliceblue;
    transform: scale(1.1);
}
    `
    return (
        <div>
            <Container>
                <Circle />
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
            </Container>
        </div>
    )
}

export default Productss
