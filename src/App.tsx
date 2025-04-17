import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import { useAuthStore } from './context/AuthContext';
import Login from './pages/Login/Login'
import Layout from './components/Layout';
import Products from './pages/Products/Products';
import ProductDetail from './pages/ProductDetail';

function App() {

  const isAuntenticated = useAuthStore().isAuthenticated;

  return (

    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/products-list"
            element={isAuntenticated ? <Products /> : <Navigate to="/" />}
          />
          <Route
            path="/products-list/:id"
            element={isAuntenticated ? <ProductDetail /> : <Navigate to="/" />}
          />
        </Route>
         
       
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
