import { LoginRequestApi } from "@/model/request";
import axios from "@/config/axios";
import { LoginResponseApi, RememberMeApi } from "@/model/response";

export const loginApi = (input: LoginRequestApi) => axios.post<LoginResponseApi>("/auth/login", input);
export const rememberMeApi = (token: string) => axios.post<RememberMeApi>("/auth/remember", token);
