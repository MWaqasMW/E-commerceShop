import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
background-color: #a08152;
height:40px;
color:#fff;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
width: 100%;

`


const Baner = () => {
  return (
    <div>
      <Container>
      Free Shipping Over $250
      </Container>
    </div>
  )
}

export default Baner
