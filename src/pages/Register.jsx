import React from 'react'
import styled from 'styled-components'
import bg from '../components/images/c6.avif'
import {tablets, mobile}from '../responsive'
const Register = () => {

    const Containor=styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${bg}) center/cover;
    display: flex;
    align-items: center;
    justify-content: center;

    `
    const Wrapper=styled.div`
    width: 40%;
  
    padding: 20px;
    background-color: #fff;
${tablets({width:"86%"})}

    `
    const Title=styled.p`
    font-size: 28px;
font-weight: 770;
text-align: center;

    `
    const Form=styled.div`
    display: flex;
flex-wrap: wrap;
    `
    const Input=styled.input`
    flex: 1;
 min-width: 40%;
 margin: 20px 10px 0px;
${mobile({width:"86%", margin:"5px 2px 0"  })}

 padding: 10px;
 border: 1px solid #a08152;
 outline: none;

    `
    const Agreement=styled.div`
    font-size: 12px;
    margin:20px;
    `
    const Button=styled.button`
    width: 100%;
    background-color: #a08152;
    padding: 10px;
    color: #fff;
    font-weight: 600;
    margin-top:10px;
    background-color: ${props=>props.type === "Login" && "transparent"};
    color:${props=>props.type === "Login" && "#a08152"};
    border:${props=>props.type === "Login" && "1px solid #a08152;"};
    `
  return (
    <div>
      <Containor>
        <Wrapper>
            <Title>
                CREATE AN ACCOUNT 
            </Title>
            <Form>
                <Input placeholder="first name"/>
                <Input placeholder="last name"/>
                <Input placeholder="Username"/>
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <Input placeholder="confirm Password"/>
                <Agreement>"Review, sign, and submit the agreement with accurate details. Your cooperation is appreciated. Thank you for completing the signup."</Agreement>
                <Button>CREATE </Button>
                <Button type='Login'>Login</Button>
            </Form>
        </Wrapper>
      </Containor>
    </div>
  )
}

export default Register
