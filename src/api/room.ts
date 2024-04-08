import { axios, innerAxios } from "@/config/axios";

import { GetRoomResponseApi } from "@/model/response";

export const getRoomapi = () => innerAxios.get<GetRoomResponseApi>("/api/room");
