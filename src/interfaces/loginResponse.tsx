import { UserData } from "./userInterface";

export interface LoginResponse {
    userData: UserData  | null;
    accessToken: string | null;
};