import React from 'react';
import { Link } from 'react-router-dom';

// style
import styled from 'styled-components';
import {mobile, tablet} from '../util/responsive';

// define Image before Container to make   &:hover ${Image }{} take effect
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    ${tablet({ height: "40vh" })}
`;

// define Button  before Container to make   &:hover ${Button}{} take effect
const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: rgba(255,255,255, 0.2);
    color:white;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;

    transition: all 0.5s ease;
    &:hover{
        /* background-color:rgba(0,0,0, 1); */
        /* background-color: red; */
    }
`;

// flex:1 >>> its parent <Container> from Categories.jsx is display:flex
// flex:1  >>> set Image width in advance to reflect the setting
const Container = styled.div`
    flex:1;
    margin: 3px;
    height: 70vh;
    
    position: relative;

    transition: all .3s ease-in-out;
    &:hover ${Image}{
        opacity: 0.5;
    };
    &:hover ${Button}{
        background-color:rgba(0,0,0, 0.3);
        &:hover{
            background-color:rgba(0,0,0, 0.8);

    }
    };


`



// position: absolute; >>> set position: relative for its parent in advance 
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    
  
`;
const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;



const CategoryItem = ( {item} ) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Link to= {`/products/${item.cat}`} >
                    <Button>SHOP NOW</Button>
                </Link>
            </Info> 
        </Container>
      );
};

export default CategoryItem;
