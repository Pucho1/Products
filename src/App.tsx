import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import { useAuthStore } from './context/AuthContext';
import Login from './pages/Login/Login'
import Product from './pages/Product';

function App() {

  const isAuntenticated = useAuthStore().isAuthenticated;

  console.log('isAuntenticated', isAuntenticated);
  

  return (
    // <Login />

    <BrowserRouter>
      <Routes>
        <Route
          path="/products-list"
          element={isAuntenticated ? <Product /> : <Navigate to="/" />}
        />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
