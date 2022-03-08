import React from 'react';
import { useEffect, useState } from "react";

// instead of import { useHistory } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

// style
import styled from 'styled-components';
import {mobile, tablet} from '../util/responsive';
//icons
import { Add, Remove } from "@material-ui/icons";

// components
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';

// redux
// import { useSelector } from 'react-redux';

// stripe
// import StripeCheckout from "react-stripe-checkout";





const Container = styled.div``

//
const Wrapper = styled.div`
    padding: 20px;

    ${mobile({ padding: "10px" })}
  
`;

// 
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

// top
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 20px;
  
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props=>props.type === "filled" && "none"};
  background-color: ${props=>props.type === "filled" ? "black" :"transparent"};
  color: ${props=>props.type === "filled" && "white"};
`;

const TopTexts = styled.div`

`;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;

    ${mobile({ display: "none" })}
`;

// bottom
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

    ${mobile({ flexDirection: "column" })}

`;


// bottom left
const Info = styled.div`
    flex:3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;

    ${mobile({ flexDirection: "column" })}
`;

// bottom left  > left
const ProductDetail = styled.div`
    flex:2;

    display: flex;
`;
// bottom left  > left > left
const Image = styled.img`
    width: 200px;
`;
// bottom left  > left > right
const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;

    background-color:${props => props.color};
`;

const ProductSize = styled.span``;

// bottom left  > right
const PriceDetail = styled.div`
    flex:1;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`;
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;

    ${mobile({ margin: "5px 15px" })}

`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    
    ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
   background-color: #eee;
   border: none;
   height:1px;
`;

// bottom right
const Summary = styled.div`
    flex:1;

    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;

    /*height: 50vh;  limit the height of the Summary*/

    ${mobile({ height: "50vh" })}
    
   
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    
    display: flex;
    justify-content: space-between;

    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};

`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`;


const Cart = () => {


  return (
        <Container>
            <Navbar />
            <Announcement />
                <Wrapper>
                    <Title>YOUR BAG</Title>
                    <Top>
                        <TopButton>CONTINUE SHOPPING</TopButton>
                        <TopTexts>
                            <TopText>Shopping Bag(2)</TopText>
                            <TopText>Your Wishlist (0)</TopText>
                        </TopTexts>
                        <TopButton type="filled">CHECKOUT NOW</TopButton>
                    </Top>

                    <Bottom>

                        <Info>
      
                            <Product>
                                <ProductDetail>
                                    <Image src="https://i.pinimg.com/474x/02/72/bb/0272bbd458acaac3c6761222effc6463.jpg" />
                                    <Details>
                                        <ProductName>
                                            <b>Product:</b> product.title
                                        </ProductName>
                                        <ProductId>
                                            <b>ID:</b> product._id
                                        </ProductId>
                                        <ProductColor color="red" />
                                        <ProductSize>
                                            <b>Size:</b> product.size
                                        </ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>product.quantity</ProductAmount>
                                    <Remove />
                                    </ProductAmountContainer>
                                    <ProductPrice>$ product.price*product.quantity</ProductPrice>
                                </PriceDetail>
                            </Product>

                            <Hr />
                           
                                     
                        </Info>

                        <Summary>
                            <SummaryTitle>ORDER SUMMARY</SummaryTitle>

                            <SummaryItem>
                                <SummaryItemText>Subtotal</SummaryItemText>
                                <SummaryItemPrice>$ cart.total</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Estimated Shipping</SummaryItemText>
                                <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Shipping Discount</SummaryItemText>
                                <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem type="total">
                                <SummaryItemText>Total</SummaryItemText>
                                <SummaryItemPrice>$ cart.total</SummaryItemPrice>
                            </SummaryItem>

                
                        </Summary>
                    </Bottom>

                </Wrapper>
                        
            <Footer />

        </Container>
    );
};

export default Cart;
