import { Title } from '@mui/icons-material'
import { Button } from 'bootstrap'
import React from 'react'
import styled from 'styled-components'

const CategoryItem = ({ item }) => {
  
  
const Container=styled.div``
const Image=styled.img``
const Info=styled.div``
const Title=styled.h1``
const Button=styled.button`

`;

  return (
    <div>
        
      <Container>
<Image src={item && item.img}/>
<Info>
    <Title>
        {item.title}
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
