import axios from "@/config/axios";
import { RegisterUserRequestApi } from "@/model/request";
import { RegisterUserResponseApi } from "@/model/response";

export const registerApi = (input: RegisterUserRequestApi) => axios.post<RegisterUserResponseApi>("/user", input);
