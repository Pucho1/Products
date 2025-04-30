import useSWR from "swr";
import { useAuthStore } from "../../context/AuthContext";
import UserService from "../../service/UserService";
import { UserData } from "../../interfaces/userInterface";


const fetcher = async (): Promise<UserData> =>  {
	const response = await UserService().getUser();
	return response.data;
};

const useUserPage = () => {
	const authStore = useAuthStore();

	
	const { data: userData, error, isLoading } = useSWR<UserData>(

		( authStore.isAuthenticated && !authStore.userData ) ? '/auth/me' : null,
		fetcher
	);
	
	console.log('userData', authStore.userData);

  return {
		userData: authStore.userData || userData,
		isLoading,
		error,
  };
};

export default useUserPage;