import { Star, StarHalf } from '@material-ui/icons';
import React from 'react'

// style
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items:flex-start;

  max-width: 37.5rem;
  min-width: 17.3rem;
`

const ImgWrapper = styled.div`
      width: 100%;
`
const ProductImg = styled.img`
  display: block;
  /* width:240px;
  height:135px; */
  width:100%;
  height: 100%;
  `

const TextWrapper = styled.div``
const Tittle = styled.h3``

const RateWrapper = styled.div``
const RateScore = styled.span``

const RateStars = styled.div``;
const RateStar = styled.span``;

const RateReviewerNum = styled.span``;


const Price = styled.div`

`;
const Mark = styled.div``



const Product = () => {
  return (
    <Container>
        <ImgWrapper>
            <ProductImg src="https://res.cloudinary.com/kentcdodds-com/image/upload/w_1800,q_auto,f_auto/kentcdodds.com/illustrations/skis_z5lkc3"/>
        </ImgWrapper>

        <TextWrapper>
            <Tittle>Tittle</Tittle>

            <RateWrapper>
                <RateScore></RateScore>
                <RateStars>
                    <RateStar>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                        <StarHalf/>
                    </RateStar>
                </RateStars>

                <RateReviewerNum>reviewerNum</RateReviewerNum>
            </RateWrapper>

            <Price></Price>
            <Mark>mark</Mark>
        </TextWrapper>


    </Container>
  )
}

export default Product