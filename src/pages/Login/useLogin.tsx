import { useNavigate } from 'react-router';
import AuthService from '../../service/AuthService';
import { useAuthStore } from '../../context/AuthContext';

const useLogin = ( email: string, password: string ) => {

	const navegate = useNavigate();
  	const authStore = useAuthStore();

	const authSuccess = ( token: string ) => {
		if (token === '') return;

		authStore?.setToken(token);

		navegate("/products-list");
	};
	
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		AuthService().login(email, password)
		.then(res => {
				authSuccess(res.data.accessToken ?? '');
		})
		.catch(err => {
				console.error('Error:', err.response ? err.response.data : err.message);
		});
	};


  return { 
		
		handleSubmit,
	};
};

export default useLogin;