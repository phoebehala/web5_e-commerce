import React from 'react'
import { Link } from 'react-router-dom';

// style
import styled from 'styled-components';
import {mobile, tablet} from '../util/responsive';
// icons
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined, Star, StarHalf } from '@material-ui/icons';
// materialUI components
import Tooltip from '@mui/material/Tooltip';

// redux
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cartSlice';
import {addToWishlist} from '../redux/wishlistSlice';

// opacity: 0; >>> cannot see <Info> if a user doesn't hover it
const Info = styled.div`
  opacity: 0;

  width: 100%;
  height: 100%;

  position: absolute;    /* set its parent position: relative;  */
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

// flex:1 >>> its parent <Container> from Products.jsx is display:flex
// &:hover ${Info}{ opacity: 1;} >>> when a user hovers over Container, set opacity: 1 for ${Info}
const Container = styled.div`
    

    flex:1;
    margin: 5px;

    min-width: 280px;
    height:400px;

    /* display: grid;
    grid-template-columns: repeat(3, auto); */

    position: relative;

    &:hover ${Info}{
        opacity: 1;
    };

    ${tablet({ border: "1px var(--light-gray) solid" })}
    
`

const ImgWrapper = styled.div`
  height: 250px;
  width: 250px;
  margin: auto;

  padding: 10px;
  /* border: 1px red solid; */


  position: relative; /* for child's  position: absolute; */
`
const ProductImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit:contain;
    /* z-index: 2; */
`;


// be defined in advance for hover effect &:hover{ ${TextWrapper }{} }
const TextWrapper = styled.div`
  font-size:1.6rem;
  font-weight: 400;
  line-height: 1.4;
  width: 100%;

  padding-left: 10px;
`

  
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
  font-size: 1.1rem;

  line-height:1.2rem ;
  height: 1.2rem;
  width: 90%;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;

  margin-top: 0.8rem;
  margin-bottom: 0.4rem;
  letter-spacing: -.02rem;
  font-weight: 700;

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
    font-size: 1.2rem;
`

const RateStars = styled.div`
  display: flex;
  align-items: center;
`;


const RateReviewerNum = styled.span`
  color:#6a6f73;
  margin-left: 0.4rem;
  font-weight: 400;
  line-height: 1.4;
  font-size: 1rem;
`;


const Price = styled.div`
    letter-spacing: .02rem;
    font-size: 1.1rem;
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

const ProductCard = ({item}) => {
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
    <Container>
            <ImgWrapper>
                <ProductImg src={item.image} alt={item.title} />
            </ImgWrapper>

            <TextWrapper>
                <Tittle>{item.title}</Tittle>

                <RateWrapper>
                    <RateScore>{item.rating.rate}</RateScore>
                    <RateStars>
   
                        { [...Array(5)].map((star, index) => {

                        while(increment < item.rating.rate) {

                            if( (item.rating.rate-increment)<1){
                                increment++;
                                return (<StarHalf style={{color:"#e59819"}}/>)
                            }
                            increment++;
                            return (< Star style={{color:"#e59819"}}/>)
                        }
                        while(max > item.rating.rate) {        
                            max--;
                        
                            return (< Star style={{color:"gray"}} />)
                        }

                        })}                         
                
                    </RateStars>

                    <RateReviewerNum>({item.rating.count})</RateReviewerNum>
                </RateWrapper>

                <Price>CA${item.price}</Price>
                {item.mark &&<Mark>{item.mark}</Mark> }
            </TextWrapper>     
        <Info >
            <Tooltip title="Add to Cart">
                <Icon>
                    <ShoppingCartOutlined onClick={()=>handleAddToCart()} />
                </Icon>
            </Tooltip>
            <Tooltip title="See Details">
                <Icon>
                  <Link to={`/product/${item.id}`} className="react-link">
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
    
   
    </Container>
  )
}

export default ProductCard