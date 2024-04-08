import { innerAxios } from "@/config/axios";

import { GetTopicByIdResponseApi } from "@/model/response";

export const getTopicapi = ({ id }: { id: string }) => innerAxios.get<GetTopicByIdResponseApi>(`/api/topic/${id}`);
