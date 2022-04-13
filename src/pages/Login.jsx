import React from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom';

// style
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import {mobile, tablet} from '../util/responsive';

// components

// API
import axios from "axios"

// redux
// import { login } from "../redux/apiCall";
import { useDispatch, useSelector } from "react-redux";
import {loginStart, loginSuccess, loginFailure } from '../redux/userSlice'


const Container = styled.div`
    width: 100vw;
    height: 100vh;
background: linear-gradient(
    rgba(255, 255, 255, 0.3) 20%,
    rgba(255, 255, 255, 0.4) 30%,
    rgba(255, 255, 255, 0.5) 40%, 
    rgba(255, 255, 255, 0.4) 70%,
    rgba(255, 255, 255, 0.3) 80%,
    rgba(255, 255, 255, 0.2) 90%,
    rgba(255, 255, 255, 0.1) 98%
  ),
  url("https://i.pinimg.com/564x/17/e0/66/17e0668070a8d43d2b9b018f14d78654.jpg")
    center;
background-size: cover;


`;

const TopWrapper = styled.div`
    padding: 20px 50px;

    display: flex;   /* solution for making logo on the top to be clicked: TopWrapper display:flex; +   <Link style={{zIndex:"99"}}>  */

`
const Logo = styled.h1`
  font-weight: bold;
  margin-top: 0px;
  /* color: var(--vintage-red); */

  padding: 20px;

  ${tablet({ fontSize: "24px" })}

`;
const LoginWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
`
const LoginForm = styled.form`
    width:30%;
    margin:auto;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    /* background-color: var(--main-color); */
    background-color:rgba(255, 255, 255, 0.6);
    border-radius: 5px;
    padding: 60px 68px 40px 68px;
    height: 60vh;

    ${tablet({ padding: " 40px 48px 40px 48px", width:"40%", backgroundColor:"rgba(255, 255, 255, 0.7)"})}
    ${mobile({ padding: " 30px 28px 30px 28px", width:"70%", backgroundColor:"rgba(255, 255, 255, 0.8)"})}
`;

const Title =  styled.h1`
    color:var(--dark-gray);
`;
const Input = styled.input`

    height: 40px;
    border-radius: 5px;
    border: white;
    background-color: rgba(255, 255, 255, 0.6);
    color: var(--main-color);
    padding-left: 10px;
`;
const Button = styled.button`
    height: 40px;
    border-radius: 5px;
    background-color: var(--main-color);
    color: white;
    border: none;
    font-size: 1.2rem;
    font-weight: 500;
    padding:0 15px ;
    cursor: pointer;

    transition: all 0.5s ease;
    :hover{
        background-color:var(--vintage-red);
    }
`;
const Error = styled.span`
  color: var(--marron-red);
  margin-bottom:10px ;
`;

const Text = styled.span`
    color: var(--dark-gray);
    font-size: 1rem;

`;
const GoSignUp = styled.span`
    margin-left:5px;

    font-size: .9rem;
    font-weight: 600;


    color:var(--marron-red);
    cursor: pointer;

    transition: all 0.5s ease;
    :hover{
        color:var(--vintage-red);
        font-weight: 700;
    }
`
const SmallText = styled.small`
    color:var(--dark-gray);
`



const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const {isFetching, error} = useSelector((state)=>state.user)

    const handleClick = async(e)=>{
        e.preventDefault();
        dispatch(loginStart());
        try {
            // to perform POST requests with Axios
            const res = await axios.post("https://fakestoreapi.com/auth/login", {
                username: username, 
                password: password
            })
            console.log('res',res);
            dispatch(loginSuccess(res.data)) 
        } catch (error) {
            dispatch(loginFailure())  
        }
    }
  return (
        <Container>

            <TopWrapper>
                <Link to="/" className='react-link' style={{zIndex:"99"}}>
                    <Logo> HALA </Logo>
                </Link>
            </TopWrapper>

            <LoginWrapper>
                <LoginForm>
                    <Title>Sign In</Title>
                    <Input  placeholder="Username"
                            onChange={(e)=>setUsername(e.target.value)} />

                    <Input placeholder="password" 
                           type="password" // hide password while typing
                           onChange={(e)=>setPassword(e.target.value)}
                           disabled={isFetching} />
                    {error && <Error>Something went wrong...</Error>}

                    <Link to="/login" className='react-link'>
                        <Button className="loginButton"
                                onClick={handleClick}
                        >Sign In</Button>
                    </Link>

                    <Text>
                    New to HALA? 
                        <Link to="/register" className='react-link'>
                            <GoSignUp>Sign up now.</GoSignUp>
                        </Link>
                    </Text>
                    <SmallText>
                    This page is protected by Google reCAPTCHA to ensure you're not a
                    bot. <b>Learn more</b>.
                    </SmallText>
                </LoginForm>
            </LoginWrapper>
   
        </Container>
      

    );
};

export default Login;
