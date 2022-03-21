import React, { useEffect, useState } from 'react';
import axios from 'axios'

// style
import styled from 'styled-components';
import {mobile, tablet} from '../util/responsive';

// marterial UI
import { LinearProgress } from '@material-ui/core';

// redux
import {fetchStart, fetchSuccess, fetchFailure} from '../redux/fetchStatusSlice';
import { useDispatch, useSelector } from 'react-redux';

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

   const dispatch = useDispatch()
   const isFeching = useSelector(state=>state.fetchStatus.isFetching)
   const error = useSelector(state=>state.fetchStatus.error)
   const isSuccess = useSelector(state=>state.fetchStatus.isSuccess)

   const getProducts = async ()=>{                                                    
       try {
           const res = await axios.get(cat? `https://fakestoreapi.com/products/category/${cat}`
                                           : "https://fakestoreapi.com/products/")
           console.log(res);
           setProducts(res.data);
           dispatch(
            fetchSuccess()
           )
       } catch (error) {  
          dispatch(
            fetchFailure()
          )
       }
   }
   useEffect( ()=>{
     // make a request to API
        getProducts()
        
        dispatch(
          fetchStart()
        )
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

  
  if (isFeching) return <LinearProgress />;
 

  return (

    <Container>
      {error && (<h1> Something went wrong, please try again later</h1>)}
        
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
