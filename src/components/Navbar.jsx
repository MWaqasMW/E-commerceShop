import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import LogoE from "./images/logoE.png"
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import { Badge } from '@mui/material';
import {mobile} from '../responsive'
import {tablets} from '../responsive'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../redux/apiCalls';
import { useDispatch } from 'react-redux';
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
${mobile({padding:"4px"})}


`;
  const Left = styled.div`
 flex: 1;
  `
  const Center = styled.div`
  text-align: center;
  flex: 1;
  width="50px";
  
  `

  const Logo = styled.img`
  ${mobile({width:"50px"})}
  width="50px"
  
  `
  const Language = styled.span`
cursor: pointer;
display: flex;
align-items: center;


`
const Eng= styled.div`
${mobile({display:"none"})}

`

  const SearchContainor = styled.div`
border: 1px solid lightgray;
display: flex;
align-items: center;
border-radius:5px
${mobile({display:"block"})}
${tablets({padding:"0px 5px"})}

`
  const Input = styled.input`
border:none;
outline:none;
padding:7px;
${mobile({width:"40px"})}
${tablets({width:"100%"})}



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
 const Navbar = () => {
 const quantity = useSelector(state=>state.cart.quantity)
 const user = useSelector(state=>state.user.currentUser)
 const dispatch = useDispatch();
 
//  const handleLogout=()=>{
//    const {token, ...obj} =user;
  
//   }
//   console.log(user)


  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Language>
              <Eng>
              EN
              </Eng>
              <SearchContainor>
                <Input placeholder='Search' />
                <SearchIcon style={{color:"grey", fontSize:20}}/>
              </SearchContainor>
            </Language>
          </Left>
          <Center>
            <Logo src={LogoE} alt='logo' width={"80px"}>
            </Logo>
          </Center>
          <Right>
  {user ? (
    <>
      <Link to={"/logout"}>
        <MenuItem >Logout</MenuItem>
      </Link>
      <Link to="/cart">
        <MenuItem>
          <Badge badgeContent={quantity} color="secondary">
            <LocalGroceryStoreOutlinedIcon color="action" />
          </Badge>
        </MenuItem>
      </Link>
    </>
  ) : (
    <>
      <Link to="/login">
        <MenuItem>Login</MenuItem>
      </Link>
      <Link to="/register">
        <MenuItem>Register</MenuItem>
      </Link>
    </>
  )}
</Right>


        </Wrapper>
      </Container>
    </div>
  )
}

export default Navbar



