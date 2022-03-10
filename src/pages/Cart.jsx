import React from 'react';
import { useEffect, useState } from "react";

// instead of import { useHistory } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'

// style
import styled from 'styled-components';
import {mobile, tablet} from '../util/responsive';
//icons
import { Add, Remove } from "@material-ui/icons";

// components
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import CartItem from '../components/CartItem';

// redux
import { useDispatch, useSelector } from 'react-redux';

// stripe
// import StripeCheckout from "react-stripe-checkout";





const Container = styled.div``

//
const Wrapper = styled.div`
    padding: 20px;

    ${tablet({ padding: "10px" })}
  
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
    margin: 0px 10px;

    ${tablet({ display: "none" })}
`;

// bottom
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

    ${tablet({ flexDirection: "column" })}

`;


// bottom left
const Info = styled.div`
    flex:3;
    margin-top:20px ;
`;


// bottom right
const Summary = styled.div`
    flex:1;

    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;

    /*height: 50vh;  limit the height of the Summary*/

    ${tablet({ height: "50vh" })}
    
   
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

    const cart =useSelector(state=>state.cart);
    const wishlist =useSelector(state=>state.wishlist);




  return (
        <Container>
            <Navbar />
            <Announcement />
                <Wrapper>
                    <Title>YOUR BAG</Title>
                    <Top>
                        <Link to={"/products"} className='react-link'>
                            <TopButton>CONTINUE SHOPPING</TopButton>
                        </Link>
                        <TopTexts>
                            <TopText>Shopping Bag({cart.quantity?cart.quantity:"0"})</TopText>
                            <TopText>Your Wishlist ({wishlist.quantity?wishlist.quantity:"0"})</TopText>
                        </TopTexts>
                        <TopButton type="filled">CHECKOUT NOW</TopButton>
                    </Top>

                    <Bottom>
                        {cart.products.length === 0 ? <p>No items in cart.</p> : null}

                        <Info>
                        {cart.products.map(product=>(
                            <CartItem product={product} key={product.id}/>
                        ))}
                    
                                     
                        </Info>

                        <Summary>
                            <SummaryTitle>ORDER SUMMARY</SummaryTitle>

                            <SummaryItem>
                                <SummaryItemText>Subtotal</SummaryItemText>
                                <SummaryItemPrice>$ {cart.total.toFixed(2)}</SummaryItemPrice>
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
                                <SummaryItemPrice>$ {(cart.total).toFixed(2)}</SummaryItemPrice>
                            </SummaryItem>

                
                        </Summary>
                    </Bottom>

                </Wrapper>
                        
            <Footer />

        </Container>
    );
};

export default Cart;
