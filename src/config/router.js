import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';
import ProductList from '../pages/ProductList';
import Product from '../pages/OneProduct';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import { useSelector } from 'react-redux';

const AppRouter = () => {
  const user = useSelector(state=>state.user.currentUser); // Set this to false to test the redirect
  // const user1= false;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
          />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        {/* Normal routes */}
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/moreProducts/:category" element={<ProductList />} />
        <Route path="/moreProduct/:id" element={<Product />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
