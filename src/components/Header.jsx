import React from 'react'

// style
import styled from 'styled-components';
import {mobile, tablet} from '../util/responsive';

const Container = styled.div`
    height: 80vh;
    position: relative; 


`
const Bg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
`
const HeaderInfo = styled.div`
    position:absolute;

    right: 10%;
    bottom:20%;
`
const HeaderBtn = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;

    font-size: 1.8rem;
    font-weight: 500;

    cursor: pointer;

    background-color: gray;
    color: white;
    background-color:rgba(0, 0, 0, 0.5);

    transition: all 0.5s ease;
    &:hover{
        background-color:rgba(0, 0, 0, 0.3);
    }
`

const header = () => {

  return (
    <Container>
 
        <Bg src="https://i.pinimg.com/564x/6f/64/b5/6f64b519fade0a893e906c6155bbce34.jpg" alt="" />
     
        <HeaderInfo>
             <HeaderBtn>SHOP NOW </HeaderBtn>
        </HeaderInfo>



    </Container>

  )
}

export default header