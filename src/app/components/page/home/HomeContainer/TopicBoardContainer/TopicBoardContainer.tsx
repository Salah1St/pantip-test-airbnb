"use client";
import { useAppSelector } from "@/hooks/useRedux";

import React, { useEffect } from "react";
import TopicCard from "./TopicCard";

function TopicBoardContainer() {
  const currentTopic = useAppSelector((s) => s.topic?.currentTopic);

  return (
    <div className="w-full h-full grid  place-items-center grid-cols-3  gap-4">
      {currentTopic?.map((i, d) => (
        <TopicCard src={i.link} title={i.title} description={i.description} key={d} />
      ))}
    </div>
  );
}

export default TopicBoardContainer;
