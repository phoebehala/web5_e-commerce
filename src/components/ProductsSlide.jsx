
import React, { useRef, useState } from 'react'

// style
import styled from 'styled-components';

// components
import Product from './Product';

// icons
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';

// data
import {myProducts} from '../data/data'

const Container = styled.div`
    width: 100%;
    margin: 10px 0;

`;

const Title = styled.span`
    font-size: 20px;
    font-weight: 500;
    margin-left: 20px;

`
const Wrapper = styled.div`
  position: relative;  /* for children's position: absolute; */
  /* background-color: tomato; */
`


const ArrowIcon = styled.div`
    /* background-color: rgba(114, 114, 32, 0.5);  */
    color: white;

    position: absolute; /* thanks to parent's position: relative; */
    z-index: 99;
            
    /* to center position: absolute; item */
    top:0px;
    bottom: 0px;
    margin: auto;
   
    cursor: pointer;
        
    left:${(props)=>props.direction==="left" && "0px"};
    right:${(props)=>props.direction==="right"&&"0px"};
`
const SlideContainer = styled.div`
    margin-left: 10px;
    margin-top: 10px;
    display: flex;
    width: max-content;

    /* transform: translateX(230px); */
    transition: all 1s ease;

`



const ProductsSlide = () => {

    const slideRef = useRef() 
    console.log('slideRef',slideRef);

    const [isMoved, setIsMoved] = useState(false);

    const [slideNumber, setSlideNumber] = useState(0); // slideNumber >>> is the index of currently first slide we see in the container

    // each product:  width: 300px; + margin-left: 10px =310px
    const handleClick = (direction)=>{

        setIsMoved(true)

        // to access  <SlideContainer></SlideContainer>
        console.log('slideRef.current',slideRef.current); 
        let distance = slideRef.current.getBoundingClientRect().x-10   // -10 >>> to get the start position of <container>  // distance >>> to get how far we have gone   //  50 is  margin-left: 50px; of container
        console.log('distance',distance);  

        if(direction==="left" && slideNumber>0){
            setSlideNumber(slideNumber-1)

            console.log(slideRef.current.style);
            slideRef.current.style.transform=`translateX(${310+distance}px)`  // update refernece value  // to think like this: reset the translateX( ..px) instead of moving forward by ..px  
        }
        if(direction==="right" && slideNumber<4 ){
            setSlideNumber(slideNumber+1)

            console.log(slideRef.current.style);
            slideRef.current.style.transform=`translateX(${-310+distance}px)`  // update refernece value  // to think like this: reset the translateX( ..px) instead of moving forward by ..px
        }
    }
  return (
    <Container>
        <Title>suggest for you</Title>
        <Wrapper>
            <ArrowIcon  direction="left">
                <ArrowBackIosOutlined 
                        style={{  width: "50px" , 
                                  height: "100%" ,
                                  display:!isMoved && "none" }}
                        onClick={()=>{handleClick("left")}} 
                />
            </ArrowIcon>

            <SlideContainer ref={slideRef}>
    
                {myProducts.map((sp)=>(
                      <Product key={sp.id} item={sp}/>
                ))}

            
            </SlideContainer>

            <ArrowIcon direction="right">
                <ArrowForwardIosOutlined 
                            style={{  width: "50px" , 
                                      height: "100%" }}
                            onClick={()=>{handleClick("right")}} 
                />
            </ArrowIcon>

        </Wrapper>
    </Container>
  )
}

export default ProductsSlide