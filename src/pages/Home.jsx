import React from 'react'

// components
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import ProductsSlide from '../components/ProductsSlide';

const Home = () => {
  return (
    <div>
        <Announcement />
        <Navbar/>
        <Header/>
        <Categories/>
        <ProductsSlide/>
        <Footer />


    </div>
  )
}

export default Home