import { topic, room } from "@/asset/json";

import { GetTopicByIdResponseApi } from "@/model/response";

export async function GET(request: Request) {
  const param = request.url.split("/");

  const id = param[param.length - 1];
  const allTopic: GetTopicByIdResponseApi = topic;
  const index = id ? room.room.findIndex((i) => i.room_id === id) : 0;
  const limit = Math.ceil(allTopic.topic.length / 12);
  const page = isFinite((index % limit) * 12) ? (index % limit) * 12 : 0;

  return Response.json({ topic: allTopic.topic.slice(page, page + 12) });
}
