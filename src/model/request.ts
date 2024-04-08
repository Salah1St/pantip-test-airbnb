import { User } from "./dto";
// =============================== AUTH REQUEST
export interface LoginRequestApi {
  username: string;
  password: string;
}
// =============================== USER REQUEST
export interface RegisterUserRequestApi extends Pick<User, "password" & "username"> {}
