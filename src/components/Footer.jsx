import React from 'react'
import styled from 'styled-components'
import Logo from './images/logoE.png'
import { Email, Facebook, GitHub, LinkedIn, MailOutline, Phone, Room, Twitter, WhatsApp } from '@mui/icons-material'
import payment from "./images/Payment-Background-PNG-removebg-preview.png"
import {mobile} from '../responsive'
import {tablets} from '../responsive'
import { sub_mobiles } from '../responsive'

const Footer = () => {

    const Containor = styled.div`
    display: flex;
    flex-wrap:wrap;
${tablets({display:"block"})}

    `
    const Left = styled.div`
    flex:1;
    display: flex;
flex-direction: column;
padding:20px;
    `
    const Image = styled.img`
width: 80px;
    `
    const Description = styled.p`
margin:20px 0px;
`
    const SocialContainor = styled.div`
display: flex;
align-items: center;

`

    const SocialIcons = styled.h1`
width: 40px;
height: 40px;
border-radius: 50%;
color: #fff;
background-color: ${props => props.color};
display: flex;
justify-content: center;
align-items: center;
margin-left:5px

`;
    // fac #4267B2 , Inst   radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);,  
    //twit #1DA1F2,  linkim   #0072b1   , github #4078c0
    const Center = styled.div`
    flex:1;
    padding:20px;
    `
    const Title = styled.h3`
    margin-bottom:20px
    `
    const List = styled.ul`
    margin:0;
    padding:0;
    display: flex;
    flex-wrap:wrap
    
    `
    const ListItem = styled.li`
width:50%;
list-style: none;
margin-bottom:15px;
    `



    const Right = styled.div`
    flex:1;
    margin-top:20px;
    padding:20px;
    `
    const ContactItem = styled.div`
margin-bottom:20px;
display: flex;
align-items: center;
`
    const Payment = styled.img`
width:200px;
`

    return (
        <div>
            <Containor>
                <Left>

                    <Image src={Logo} alt='logo' />

                    <Description>
                        Welcome to Nest Wraps Store, where shopping meets convenience, quality, and endless choices. Discover a world of possibilities right at your fingertips and redefine your online shopping experience.
                    </Description>
                    <SocialContainor>
                        <SocialIcons color="#4267B2">
                            <Facebook />
                        </SocialIcons>
                        <SocialIcons color='#25D366'>
                            <WhatsApp />
                        </SocialIcons>
                        <SocialIcons color='#1DA1F2'>
                            <Twitter />
                        </SocialIcons>
                        <SocialIcons color='#14171A'>
                            <GitHub />
                        </SocialIcons>
                        <SocialIcons color='#0072b1'>
                            <LinkedIn />
                        </SocialIcons>
                    </SocialContainor>
                </Left>
                <Center>

                    <Title>
                        <Title>UseFull Links</Title>
                    </Title>
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Cart</ListItem>
                        <ListItem>Men's Fashion</ListItem>
                        <ListItem>Women's Fashion</ListItem>
                        <ListItem>My Account</ListItem>
                        <ListItem>Profession</ListItem>
                        <ListItem>Orders</ListItem>
                        <ListItem>Order Tracking</ListItem>
                        <ListItem>Wishlist</ListItem>
                        <ListItem>Terms</ListItem>
                    </List>

                </Center>
                <Right>


                    <Title>
                        Contact
                    </Title>
                    <ContactItem>
                        <Room style={{ marginRight: "20px" }} />   810 House Plaza Street,West Karachi
                    </ContactItem>
                    <ContactItem>
                        <Phone style={{ marginRight: "20px" }} /> NTN Number : 4012165-6
                        STRN Number : 1700401243518
                    </ContactItem>
                    <ContactItem>
                        <MailOutline style={{ marginRight: "20px" }} />  nestContact@gmail.com
                    </ContactItem>
                    <Payment src={payment} />
                </Right>


            </Containor>
        </div>
    )
}

export default Footer
