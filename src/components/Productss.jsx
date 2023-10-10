import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { tablets } from '../responsive'
import { Link } from 'react-router-dom'
import "./slider.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

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
    const Containor = styled.div`
align-items: center;
width:100%;
${tablets({ width: "100%" })}
margin:10px;
background-color: light-gray;

`

    const ImageCaontainor = styled.div`
    flex:1;
    margin: 2px;
    min-width: 250px;
    max-width: 300px;
${tablets({ maxWidth: "none" })}

   height:400px;
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
height:100%;
    width:100%;
    z-index:2;
    object-fit: contain;
    background: transparent;
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
    const MoreInfo = styled.div`
flex:1;
margin:8px;
width: 250px;

${tablets({ maxWidth: "none" })}

`




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
                        <Link to={`/moreProducts/${item.categories[1]}`}>
                        <Icon>
                            <SearchOutlined />
                        </Icon>
                        </Link>
                        <Icon>
                            <FavoriteBorderOutlined />
                        </Icon>
                    </Info>
                </ImageCaontainor>
            </Containor>
                <MoreInfo>
                    <h3 className='d-flex justify-content-center'>{item && item.title.slice(0,13)+"..."}</h3>
                </MoreInfo>
        </div>
    )
}

export default Productss
