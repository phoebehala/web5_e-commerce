import React, { useEffect, useState } from 'react';
import axios from 'axios'

// style
import styled from 'styled-components';
import {mobile, tablet} from '../util/responsive';


// component
import ProductCard from './ProductCard';

const Container = styled.div`
    padding: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    /* background-color: #f5fbfd; */
`
// const Products = (props) => { }  >>> props are {cat: 'man', filters: {…}, sort: {…}}
const Products = ( { sort } ) => {
   console.log("destructured props -sort", sort);
   const [products , setProducts] = useState([])
   const [filteredProducts , setFilteredProducts] = useState([])
   console.log('filteredProducts',filteredProducts);

   useEffect( ()=>{
        // make a request to API
        const getProducts = async ()=>{
            try {
                const res = await axios.get("https://fakestoreapi.com/products/")
                console.log(res);
                setProducts(res.data)
            } catch (error) {
                
            }
        }
        getProducts()
   })


/*
   useEffect( ()=>{
       // make a request to API
        const getProducts = async ()=>{
            try {
                const res = await axios.get(cat
                                            ?`http://localhost:5000/api/products/?category=${cat}`
                                            :`http://localhost:5000/api/products/`)
                console.log('res',res);
                setProducts(res.data)
            } catch (error) {
                
            }
        }
        getProducts()

   },[cat]) // whenever cat get changed, fire the function
   */

   /*
   useEffect(() => {
       console.log('products',products,'filters',filters,'cat',cat);
       
    cat &&
        setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>  // Object.entries(filters) >>> such as [["color","yellow"],["size","XS"]]
            item[key].includes(value)
          )
        )
      );
      console.log('filteredProducts',filteredProducts)
  }, [products, cat, filters]);
*/

  useEffect(() => {
    if (sort === "popularity") {
      setFilteredProducts((prev) =>
        console.log(prev)
      );
    }
     else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);


  return (
    <Container>
        
        {filteredProducts.map((item) => <ProductCard item={item} key={item.id} />)}
        {products.slice(0, 8).map((item) => <ProductCard item={item} key={item.id} />)}


    </Container>
      /*
        <Container>
        {cat

        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8) // only 8 items
            .map((item) => <Product item={item} key={item.id} />)}

        </Container>
        */

    );
};

export default Products;
