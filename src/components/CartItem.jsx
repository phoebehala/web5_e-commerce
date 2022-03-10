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


const Container = styled.div`
    .detail-img{
        flex: 1;
    }
    .detail-text{
        flex: 4;

        .detail-text-amountAndPrice{
            display:flex ;

        }
    }
`
const CartProduct = styled.div`
    display: flex;
    justify-content: space-between;

    ${tablet({ flexDirection: "column" })}
`;

// bottom left  > left
const ProductImg = styled.div`
    padding:0 20px 20px 20px;
    width:30% ;
    margin:auto ;

    ${tablet({ padding: "10px" })}
`;
// bottom left  > left > left
const Image = styled.img`
    width: 100%;
`;
// bottom left  > left > right
const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;


const ProductName = styled.span``;

const ProductId = styled.span`
    margin:15px 0 ;
`;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;

    background-color:${props => props.color};
`;

const ProductSize = styled.span``;

// bottom left  > right
const ProductText = styled.div`
    padding:20px 10px 100px 20px ;

    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: column;
    

    ${tablet({ padding:"20px 40px" })}

`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;

    margin-right: 20px;
`;

const ProductAmount = styled.div`
    width: 30px;
    height: 30px;

    border-radius: 5px;
    border: 1px solid var(--main-color);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;

    ${mobile({ margin: "5px 10px" })}

`;

const ProductPrice = styled.h5`
    font-size: 1.5rem;
    font-weight: 400;
    margin: 5px;

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
      <Container>
        <CartProduct>
            <ProductImg className='detail-img'>
                <Link to={`/product/${product.id}`} className="react-link">
                    <Image src={product.image} />
                </Link>
            </ProductImg>

            <ProductText className='detail-text'>
                <Details className='detail-text-nameAndId'>
                    <ProductName>
                        <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                        <b>ID:</b> {product.id}
                    </ProductId>
                </Details>

                <div className='detail-text-amountAndPrice'>
                    <ProductAmountContainer>
                        <Add onClick={()=>handleAddToCartByOne()}/>
                        <ProductAmount>{product.quantity}</ProductAmount>
                        <Remove onClick={()=>handleRemoveFromCartByOne()}/>
                    </ProductAmountContainer>
        
                    <ProductPrice>$ {(product.price*product.quantity).toFixed(2)}</ProductPrice>
                </div>

            </ProductText>
        </CartProduct>

        <Hr />

      </Container>
  )
}

export default CartItem