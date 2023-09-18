import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import LogoE from "./images/logoE.png"
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import { Badge } from '@mui/material';
import { grey } from '@mui/material/colors';
const Navbar = () => {
  const Container = styled.div`
  height: 80px;
  width:100%;
margin-bottom:10px
  `;
  const Wrapper = styled.div`

  padding:10px 20px;
  display: flex;
  justify-content: space-between;
align-items: center;

`;
  const Left = styled.div`
 flex: 1;
  `
  const Center = styled.div`
  text-align: center;
  
  flex: 1;
  `

  const Logo = styled.div`
  
 `
  const Language = styled.span`
cursor: pointer;
display: flex;
align-items: center;


`

  const SearchContainor = styled.div`
border: 1px solid lightgray;
display: flex;
align-items: center;
border-radius:5px
`
  const Input = styled.input`
border:none;
outline:none;
padding:7px;


`

  const Right = styled.div`
flex: 1;
display:flex;
align-items: center;
justify-content: end;

`
  const MenuItem = styled.div`
font-size: 14px;
 cursor: pointer;
 padding: 5px;


`


  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Language>
              EN
              <SearchContainor>
                <Input />
                <SearchIcon style={{color:"grey", fontSize:20}}/>
              </SearchContainor>
            </Language>
          </Left>
          <Center>
            <Logo>
              <img src={LogoE} alt='logo' width="100px" />
            </Logo>
          </Center>
          <Right>
            <MenuItem>Register</MenuItem>
            <MenuItem>Login</MenuItem>
            <MenuItem>  <Badge badgeContent={4} color="secondary">
              <LocalGroceryStoreOutlinedIcon color="action" />
            </Badge>
            </MenuItem> </Right>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Navbar
