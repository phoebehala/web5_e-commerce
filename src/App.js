// style
import './app.css'

// pages
import Home from './pages/Home';
import Login from './pages/Login';
import ProductDetails from './pages/ProductDetails';
import ProductDetailsDummy from './pages/ProductDetailsDummy';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Cart from './pages/Cart';

// react route
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

// redux
import { useSelector } from 'react-redux';

function App() {

  const user = useSelector(state=>state.user.currentUser)

  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} >
          <Route path=":category" element={<ProductList />} />   {/*  /products/:category */}
        </Route>

        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/product/dummy/:id" element={<ProductDetailsDummy />} />
        
        <Route path="/cart" element={user? <Cart /> :<Login />} />
    

        <Route path="/login" element={user? <Home /> :<Login />} />
        <Route path="/register" element={user? <Home /> :<Register />} />
      </Routes>


    </Router>


 
  );
}

export default App;
