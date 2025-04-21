import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import Login from './pages/Login/Login'
import Layout from './components/Layout';
import Products from './pages/Products/Products';
import ProductDetail from './pages/ProductDetail';
import PrivateRoutes from './Routes/PrivateRoutes';
import PublicRoute from './Routes/PublicsRoutes';
import UserPage from './pages/UserPage/UserPage';
import ShopCart from './pages/ShopCar/ShopCart';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Layout />}>
            <Route path="/products-list" element={ <Products />} />
            <Route path="/products-list/:id" element={ <ProductDetail /> } />
            <Route path="/user" element={ <UserPage /> } />
            <Route path="/cart" element={ <ShopCart /> } />

            <Route path="/" element={<Navigate to="/products-list" />} />
            <Route path="*" element={<Navigate to="/products-list" />} />
          </Route>
        </Route>
         
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default App;
