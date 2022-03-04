import React from 'react';
import { Link } from 'react-router-dom';

// style
import styled from 'styled-components';


const Container = styled.div`
  height: 30px;
  background-color: var(--main-color);
  color: white;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return (
        <Container>
            Super Deal! Free Delivery on Orders Over $100 
              <b  style={{marginLeft:"10px"}}>shop now</b>
        </Container>
    );
};

export default Announcement;
