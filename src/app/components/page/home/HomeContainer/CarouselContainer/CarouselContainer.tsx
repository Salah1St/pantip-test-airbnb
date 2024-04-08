import React from "react";
import RoomCarousel from "./RoomCarousel";
import { GetRoomResponseApi } from "@/model/response";
import RoomIconLink from "./RoomIconLink";

interface props {
  roomData: GetRoomResponseApi;
}
function CarouselContainer({ roomData }: props) {
  return (
    <div className="w-full h-24 flex justify-center items-center  border-b-[1px]">
      <RoomCarousel>
        {roomData.room.map((i, d) => (
          <RoomIconLink key={d} title={i.room_name} src={i.pic_url} description={i.room_discription} path={i.room_id} />
        ))}
      </RoomCarousel>
    </div>
  );
}

export default CarouselContainer;
