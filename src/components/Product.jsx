import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined, Star, StarHalf } from '@material-ui/icons';
import React, { useState } from 'react'

// style
import styled from 'styled-components';



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


  return (
    <Container  style={{left: isHovered && (50+item.id*(300+10)-50) }}
                onMouseEnter={()=>{ setIsHovered(true)}}
                onMouseLeave={()=>{ setIsHovered(false)}}
    >
        <ImgWrapper>
            <ProductImg src="data:image/jpeg;base64,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"/>
            
            {isHovered && (
              <Info >
                  <Icon>
                      <ShoppingCartOutlined />
                  </Icon>
                  <Icon>

                          <SearchOutlined />

                  </Icon>
                  <Icon>
                      <FavoriteBorderOutlined />
                  </Icon>
                  
              </Info>
            )}

        </ImgWrapper>

        <TextWrapper>
            <Tittle>{item.title}</Tittle>

            <RateWrapper>
                <RateScore>{item.rateScore}</RateScore>
                <RateStars>
                    <RateStar>
                     { [...Array(5)].map((star, index) => {

                       while(increment < item.rateScore) {

                          if( (item.rateScore-increment)<1){
                            increment++;
                            return (<StarHalf style={{color:"#e59819"}}></StarHalf>)
                          }
                          increment++;
                          return (<Star style={{color:"#e59819"}}></Star>)
                      }
                      while(max > item.rateScore) {        
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