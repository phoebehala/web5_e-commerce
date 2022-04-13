import React, { useEffect, useState } from 'react'

import axios from 'axios'


// style
import styled from 'styled-components';
import {mobile, tablet} from '../util/responsive';

// components
import CategoryItem from './CategoryItem';

//data
import {categories} from '../data/data'

const Container = styled.div`
    display: flex;
    
    padding: 20px;
    justify-content: space-between;

    ${tablet({ padding: "0px", flexDirection:"column", marginTop:"20px"})}
`


const Categories = () => {
  // const [categories , setCategories] = useState();

  // useEffect( ()=>{
  //   // make a request to API
  //   const getCategories = async ()=>{                                                    
  //       try {
  //           const res = await axios.get(`https://fakestoreapi.com/products/categories/`)                             
  //           console.log(res);
  //           setCategories(res.data);
  //       } catch (error) {    

  //       }
  //   }
  //   getCategories()
  // },[]) // fire the func once 

  return (
    <Container>
        {categories && categories.map((item,i )=>(
              <CategoryItem item={item} key={i}/>
          ))}
    </Container>
  )
}

export default Categories