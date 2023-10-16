
import React, { useState } from 'react';
import styled from 'styled-components';
import bg from '../components/images/c6.avif';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/apiCalls';
import {tablets } from '../responsive'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url(${bg}) center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #fff;
 ${tablets({width:"86%"})}

`;

const Title = styled.p`
  font-size: 28px;
  text-align: center;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px;
  padding: 14px;
  border: 1px solid #a08152;
  outline: none;
`;

const Agreement = styled.div`
  font-size: 12px;
  margin: 20px;
`;

const Button = styled.button`
  width: 100%;
  background-color: #a08152;
  padding: 10px;
  color: #fff;
  font-weight: 600;
  margin-top: 10px;
background-color: ${props=>props.type === "SignUp" && "transparent"};
color:${props=>props.type === "SignUp" && "#a08152"};
border:${props=>props.type === "SignUp" && "1px solid #a08152;"};

&:disabled{
   cursor:not-allowed;
   }
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const { isFetching, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username: userName, password: userPassword });
  };

  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <Form>
          <Input
            placeholder="UserName"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <Agreement>
            "Review, sign, and submit the agreement with accurate details. Your cooperation is appreciated. Thank you for completing the signup."
          </Agreement>
          <Button type="Login" onClick={handleLogin} disabled={isFetching}>
            Login
          </Button>
          {error && <Error>`Something went wrong...`</Error>}
          <Button type="SignUp">CREATE AN ACCOUNT</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
