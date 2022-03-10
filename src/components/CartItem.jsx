import React from 'react'
// instead of import { useHistory } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'

// style
import styled from 'styled-components';
import {mobile, tablet} from '../util/responsive';
//icons
import { Add, Remove } from "@material-ui/icons";


// redux
import { useDispatch, useSelector } from 'react-redux';
import {addProductByOne, removeProductByOne} from '../redux/cartSlice'


const CartProduct = styled.div`
    display: flex;
    justify-content: space-between;

    ${tablet({ flexDirection: "column" })}
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

    ${tablet({ margin: "5px 15px" })}

`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    
    ${tablet({ marginBottom: "20px" })}
`;
const Hr = styled.hr`
   background-color: #eee;
   border: none;
   height:1px;
   width:100% ;
   margin:20px 0;
`;



const CartItem = ({product}) => {

    const dispatch = useDispatch();
    const handleAddToCartByOne =()=>{
        dispatch(
            addProductByOne({
                ...product,  // copy all product info such as quantity, color, size, price....
            })
        )
    }
    const handleRemoveFromCartByOne =()=>{
        dispatch(
            removeProductByOne({
                ...product,  // copy all product info such as quantity, color, size, price....
            })
        )
    }

  return (
    <CartProduct>
        <ProductDetail>
            <Link to={`/product/${product.id}`} className="react-link">
                <Image src={product.image} />
            </Link>
            <Details>
                <ProductName>
                    <b>Product:</b> {product.title}
                </ProductName>
                <ProductId>
                    <b>ID:</b> {product.id}
                </ProductId>
        
            </Details>
        </ProductDetail>
        <PriceDetail>
            <ProductAmountContainer>
            <Add onClick={()=>handleAddToCartByOne()}/>
            <ProductAmount>{product.quantity}</ProductAmount>
            <Remove onClick={()=>handleRemoveFromCartByOne()}/>
            </ProductAmountContainer>
            <ProductPrice>$ {(product.price*product.quantity).toFixed(2)}</ProductPrice>
        </PriceDetail>
        <Hr />
    </CartProduct>
  )
}

export default CartItem