import { Send} from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import {sub_mobiles} from '../responsive'

const NewsLeter = () => {


const Container=styled.div`
height: 80vh;
display: flex;
justify-content: center;
align-items: center;
background-color: #fffcff;
flex-direction: column;
background-color: lightgray;
padding:20px;

${sub_mobiles({height:"70%"})}

`
const Title=styled.h1` 
font-size: 70px;
margin-bottom: 10px;
${sub_mobiles({fontSize:"50px"})}

`
const Description=styled.p`
font-size: 24px;
font-weight: 300;
margin-bottom: 10px;
text-align: center;

`
const InputContainor=styled.div`
min-width:200px;
max-width: 400px;
height: 40px;
background-color: #fff;
display: flex;
justify-content: space-between;
align-items: center;
border: 1px solid lightgray;
padding:0px 0px 0px 10px;
margin-top:20px

`
const Input=styled.input`
border:none;
outline:none;
flex:8
`
const Button=styled.button`
flex:1
border: none;
background-color: #a08152;
color: #fff;
border: none;
padding:7px 15px;
cursor: pointer;

`




    return (
        <div>
            <Container>
                <Title>
                    NewsLeter
                </Title>
                <Description>
                As a valued subscriber, you'll be the first to know about our exclusive promotions, discounts, and limited-time offers. Get ready for savings that you won't find anywhere else.
                </Description>
                <InputContainor>
                    <Input placeholder='something'/>
                    <Button>
                        <Send />
                    </Button>
                </InputContainor>
            </Container>
        </div>
    )
}

export default NewsLeter
