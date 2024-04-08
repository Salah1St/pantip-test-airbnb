import { Topic } from "./dto";
// =============================== DTO
// =============================== AUTH RESPONSE

export interface LoginResponseApi {
  token: string;
}
export interface RememberMeApi {}
// =============================== ROOM RESPONSE
export interface GetRoomResponseApi {
  room: {
    room_id: string;
    room_name: string;
    room_discription: string;
    pic_url: string;
  }[];
  room_discription: string[];
  room_name: string[];
  url: string[];
}

// =============================== TOPIC RESPONSE
export interface GetTopicByIdResponseApi {
  topic: Topic[];
}
