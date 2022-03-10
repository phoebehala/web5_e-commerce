import React from 'react'
import { useState} from 'react';

// style
import styled from 'styled-components';
import {mobile, tablet} from '../util/responsive';

// component
import WishlistItem from './WishlistItem';

const Container = styled.aside`
  width: 500px;
  padding: 20px;

  ${mobile({ width: "250px"})}
`


const Wishlist = ({wishlistProducts, wishlistQuantity}) => {



  return (
    <Container>
    <h2>Your whishlist ({wishlistQuantity})</h2>

    {wishlistProducts.length === 0 ? <p>No items in wishlist.</p> : null}

    {wishlistProducts.map(item => (
        <WishlistItem item={item} key={item.id} />
    ))}

   {/* <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2> */}

    </Container>
  )
}

export default Wishlist