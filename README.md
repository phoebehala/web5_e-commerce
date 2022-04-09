# E-commerce
> An e-commerce website with the data fetching form API.
> Live demo [_here_](https://nervous-hermann-b785a7.netlify.app).

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features & Challenges](#features--challenges)
* [Screenshots](#screenshots)
* [API Source](#API-Source)
* [Usage](#usage)

## General Information
#### Idea / Motivation
- To create an e-commerce website
#### Purposes / Intentions
- To consolidate the usage of redux, useState, useRef, react-router-dom
- To work with API
- To use styled-components


## Technologies Used

#### react.js
- react props, useState(), useRef(), react event
- react-router-dom

#### redux
- redux-toolkit
- redux-persist

#### styles
- styled-components

#### other libraries
- axios
- materialUI: components(Badge, Tooltip, Drawer)

## Features & Challenges
#### cart 
- ADD / REMOVE items to/from  cart
- EDIT amount of items
###### redux - cartSlice
<img width="963" alt="web5_E-commerce_cartSlice" src="https://user-images.githubusercontent.com/83237024/162543427-57838d6f-9b3d-4d03-9942-63fe28c2dd01.png">

#### whishlist
- ADD / REMOVE items to/from whishlist
- ADD items of the whishlist to the cart
###### redux - wishlistSlice
<img width="965" alt="web5_E-commerce_wishListSlice" src="https://user-images.githubusercontent.com/83237024/162543332-8821ebf3-c9ab-4129-9be0-a46cd49b495e.png">

#### login / logout
- Storing user info for the usage across app
###### redux - userSlice
<img width="964" alt="web5_E-commerce_userSlice" src="https://user-images.githubusercontent.com/83237024/162543064-bd226e5d-09a4-45fc-b4c9-d96e4418b4b9.png">

###### For every one
<img width="986" alt="web5_E-commerce_every-one" src="https://user-images.githubusercontent.com/83237024/162544958-618aca29-cc7b-477e-b7ab-4e572d4550f7.png">

###### For a user who has registered and logged in
<img width="988" alt="web5_E-commerce_logged-in-user" src="https://user-images.githubusercontent.com/83237024/162544956-926bd13c-5d53-470c-b405-200af86351fe.png">


#### Rating 
- created by pure react
- Showing rating score as per data
#### Fetching data
- Showing data by categories
- Showing detail by single product 
- Sorting data by popularity / rating / price
#### Slider for the showcase of products
- created by pure react
#### product detail page
- To show the corresponding picture that a user clicks on the smaller picture
- ADD certain amount of items to the cart
- TOGGLE feature to see more information
- ```<ProductDetails/>``` is the product detail page displaying data from fake store API. However, because of the limited info from fake store API, I made the other one for practice and
wiich is ```<ProductDetailsDummy />``` displaying dummy data (this kind of product detail page has more than one pictures)

#### React route
###### Home page
<img width="671" alt="web5_E-commerce_react-route-Home-page" src="https://user-images.githubusercontent.com/83237024/162547633-e1221cf4-8471-473b-82a8-8051f9f8fddb.png">

###### ProductList page
<img width="674" alt="web5_E-commerce_react-route-ProductList-page" src="https://user-images.githubusercontent.com/83237024/162547631-3a189493-7526-4fd9-9ff9-ae26c21c7b19.png">

## Screenshots
![Example screenshot](./img/screenshot.png)

## API Source
- fake store api


## Usage
Please use fakestore api user to log in. Here is one of them:
```
username: "mor_2314",
password: "83r5^_"
```



