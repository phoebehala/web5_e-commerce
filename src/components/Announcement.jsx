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

  b{
    text-decoration: underline;
    margin-left:10px;
    font-size:1rem ;
  }
`;

const Announcement = () => {
  return (
        <Container>
            Super Deal! Free Delivery on Orders Over $100 
            <Link to={'/products'} className="react-link">
              <b>shop now</b>
            </Link>
        </Container>
    );
};

export default Announcement;
