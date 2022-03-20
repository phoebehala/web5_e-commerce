import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined, Star, StarHalf } from '@material-ui/icons';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

// style
import styled from 'styled-components';
// materialUI components
import Tooltip from '@mui/material/Tooltip';

// redux
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cartSlice';
import {addToWishlist} from '../redux/wishlistSlice';



// be defined in advance for hover effect &:hover{ ${TextWrapper }{} }
const TextWrapper = styled.div`
  font-size:1.6rem;
  font-weight: 400;
  line-height: 1.4;
  width: 100%;
`
const Container = styled.div`
  width:300px;
  /* height: 100%; */

  margin-left:10px ;

  display: flex;
  flex-direction: column;
  align-items:flex-start;

  &:hover{
    width:400px;

    -webkit-box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 0px 0px 2px 1px rgba(255,255,255,0.5); 
    box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 0px 0px 2px 1px rgba(255,255,255,0.5);
    border-radius: 5px;



    position: absolute;
    top:-30px;
    left: 300px;
    z-index: 1; /* to cover original image */


    ${TextWrapper}{
      display: none;
    }

  }

`

const ImgWrapper = styled.div`
  width: 100%;

  position: relative; /* for child's  position: absolute; */
`
const ProductImg = styled.img`
  width:100%;
  height: 100%;
  object-fit: cover;

`
const Info = styled.div`
  opacity: 1;

  width: 100%;
  height: 100%;

  position: absolute; /*thanks to parent's   position: relative; */
  top: 0;
  left: 0;
  z-index: 3;

  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.5s ease;
  cursor: pointer;
 
`;
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 10px;

    transition: all 0.5s ease;
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
      }
`;


const Tittle = styled.h3`
  font-size: 1rem;
  /* height: 36px; */
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: normal;
  margin-top: 0.8rem;
  margin-bottom: 0.4rem;
  letter-spacing: -.02rem;
  font-weight: 700;
  /* line-height: ; */
`

const RateWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.4rem;
`
const RateScore = styled.span`
    margin-right: 0.4rem;
    color: #b4690e;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -.02rem;
    font-size: 1rem;
`

const RateStars = styled.div`
  font-size: 1rem;
`;
const RateStar = styled.span``;

const RateReviewerNum = styled.span`
  color:#6a6f73;
  margin-left: 0.4rem;
  font-weight: 400;
  line-height: 1.2;
  font-size: 1rem;
`;


const Price = styled.div`
    letter-spacing: .02rem;
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.4rem;
`;
const Mark = styled.div`
    display: inline-block;
    padding:10px;
    white-space: nowrap;
    border-radius: 2px; 
    background-color: var(--main-color);
    color:white;
    /* font-weight: 700; */
    /* line-height: 1; */
    letter-spacing: .02rem;
    font-size: 1rem;
`



const Product = ({key,item}) => {
  const [isHovered, setIsHovered] = useState(false)

  console.log(key); // undefind

  let increment =0;
  let max =5;

  // redux  // let it know addProduct() is redux reducer function
  const dispatch = useDispatch()

  const handleAddToCart =()=>{
    dispatch(// dispatch action
            //addProduct({product:product, quantity:quantity, subTotal:product.price*quantity})
  
        addProduct({
            ...item,  // copy all product info such as quantity, color, size, price....
            quantity:1,    // override by the quantity by 1
        })
    )
  }
  const handleAddToWishlist =()=>{
    dispatch(// dispatch action
      addToWishlist({
          ...item,  // copy all this item(product) info such as quantity, color, size, price....
          quantity:1,    // override by the quantity by 1
      })
    )
  }


  return (
    <Container  style={{left: isHovered && (item.id*(300+10)-50) }}
                onMouseEnter={()=>{ setIsHovered(true)}}
                onMouseLeave={()=>{ setIsHovered(false)}}
    >
        <ImgWrapper>
            <ProductImg src={item.src[0]}/>
       
            {isHovered && (
              <Info >
                  <Tooltip title="Add to Cart">
                    <Icon>
                        <ShoppingCartOutlined onClick={()=>handleAddToCart()}/>
                    </Icon>
                  </Tooltip>

                  <Tooltip title="See Details">
                    <Icon>
                      <Link to={`/product/dummy/${item.id}`} className="react-link">
                        <SearchOutlined />
                      </Link>
                    </Icon>
                  </Tooltip>

                  <Tooltip title="Add to Wishlist">
                    <Icon>
                        <FavoriteBorderOutlined onClick={()=>handleAddToWishlist()}/>
                    </Icon>
                  </Tooltip>
                  
              </Info>
            )}

        </ImgWrapper>

        <TextWrapper>
            <Tittle>{item.title} </Tittle>

            <RateWrapper>
                <RateScore>{item.rating.rate}</RateScore>
                <RateStars>
                    <RateStar>
                     { [...Array(5)].map((star, index) => {

                       while(increment < item.rating.rate) {

                          if( (item.rating.rate-increment)<1){
                            increment++;
                            return (<StarHalf style={{color:"#e59819"}}></StarHalf>)
                          }
                          increment++;
                          return (<Star style={{color:"#e59819"}}></Star>)
                      }
                      while(max > item.rating.rate) {        
                          max--;
                       
                          return (<Star style={{color:"gray"}}></Star>)
                      }
     
                    })}                         
             
                    </RateStar>
                </RateStars>

                <RateReviewerNum>(222)</RateReviewerNum>
            </RateWrapper>

            <Price>CA${item.price}</Price>
            {item.mark &&<Mark>{item.mark}</Mark> }
        </TextWrapper>


    </Container>
  )
}

export default Product