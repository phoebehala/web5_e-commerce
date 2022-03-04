import React from 'react'

// style
import styled from 'styled-components';
import {mobile, tablet} from '../util/responsive';
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
  return (
    <Container>
        {categories.map((item)=>(
              <CategoryItem item={item} key={item.id}/>
          ))}
    </Container>
  )
}

export default Categories