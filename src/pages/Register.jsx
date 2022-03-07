import React from 'react';
import { useState, useRef} from "react";

// style
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import {mobile, tablet} from '../util/responsive';

// components


// redux
// import { login } from "../redux/apiCall";
// import { useDispatch, useSelector } from "react-redux";


const Container = styled.div`
    width: 100vw;
    height: 100vh;
background: linear-gradient(
    rgba(255, 255, 255, 0.5) 20%,
    rgba(255, 255, 255, 0.4) 30%,
    rgba(255, 255, 255, 0.3) 40%, 
    rgba(255, 255, 255, 0.2) 90%,
    rgba(255, 255, 255, 0.1) 98%
  ),
  url("https://i.pinimg.com/564x/d4/a2/fc/d4a2fcd2321a0d907a56f384a70ea21f.jpg")
    center;
background-size: cover;


`;

const TopWrapper = styled.div`
    padding: 20px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Logo = styled.h1`
  font-weight: bold;

  /* color: var(--vintage-red); */

  ${tablet({ fontSize: "24px" })}

`;
const LoginBtn = styled.button`
    background-color: var(--main-color);
    border: none;
    color: white;
    border-radius: 5px;
    padding: 8px 15px;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;

    transition: all 0.5s ease;
    :hover{
        background-color:var(--vintage-red);
    }
`
const RegisterWrapper = styled.div`
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
const TextH1 = styled.h1`
    font-size: 3rem;
    max-width: 640px;
    margin: 0 auto;
    text-align: center;
    
    ${tablet({ fontSize: "1.9rem"})}
    ${mobile({ fontSize: "1.3rem"})}
`
const TextH2 = styled.h2`
    font-size: 2rem;
    margin: 20px;
    max-width: 950px;
    text-align: center;
    font-weight: 400;

        
    ${tablet({ fontSize: "1.8rem" , margin:"10px"})}
    ${mobile({ fontSize: "1rem", margin:"5px"})}
`
const TextP = styled.p`
    font-size: 1.5rem;
            
    ${tablet({ fontSize: "1.2rem"})}
    ${mobile({ fontSize: ".9rem", textAlign:"center"})}
`
const EmailBox = styled.div`
    width: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    height: 50px;
    border-radius: 5px;

    ${tablet({ })}
    ${mobile({  width: "80%", height:"40px", marginTop:"0px"})}
`
const UserInput = styled.input`
    flex: 9;
    height: 100%;
    border: none;
    padding: 0 10px;

    ${tablet({ flex: "8" })}
`
const InputButton = styled.button`
    flex: 3;
    height: 100%;
    background-color: var(--main-color);
    border: none;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;

    transition: all 0.5s ease;
    :hover{
        background-color:var(--vintage-red);
    }

    ${tablet({fontSize: "1rem" })}
    ${mobile({ fontSize: ".8rem"})}
`
const RegisterForm =  styled.form`
    width: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    height: 50px;
    border-radius: 5px;
`

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // use useRef() to access DOM
    const emailRef = useRef();
    const passwordRef = useRef();


    const handleStart =()=>{
        console.log("emailRef.current",emailRef.current); // <input type="email" ref={emailRef} placeholder="email address"  />
        console.log("emailRef.current.value",emailRef.current.value);
        setEmail(emailRef.current.value)
    }

    const handleRegister =()=>{
        setPassword(passwordRef.current.value)
    }

  return (
        <Container>
            <TopWrapper>
                <Logo> HALA </Logo>
                <LoginBtn>Sign In</LoginBtn>
            </TopWrapper>

            <RegisterWrapper>
                <TextH1>high-class clothes, jewery, and more.</TextH1>
                <TextH2>Shop anywhere. Cancel anytime.</TextH2>
                <TextP>
                Ready to shop? Enter your email to create your membership.
                </TextP>

                { !email ? (
                    // if ther is no email, show the inpu frame to ask a use to enter the email
                    <EmailBox>
                            <UserInput type="email" ref={emailRef} placeholder="email address"  />
                            <InputButton className="registerButton" onClick={handleStart} >
                                Get Started
                            </InputButton>
                    </EmailBox>
                ):
                // if there is email , show the inpu frame to ask a use to enter the password
                    <RegisterForm>
                            <UserInput type="password" ref={passwordRef} placeholder="password"  />
                            <InputButton className="registerButton" onClick={handleRegister}>
                            Register
                            </InputButton>
                    </RegisterForm>
                }
            </RegisterWrapper>
   
        </Container>



      

    );
};

export default Register;
