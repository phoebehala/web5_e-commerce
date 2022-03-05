import React from 'react';

// style
import styled from 'styled-components';
import {mobile, tablet} from '../util/responsive';
import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@material-ui/icons";

const Container = styled.div`
    background-color: var(--main-color);
    color: gray;
    margin-top: 100px;
`
const Wrapper = styled.div`
    display: flex;

    ${tablet({ flexDirection: "column" })}
`

// left
const Left = styled.div`
  flex: 1;

  padding: 20px;
  
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};

    display: flex;
    justify-content: center;
    align-items: center ;

    margin-right: 20px;
`;


// center
const Center = styled.div`
  flex: 1;
  padding: 20px;

  ${mobile({ display: "none" })}
  
`;

// -- for center and right
const Title = styled.h3`
  margin-bottom: 30px;
`;


const List = styled.ul`
/* remove default margin and padding */ 
    margin: 0; 
    padding: 0;
    list-style: none;

    display: flex;
    flex-wrap: wrap;
 
`;

const ListItem = styled.li`
    width: 50%; /* !!! */
    margin-bottom: 10px;
`;


// right
const Right = styled.div`
  flex: 1;
  padding: 20px;

  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
 
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;


// bottom
const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    font-size:.8rem;
    background-color: var(--main-color);
    color: white;

    padding: 5px 0;
`


const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Logo>HALA.</Logo>
                <Desc>
                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti quisquam reiciendis totam dolores, tenetur quo consectetur dolorem recusandae, itaque repellendus, neque repudiandae? Alias sint blanditiis inventore temporibus omnis magni error!
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>

            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>

            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}}/> 123 hala ave. , North Whislter 255789
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/> +1 234 56 78
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}} /> contact@hala.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Wrapper>

            <Bottom>
                <div style={{color:"gray"}}>©2021 Phoebe Yu</div>

            </Bottom>
        </Container>
    );
};

export default Footer;
