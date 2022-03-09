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
// const Products = (props) => { }  >>> props are {cat: 'man', sort: {…}}
const Products = ( { cat, sort } ) => {
   console.log("destructured props -cat", cat,"destructured props -sort", sort);
   const [products , setProducts] = useState([])
   const [filteredProducts , setFilteredProducts] = useState([])
   console.log('filteredProducts',filteredProducts);

   useEffect( ()=>{
        // make a request to API
        const getProducts = async ()=>{                                                    
            try {
                const res = await axios.get(cat? `https://fakestoreapi.com/products/category/${cat}`
                                                : "https://fakestoreapi.com/products/")
                console.log(res);
                setProducts(res.data);
               
            } catch (error) {              
            }
        }
        getProducts()
   },[cat]) // whenever cat get changed, fire the function)


   useEffect( ()=>{

     // by default, showing in the  descending order of popularity
      setFilteredProducts(products.sort((a, b) => b.rating.count - a.rating.count)); //1 >>> desc
      //console.log('filteredProducts',filteredProducts);
    },[products]) // whenever products get changed, fire the function)



  useEffect(() => {

        if (sort === "popularity") {
          setFilteredProducts((prev) =>
            [...prev].sort((a, b) => b.rating.count - a.rating.count) //1 >>> desc
          );
        }else if (sort === "rating") {
            setFilteredProducts((prev) =>
              [...prev].sort((a, b) => b.rating.rate - a.rating.rate)  //1 >>> desc
            );

        }else if (sort === "asc") {
          setFilteredProducts((prev) =>
            [...prev].sort((a, b) => a.price - b.price) //-1 >>> asc
          );

        } else {
          setFilteredProducts((prev) =>
            [...prev].sort((a, b) => b.price - a.price) //1 >>> desc
          );

        }

    // return ()=>{
    //   console.log('clean up');

    // }
    
  }, [sort]); // whenever sort get changed, fire the function)

  return (
    <Container>
        
         {filteredProducts.map((item) => <ProductCard item={item} key={item.id} />)}
   

        {/* {cat

        ? filteredProducts.map((item) => <ProductCard item={item} key={item.id} />)
        : products
          .slice(0, 8) // only 8 items
          .map((item) => <ProductCard item={item} key={item.id} />
        )} */}

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
