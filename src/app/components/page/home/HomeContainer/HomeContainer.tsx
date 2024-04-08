"use client";
import React, { useEffect } from "react";
import { GetRoomResponseApi, GetTopicByIdResponseApi } from "@/model/response";
import CarouselContainer from "./CarouselContainer/CarouselContainer";
import TopicBoardContainer from "./TopicBoardContainer/TopicBoardContainer";
import { useAppDispatch } from "@/hooks/useRedux";
import { useParams } from "next/navigation";
import { fetchPosts } from "@/redux/slice/topicSlice";

interface props {
  roomData: GetRoomResponseApi;
}
function HomeContainer({ roomData }: props) {
  const dispatch = useAppDispatch();
  const param = useParams();
  useEffect(() => {
    if (typeof param.room_id === "string") {
      dispatch(fetchPosts(param.room_id));
    }
  }, [param, dispatch]);

  return (
    <div className="w-full h-full py-8 ">
      <CarouselContainer roomData={roomData} />
      <TopicBoardContainer />
    </div>
  );
}

export default HomeContainer;
