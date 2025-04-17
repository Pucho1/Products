import { LoginResponse } from "./loginResponse";

export interface ContextDta {
    token: LoginResponse,
    logout: () => void,
    setToken: (accessToken: LoginResponse) => void,
    isAuthenticated: boolean,
};