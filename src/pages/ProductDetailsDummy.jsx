import React, { useRef } from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

// style
import styled from 'styled-components';
import {mobile, tablet} from '../util/responsive';

//icons
import {  Star, StarHalf } from '@material-ui/icons';
import { KeyboardArrowDown, KeyboardArrowUp,  FavoriteBorderOutlined } from '@material-ui/icons';
import { Add, Remove } from "@material-ui/icons";

// components
import Navbar from '../components/Navbar.jsx';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Products from '../components/Products';

// data
import {myProducts} from '../data/data'


// redux
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cartSlice';
import {addToWishlist} from '../redux/wishlistSlice';


const TopWrapper = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 100px auto;
    margin-bottom:0px ;
    box-shadow: 0 0 5px #ccc;

`
const Details = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 30px 10px;

    ${tablet({ padding: "30px 0px" })}
`

const BigImgWrapper = styled.div`
    max-width: 500px;
    min-width: 290px;
    overflow: hidden;
    margin: 25px;
`
const BigImg = styled.img`
    width: 100%;
    height: 100%;
    max-height: 400px;
    display: block;
    object-fit: cover;
`
const Box = styled.div`
    max-width: 500px;
    min-width: 290px;
    margin: 25px;
`
const Row = styled.div`
    display: flex;
    justify-content: space-between;
`
const RowH2Title = styled.h2`
    text-transform: uppercase;
    letter-spacing: 2px;
`
const Price = styled.div`
    color: var(--marron-red);
    font-weight:600 ;
    font-size: 1.2rem;
    margin-bottom:10px ;
`
const Colors = styled.div``
const ClickColorBtn = styled.button`
    width: 30px;
    height: 30px;
    border: none;
    outline: none;
    margin-right: 5px;
    cursor: pointer;
`


const RateWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0.4rem 0;
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

const Desc =styled.p`
    line-height: 1.5;
    margin:  0  0 15px 0;
`

const Thumb = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    cursor: pointer;
    margin: 10px 0;

    &>:first-child{
        border: 1px solid var(--vintage-red);
        opacity: 1;
    }
`
const ThumbImg = styled.img`
    width: 90px;
    height: 100%;
    display: block;
    object-fit: cover;
    border: 1px solid #ddd;
    margin-right: 5px;
    opacity: 0.5;
    border-radius: 5px;
    
`
const AddContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    margin-top: 10px;
    ${mobile({ width: "100%" })}

`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    margin-right:10px ;
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
        transform: scale(1.1);
      }
`;


// bottom
const ShowMoreWrapper = styled.div`
    padding:30px ;
    position: relative;
`
const ArrowIcon = styled.div`
    position:absolute;

    bottom:${(props)=>props.direction==="down" && "30px"} ;
    
    left:50%;
    transform: translateX(-50%);

    color:var(--dark-gray) ;
    border: solid var(--main-color) 1px ;
    border-radius:50%;
    box-shadow: 0 0 5px #ccc;
    display:flex ;
    
`
const InfoDesc = styled.p`
    line-height: 1.5;
    margin: 15px 0;

    &::first-letter{
        margin-left:2rem ;
    }
