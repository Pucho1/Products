import { AxiosResponse } from "axios";
import axs from "../api/axiosCustom";
import { UserData } from "../interfaces/userInterface";

const UserService = () => {

  const getUser = (id: string): Promise<AxiosResponse<UserData>> => {
    return axs.get<UserData>(`/users/${id}`);
  };
  
  return { getUser };
};

export default UserService;