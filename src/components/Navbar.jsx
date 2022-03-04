import React from 'react'

// style
import styled from 'styled-components';
import {tablet} from '../util/responsive';

//icons
import {FavoriteBorder, Search, ShoppingCartOutlined} from  '@material-ui/icons'
import { Badge } from '@material-ui/core';

const Container = styled.div`
    height: 100%;

  
`
const Wrapper = styled.div`
    padding: 0 3%;

    display: flex;
    align-items: center;
    justify-content: space-between;


    
`
// left
const Left = styled.div`
    flex:1;

    display: flex;
    align-items: center;
    
`;

const Logo = styled.h1`
  font-weight: bold;

  ${tablet({ fontSize: "24px" })}

`;

// right
const Right = styled.div`
    flex:1;

    display:flex;
    align-items: center;
    justify-content: flex-end;


`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;

  margin-left: 25px;

  transition: all 0.5s ease;
  &:hover{
    font-weight: 600;
  }

  ${tablet({ fontSize: "12px", marginLeft: "10px" })}
 
`;


const Navbar = () => {
  return (
    <Container >
        <Wrapper>
            <Left>
                <Logo> HALA </Logo>
            </Left> 

            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>

                <MenuItem>
                    <Badge badgeContent={1} color="primary">
                        <ShoppingCartOutlined />
                    </Badge>
                </MenuItem>

                <MenuItem>
                    < Badge badgeContent={1} color="primary">
                        <FavoriteBorder />
                    </Badge>
                </MenuItem>
            </Right>

        </Wrapper>
    </Container>
  )
}

export default Navbar