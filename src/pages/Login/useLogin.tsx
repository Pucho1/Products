import { useNavigate } from 'react-router';
import AuthService from '../../service/AuthService';
import { useAuthStore } from '../../context/AuthContext';
import { LoginResponse } from '../../interfaces/loginResponse';

const useLogin = ( email: string, password: string ) => {

	const navegate = useNavigate();
  	const authStore = useAuthStore();

	const authSuccess = ( loginResponse: LoginResponse ) => {
		if (loginResponse.accessToken === '') return;

		authStore?.login(loginResponse);

		navegate("/products-list");
	};
	
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		AuthService().login(email, password)
		.then(res => {
				authSuccess(res.data ?? '');
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