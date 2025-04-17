import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

// const Layout = ({children} : { children: React.ReactNode }) => {
  const Layout = () => {

  return (
    <>
      <header>
        <NavBar />
      </header>

      <main className='flex flex-col items-center justify-center min-h-screen bg-gray-100'> 
        <Outlet />
      </main>
    </>
  );
};

export default Layout;