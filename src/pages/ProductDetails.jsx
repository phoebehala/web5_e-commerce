import React, { useRef } from 'react'
import { useState } from 'react';

// style
import styled from 'styled-components';
import {mobile, tablet} from '../util/responsive';

// components
import Navbar from '../components/Navbar.jsx';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Products from '../components/Products';

// data
import {myProducts} from '../data/data'


const Container = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 100px auto;
    box-shadow: 0 0 5px #ccc;
`
const Details = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 30px 0;
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
    margin-bottom: 15px;
`
const RowH2Title = styled.h2`
    text-transform: uppercase;
    letter-spacing: 2px;
`
const RowPrice = styled.span`
    color: crimson;
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
const Desc =styled.p`
    line-height: 1.5;
    margin: 15px 0;
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
const AddToCartBtn = styled.button`
    background: #333;
    color: white;
    outline: none;
    border: none;
    cursor: pointer;
    padding: 10px 25px;
    margin-top: 15px;
`


const ProductDetails = () => {
    const [choosedindex, setChoosedIndex] = useState(0);

    // to access DOM
    const thumbRef = useRef();

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
    console.log(choosedindex);
  return (
    <>

    <Navbar/>
    <Announcement/>

    <Container>

    {
      myProducts.map(item =>(
        <Details key={item._id}>

          <BigImgWrapper>
            {/* <BigImg src={item.src[index]} alt=""/> */}
            <BigImg src={item.src[choosedindex]} alt=""/>
          </BigImgWrapper>

          <Box>
            <Row>
              <RowH2Title>{item.title}</RowH2Title>
              <RowPrice>${item.price}</RowPrice>
            </Row>

            {/* <Colors colors={item.colors} /> */}
            <Colors>
                {item.colors.map((c,i) =>(
                    // <ClickColorBtn style={{background:c}} key={index}>{c}</ClickColorBtn>
                    <ClickColorBtn style={{background:c}} key={i}></ClickColorBtn>
                ))}
            </Colors>

            <Desc>{item.description}</Desc>
            <Desc>{item.content}</Desc>

            <Thumb ref={thumbRef} >
                {item.src.map((image,i)=>(
                    <ThumbImg src={image} alt="" key={i}
                                 onClick={()=>handleClick(i)} 
                                 />
                ))}   
            </Thumb>
            <AddToCartBtn>Add to cart</AddToCartBtn>
          </Box>

        </Details>
      ))
    }
    </Container>

    <Footer />
  </>
  )
}

export default ProductDetails