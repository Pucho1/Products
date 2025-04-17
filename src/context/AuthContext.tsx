/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useContext, useEffect } from 'react';
import { LoginResponse } from '../interfaces/loginResponse';
import { ContextDta } from '../interfaces/contextData';

// import { getCookies } from '../api/api';


export const defaultContextValue: LoginResponse = {
  token: null,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AuthContext = createContext<any>(null);




export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

  const [useReg, setUserReg] = useState<loginResponse>(defaultContextValue);
	
  // Laizy initialization of isAuthenticated state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>( 
    () => sessionStorage.getItem('accessToken') !== null
  );


//  function getCookie(cname: string) {
//     const name = `${cname}=`;
//     const decodedCookie = decodeURIComponent(document.cookie);
//     const ca = decodedCookie.split(';');
//     for (let i = 0; i < ca.length; i += 1) {
//       let c = ca[i];
//       while (c.charAt(0) === ' ') {
//         c = c.substring(1);
//       }
//       if (c.indexOf(name) === 0) {
//         return c.substring(name.length, c.length);
//       }
//     }
//     return '';
//   }


/**
 * * @description escucha si se ha getionado el tokent desde otras pestannas
 */
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'accessToken') {
        const token = event.newValue;
  
        if (token) {
          login({ token });
        } else  logout() 
      }
    };
  
    window.addEventListener('storage', handleStorageChange);
  
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

	/**
   * @param accessToken Ojeto que contiene el token de acceso
   * @returns setea el token en las cookies y en el sessionStorage
   */
  const setToken = async (accessToken: loginResponse) => {
    const now = new Date();
    const minutos = 12 * 60;
    now.setTime(now.getTime() + minutos);

    document.cookie = `token=${accessToken}; expires=${now.toUTCString()};path=/;`;
    sessionStorage.setItem('accessToken', accessToken.token!);

    // console.log('en la cookies tengo el token', document.cookie);

    login(accessToken);
  };

  const logout = () => {
    setUserReg(defaultContextValue);
    setIsAuthenticated(false);
  };

  const login = ( tokentValue: loginResponse ) => {
    setUserReg(tokentValue);
    setIsAuthenticated(true);
  };


  const valueContext: ContextDta = {
		token: useReg.token,
    logout,
    setToken,
    isAuthenticated,
  };

  return (
    <AuthContext.Provider value={ valueContext }>{ children }</AuthContext.Provider>
  );
};

export function useAuthStore() {
  return useContext(AuthContext);
}