`

const ProductDetailsDummy = () => {

    /* dummy solution 
        to get the productID a user clicked from slider to see the detail
        myProducts[productId] is the product shown in the page*/
    const location = useLocation();
    console.log(location ); //  "/product/dummy/2"
    const productId = location.pathname.split("/")[3];
    console.log(productId);
    
    const [quantity, setQuantity] = useState(1);

    // redux  // let it know addProduct() is redux reducer function
    const dispatch = useDispatch()

    // for rating
    let increment =0;
    let max =5;

    const [choosedindex, setChoosedIndex] = useState(0);

    // to access DOM
    const thumbRef = useRef();

    const [toggle, setToggle ] =useState(false);

    const handleClick = (index)=>{
        //alert(`you choose index ${index}`)
        console.log(`you choose index ${index}`);
        //setChoosedIndex({choosedindex:index})
        setChoosedIndex(index)
    /*
        console.log(thumbRef.current)
        console.log(thumbRef.current.children)
    HTMLCollection(4) [img.sc-eGRUor.iUdZgd, img.sc-eGRUor.iUdZgd, img.sc-eGRUor.iUdZgd, img.sc-eGRUor.iUdZgd]
        0: img.sc-fIosxK.ivYngR
        1: img.sc-fIosxK.ivYngR
        2: img.sc-fIosxK.ivYngR
        3: img.sc-fIosxK.ivYngR
        length: 4
        [[Prototype]]: HTMLCollection
    */
        console.log(thumbRef.current.children[index])

        const images = thumbRef.current.children
        for (let i=0;i<images.length; i++){
            images[i].style.opacity=`0.5`
            images[i].style.border=`none`
        }
        images[index].style.opacity=`1`
        images[index].style.border=` 1px solid var(--vintage-red)`
  
        
    }
    // console.log("choosedindex",choosedindex);

    const handleShowMore =()=>{
        setToggle(!toggle)
        console.log(toggle);
    }

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
                ...myProducts[productId],  // copy all product info such as quantity, color, size, price....
                quantity:quantity,    // override by the total quantity the user has added     const [quantity, setQuantity] = useState(1);
            })
        )
    }

    const handleAddToWishlist =()=>{
        dispatch(// dispatch action
          addToWishlist({
              ...myProducts[productId],  // copy all product info such as quantity, color, size, price....
              quantity:1,    // override by the quantity by 1
          })
        )
      }

  return (
    <>

    <Navbar/>
    <Announcement/>

    <TopWrapper>

        <Details key={productId}>

          <BigImgWrapper>
            {/* <BigImg src={item.src[index]} alt=""/> */}
            <BigImg src={myProducts[productId].src[choosedindex]} alt=""/>
          </BigImgWrapper>

          <Box>
            <Row>
              <RowH2Title>{myProducts[productId].title}</RowH2Title>
            </Row>

            <Price>${myProducts[productId].price}</Price>

            {/* <Colors colors={item.colors} /> */}
            <Colors>
                {myProducts[productId].colors.map((c,i) =>(
                    // <ClickColorBtn style={{background:c}} key={index}>{c}</ClickColorBtn>
                    <ClickColorBtn style={{background:c}} key={i}></ClickColorBtn>
                ))}
            </Colors>

            <RateWrapper>
                <RateScore>{myProducts[productId].rating.rate}</RateScore>
                <RateStars>
                    <RateStar>
                     { [...Array(5)].map((star, index) => {

                       while(increment < myProducts[productId].rating.rate) {

                          if ((myProducts[productId]-increment)<1){
                            increment++;
                            return (<StarHalf style={{color:"#e59819"}}></StarHalf>)
                          }
                          increment++;
                          return (<Star style={{color:"#e59819"}}></Star>)
                      }
                      while(max > myProducts[productId]) {        
                          max--;
                       
                          return (<Star style={{color:"gray"}}></Star>)
                      }
     
                    })}                         
             
                    </RateStar>
                </RateStars>

                <RateReviewerNum>(222)</RateReviewerNum>
            </RateWrapper>

            <Desc>{myProducts[productId].description}</Desc>
            <Desc>{myProducts[productId].content}</Desc>

            <Thumb ref={thumbRef} >
                {myProducts[productId].src.map((image,i)=>(
                    <ThumbImg src={image} alt="" key={i}
                                 onClick={()=>handleClick(i)} 
                                 />
                ))}   
            </Thumb>

            <AddContainer>
                <AmountContainer>
                    <Remove onClick={()=>handleQuantity("dec")}/>
                    <Amount>{quantity}</Amount>
                    <Add onClick={()=>handleQuantity("inc")}/>
                </AmountContainer>
                <AddToCartBtn onClick={()=>handleAddToCart()}>ADD TO CART</AddToCartBtn>
                <Icon>
                    <FavoriteBorderOutlined onClick={()=>handleAddToWishlist()}
                                            style={{width:"35px", height:"100%"}}/>
                </Icon>
            </AddContainer>

          </Box>

        </Details>

    
    </TopWrapper>

    <ShowMoreWrapper>
        {!toggle && (
            <ArrowIcon direction="down">
                <KeyboardArrowDown  style={{width:"50px", height:"100%"}}
                                    onClick={handleShowMore}/>
            </ArrowIcon>
        )}

        {toggle && (
            <ShowMoreWrapper>

                <InfoDesc>{ myProducts[0].info}</InfoDesc>
                
                <ArrowIcon direction="up">
                    <KeyboardArrowUp style={{width:"50px", height:"100%"}}
                                      onClick={handleShowMore}></KeyboardArrowUp>
                </ArrowIcon>
            
            </ShowMoreWrapper>
        )}
    </ShowMoreWrapper>

    <Footer />
  </>
  )
}

export default ProductDetailsDummy