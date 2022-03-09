import React from 'react'

// style
import styled from 'styled-components';
import {mobile, tablet} from '../util/responsive';
import { Link } from 'react-router-dom';
//icons
import {FavoriteBorder, Search, ShoppingCartOutlined} from  '@material-ui/icons'
import { Badge } from '@material-ui/core';

// redux
import { useSelector } from 'react-redux';

const Container = styled.div`
    height: 100%;
  
`
const Wrapper = styled.div`
    padding: 0 3%;

    display: flex;
    align-items: center;
    justify-content: space-between;


    
`
// left
const Left = styled.div`
    flex:1;

    display: flex;
    align-items: center;
    
`;

const Logo = styled.h1`
  font-weight: bold;

  ${tablet({ fontSize: "24px" })}

`;

// right
const Right = styled.div`
    flex:1;

    display:flex;
    align-items: center;
    justify-content: flex-end;


`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;

  margin-left: 25px;

  transition: all 0.5s ease;
  &:hover{
    font-weight: 600;
  }

  ${tablet({ fontSize: "12px", marginLeft: "10px" })}
 
`;


const Navbar = () => {
    const cart =useSelector(state=>state.cart)
    //console.log('what is cart state?', cart);
    const quantity =useSelector(state=>state.cart.quantity)
    //console.log('what is quantity in the cart state?',quantity);

  return (
    <Container >
        <Wrapper>
            <Left>
                <Link to="/" className='react-link'>
                    <Logo> HALA </Logo>
                </Link>
            </Left> 

            <Right>
                <Link to="/register" className='react-link'>
                    <MenuItem>REGISTER</MenuItem>
                </Link>
                <Link to="/login" className='react-link'>
                    <MenuItem>SIGN IN</MenuItem>
                </Link>

                <Link to="/cart" className='react-link'> 
                    <MenuItem>
                        <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>       
                </Link>
              

                <MenuItem>
                    < Badge badgeContent={1} color="primary">
                        <FavoriteBorder />
                    </Badge>
                </MenuItem>
            </Right>

        </Wrapper>
    </Container>
  )
}

export default Navbar