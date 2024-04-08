import { getRoomapi } from "@/api/room";
import { getTopicapi } from "@/api/topic";
import { fetchPosts } from "@/redux/slice/topicSlice";
import { store } from "@/redux/store";
import HomeContainer from "@components/page/home/HomeContainer/HomeContainer";

import React from "react";

async function page({ params }: { params: { room_id: string } }) {
  const res = await getRoomapi();
  // store.dispatch(fetchPosts(params.room_id));
  return (
    <div className="w-full h-full ">
      <HomeContainer roomData={res.data} />
    </div>
  );
}

export default page;
