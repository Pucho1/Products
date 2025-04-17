import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import { useAuthStore } from './context/AuthContext';
import Login from './pages/Login/Login'
import Product from './pages/Product';
import Layout from './components/Layout';

function App() {

  const isAuntenticated = useAuthStore().isAuthenticated;

  return (

    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
        <Route
            path="/products-list"
            element={isAuntenticated ? <Product /> : <Navigate to="/" />}
          />
        </Route>
         
       
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
