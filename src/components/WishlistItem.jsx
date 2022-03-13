import React from 'react'
import { useState} from 'react';

// style
import styled from 'styled-components';
import {mobile, tablet} from '../util/responsive';
import { Link } from 'react-router-dom';
import {Button} from '@material-ui/core';

//icons
import { Delete, FavoriteBorderOutlined, RemoveCircle, RemoveCircleOutline } from '@material-ui/icons';
import { Add, Remove } from "@material-ui/icons";

// materialUI components
import Tooltip from '@mui/material/Tooltip';

// redux
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cartSlice';
import { removFromWishlist} from '../redux/wishlistSlice';


const WishlistWrapper =styled.div`
    display: flex;
    flex-direction:column ;
    border-bottom: 1px solid var(--light-gray);
    padding-bottom: 20px;
    margin-top:10px ;

`
const Top =styled.div`
    display:flex ;
    justify-content:space-between ;
    align-items:flex-start ;
    margin-bottom:10px ;
    h3{
        flex:4 ;
        margin-top:0 ;
    }
    span{
        flex:1;
        text-align: right;

        transition: all .3s ease-in-out;
        :hover{
            color:var(--marron-red) ;
        }
    }
`
const Bottom = styled.div`
    display:flex ;

    ${mobile({ flexDirection: "column"})}
    
  .information {
    flex:3;
    display: flex;
    flex-direction:column ;

    p{
        margin-top:0 ;
    }

  }
  img {
    flex:2;
    width:100px;
    height:100px ;
    object-fit:contain;

    ${mobile({ marginTop: "20px"})}
  }
`

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content:flex-start;
    width: 100%;
    margin-top: 10px;


`;
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;
const Amount = styled.span`
    width: 30px;
    height: 30px;

    border-radius: 5px;
    border: 1px solid var(--main-color);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;
const AddToCartBtn = styled.button`
    background: var(--main-color);
    color: white;
    outline: none;
    border: none;
    cursor: pointer;
    padding: 10px 25px;
    margin-left:10px ;
`


const WishlistItem = ({item}) => {

    const [quantity, setQuantity] = useState(1);

    // redux  // let it know addProduct() is redux reducer function
    const dispatch = useDispatch()

    const handleQuantity = (type)=>{
        if (type==="dec"){
            quantity>1 && setQuantity(quantity-1)
        }else{
            setQuantity(quantity+1)
        }
    }
    const handleAddToCart =()=>{
        dispatch(// dispatch action
                //addProduct({product:product, quantity:quantity, subTotal:product.price*quantity})
    
            addProduct({
                ...item,  // copy all product info such as quantity, color, size, price....
                quantity:quantity,    // override by the total quantity the user has added     const [quantity, setQuantity] = useState(1);
            })
        )
    }

    const handleRemovFromWishlist =()=>{
        dispatch(// dispatch action
            removFromWishlist({
              ...item,  // copy all product info such as quantity, color, size, price....
            })
        )
    }

  return (
    <WishlistWrapper key={item.id} >

        <Top>
            <h3>{item.title}</h3>
            <span>
                <Tooltip title="Remove From Whishlist">
                    <RemoveCircle style={{width:"30px", height:"30px"}}
                                onClick={()=>handleRemovFromWishlist()}/>
                </Tooltip>
            </span>
        </Top>

        <Bottom>
            <div className='information'>
                <p>price: ${item.price}</p>

                <AddContainer>
                    <AmountContainer>
                        <Remove onClick={()=>handleQuantity("dec")}/>
                        <Amount>{quantity}</Amount>
                        <Add onClick={()=>handleQuantity("inc")}/>
                    </AmountContainer>
                    <AddToCartBtn onClick={()=>handleAddToCart()}>ADD TO CART</AddToCartBtn>
                </AddContainer>

            </div>


            <img src={item.image} alt={item.title} />

        </Bottom>

    </WishlistWrapper>
  )
}

export default WishlistItem