// import useSWR from "swr";

import { useAuthStore } from "../../context/AuthContext";

// import { UserData } from "../../interfaces/userInterface";
// import UserService from "../../service/UserService";

// const fetcher = async ( id: string): Promise<UserData> =>  {
// 	const response = await UserService().getUser(id);
// 	return response.data;
// };

const useUserPage = () => {

	const authStore = useAuthStore();
	
	// const { data: userData, error, isLoading } = useSWR<UserData>(
	// 	'1',
	// 	fetcher
	// );

	console.log('userData', authStore.userData);



  return {
		userData: authStore.userData
		// error,
		// isLoading,
  };
};

export default useUserPage;