
import React from 'react'

// style
import styled from 'styled-components';

// icons
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';


// components
import Product from './Product';

const Container = styled.div`
    width: 100%;
    margin-top: 10px;
`;

const Title = styled.span`
        font-size: 20px;
        font-weight: 500;
        margin-left: 50px;
`
const Wrapper = styled.div`
 position: relative;  /* for children's position: absolute; */
`


const SlideContainer = styled.div`
            margin-left: 50px;
            margin-top: 10px;
            display: flex;
            width: max-content;

            transform: translateX(230px);
            transition: all 1s ease;
`


const ProductsSlide = () => {
  return (
    <Container>
        <Title/>
        <Wrapper>
            <ArrowBackIosOutlined className='sliderArrow left'
                              
                          
            />
            <SlideContainer>
    
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                
            </SlideContainer>

            <ArrowForwardIosOutlined className='sliderArrow right'
                                         
            />

        </Wrapper>
    </Container>
  )
}

export default ProductsSlide