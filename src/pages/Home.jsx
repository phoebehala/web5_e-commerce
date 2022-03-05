import React from 'react'

// components
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import ProductsSlide from '../components/ProductsSlide';

// style
import styled from 'styled-components';

const Container = styled.div`
  overflow: hidden;
`

const Home = () => {
  return (
    <Container>
        <Announcement />
        <Navbar/>
        <Header/>
        <Categories/>
        <ProductsSlide/>
        <Footer />


    </Container>
  )
}

export default Home