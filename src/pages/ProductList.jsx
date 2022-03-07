import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

// style
import styled from "styled-components";
import {mobile, tablet} from '../util/responsive';

// components
import Navbar from '../components/Navbar.jsx';
import Announcement from '../components/Announcement';
// import Products from '../components/Products.jsx';
import Footer from '../components/Footer';
import Products from '../components/Products';


const Container = styled.div`

`;
const Title = styled.div`
    margin: 20px;   
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    margin: 20px;

    ${mobile({ width: "0px 20px" , display: "flex", flexDirection: "column" })}

`;
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;

    ${mobile({ marginRight: "0px" })}
`

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
 
`;
const Option = styled.option``;

const ProductList = () => {

  const [sort, setSort] = useState("rating");

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Tittle</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="rating">Rating</Option>
            <Option value="popularity">Popularity</Option>
            <Option value="asc">Price: Low to High </Option>
            <Option value="desc">Price: High to Low </Option>
          </Select>
        </Filter>
      </FilterContainer>
      {/* <Products cat={cat}  sort={sort} /> */}
      <Products  sort={sort} /> 

      <Footer />
    </Container>
  );
};

export default ProductList;