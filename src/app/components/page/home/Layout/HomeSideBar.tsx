import Community from "@/asset/icons/Community";
import HomeIcon from "@/asset/icons/HomeIcon";
import ExploreIcon from "@/asset/icons/ExploreIcon";
import FavoriteIcon from "@/asset/icons/FavoriteIcon";
import FeedIcon from "@/asset/icons/FeedIcon";
import LikeIcon from "@/asset/icons/LikeIcon";

import Image from "next/image";
import React from "react";
import Link from "next/link";

function HomeSideBar() {
  const icon = {
    HomeIcon: <HomeIcon size="24px" color="#8564a6" />,
    ExploreIcon: <ExploreIcon size="24px" color="#8564a6" />,
    FavoriteIcon: <FavoriteIcon size="24px" color="#8564a6" />,
    FeedIcon: <FeedIcon size="24px" color="#8564a6" />,
    LikeIcon: <LikeIcon size="24px" color="#8564a6" />,
  };
  return (
    <div className="w-[80px] bg-white flex flex-col items-center shadow-right py-4">
      <ButtonLink Icon={icon.HomeIcon} title={"หน้าแรก"} src="./home" />
      <ButtonLink Icon={icon.FeedIcon} title={"My feed"} src="./my_feed" />
      <ButtonLink Icon={icon.LikeIcon} title={"Pantip pick"} src="./pick" />
      <ButtonLink Icon={icon.FavoriteIcon} title={"Pantip Hitz"} src="./hitz" />
      <ButtonLink Icon={icon.ExploreIcon} title={"Explore"} src="./explore" />
    </div>
  );
}

export default HomeSideBar;

interface props {
  Icon: React.JSX.Element;
  title?: string;
  src: string;
}
function ButtonLink({ Icon, title = "", src }: props) {
  return (
    <Link href={src} className="w-full flex flex-col justify-center items-center cursor-pointer gap-2 hover:bg-primary-brand-25 py-4 px-2">
      <div>{Icon}</div>
      <p className="text-xs text-primary-brand-400">{title}</p>
    </Link>
  );
}
