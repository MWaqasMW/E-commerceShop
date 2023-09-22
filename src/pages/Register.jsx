import React from 'react'
import styled from 'styled-components'
import bg from '../components/images/c3.avif'
const Register = () => {

    const Containor=styled.div`
    width: 100%;
    height: 100vh;
    background:linear-gradient(rgb(255,255,255,0.5),rgb(255,255,255,0.5)) url(bg);
    `
    const Wrapper=styled.div``
    const Title=styled.h1``
    const Form=styled.div``
    const Input=styled.input``
    const Agreement=styled.div``
    const Button=styled.button``
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
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
      </Containor>
    </div>
  )
}

export default Register
