import useSWR from "swr";

import { UserData } from "../../interfaces/userInterface";
import UserService from "../../service/UserService";

const fetcher = async ( id: string): Promise<UserData> =>  {
	const response = await UserService().getUser(id);
	return response.data;
};

const useUserPage = () => {
	const { data: userData, error, isLoading } = useSWR<UserData>(
		'1',
		fetcher
	);

  return {
		userData,
		error,
		isLoading,
  };
};

export default useUserPage;