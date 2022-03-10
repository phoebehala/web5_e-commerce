import React from 'react'
import { useState } from 'react'

// style
import styled from 'styled-components';
import {mobile, tablet} from '../util/responsive';
import { Link } from 'react-router-dom';
//icons
import {FavoriteBorder, Search, ShoppingCartOutlined} from  '@material-ui/icons'
import { Badge } from '@material-ui/core';

//material-ui
import { Drawer } from '@material-ui/core';

// redux
import { useDispatch, useSelector } from 'react-redux';
import  { logout} from '../redux/userSlice'

// component
import Wishlist from './Wishlist';



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
    const cartQuantity =useSelector(state=>state.cart.quantity)
    //console.log('what is quantity in the cart state?',quantity);

    const wishlistQuantity = useSelector(state=>state.wishlist.quantity);
    const wishlistProducts =useSelector(state=>state.wishlist.products);

    const [wishlistOpen, setWishlistOpen ] = useState(false);

    const user = useSelector(state=>state.user.currentUser)

    const dispatch =useDispatch();
    const handleLogout = ()=>{
        dispatch(
            logout()
        )
    }

  return (
    <Container >
        <Wrapper>
            <Left>
                <Link to="/" className='react-link'>
                    <Logo> HALA </Logo>
                </Link>
            </Left> 

            { user 
             ?  <Right>
                    <Link to="/cart" className='react-link'> 
                        <MenuItem>
                            <Badge badgeContent={cartQuantity} color="primary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </MenuItem>       
                    </Link>

                    {/*  for wishlist  */}
                    <Drawer anchor='left' open={wishlistOpen} onClose={()=>setWishlistOpen(false)}>
                        <Wishlist wishlistProducts={wishlistProducts} wishlistQuantity={wishlistQuantity} />
                    </Drawer>
                    <MenuItem onClick={() =>setWishlistOpen(true)}>
                        < Badge badgeContent={wishlistQuantity} color="primary">
                            <FavoriteBorder />
                        </Badge>
                    </MenuItem>

                    <MenuItem onClick={handleLogout}>LOGOUT</MenuItem>

                </Right>
            
            : 
                <Right>
               
                    <Link to="/register" className='react-link'>
                        <MenuItem>REGISTER</MenuItem>
                    </Link>
                    <Link to="/login" className='react-link'>
                        <MenuItem>SIGN IN</MenuItem>
                    </Link>
                </Right>
                }

           

        </Wrapper>
    </Container>
  )
}

export default Navbar