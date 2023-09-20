import { Title } from '@mui/icons-material'
import { Button } from 'bootstrap'
import React from 'react'
import styled from 'styled-components'

const CategoryItem = ({ item }) => {
  console.log("dsfddsf", item)

  const Container = styled.div`
flex:1;
width: 100%;
position: relative;

`
  const Image = styled.img`

object-fit: cover;
width: 100%;

`
  const Info = styled.div`
position: absolute;
top:0%;
left:0%;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;

align-items: center;
justify-content: center;

`
  const Title = styled.h1` 
  color:#fff;
  `
  const Button = styled.button`
  font-size: 16px;

padding: 10px 20px;
background-color: #a08152;
color: #fff;
border-radius: 5px;
margin-top: 20px;
cursor: pointer;

`;

  return (
    <div>

      <Container>
        <Image src={item && item.img} />
        <Info>
          <Title>
            {item && item.title}
          </Title>
          <Button>
            Shop Now
          </Button>
        </Info>
      </Container>
    </div>
  )
}

export default CategoryItem
