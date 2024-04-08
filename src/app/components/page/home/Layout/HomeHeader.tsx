import icons from "@/asset/icons";
import Community from "@/asset/icons/Community";
import HamburgerComponent from "@/asset/icons/HamburgerComponent";
import PlusMessenger from "@/asset/icons/PlusMessenger";
import UserCircle from "@/asset/icons/UserCircle";

import Image from "next/image";
import React from "react";

function HomeHeader() {
  return (
    <div className="w-full h-12 flex justify-between items-center shadow-xl z-[100]">
      <div className="flex">
        <div className="flex  items-center hover:bg-primary-brand-25  cursor-pointer ">
          <HamburgerComponent className="active:scale-90  w-[80px]" size="24px" color="#673e90" />
        </div>
        <div className="flex items-center hover:bg-primary-brand-25  px-4 cursor-pointer">
          <Image className=" active:scale-75" src={icons.logo} alt="" width={64} height={32} />
        </div>
      </div>
      <div className="h-full flex justify-center items-center ">
        <div className=" relative border">
          <input
            id="search_bar"
            className="w-[30vw] lg:min-w-[450px] shadow-grow hover:shadow-hover  px-4 py-1 focus:outline-primary-brand-400"
            type="text"
            placeholder="ค้นหาบน Pantip"
          />

          <label htmlFor="search_bar">
            <Image role="button" className="absolute top-1/2 right-4 translate-x-1/2 -translate-y-1/2 " src={icons.magnifier} alt="" width={24} height={24} />
          </label>
        </div>
      </div>
      <div className="flex font-normal gap-4 text-primary-brand-400 ">
        <div role="button" className="flex justify-center items-center hover:bg-primary-brand-25  active:scale-90  gap-1 p-2">
          <PlusMessenger color="#673E90" />
          <p className="max-lg:hidden">ตั้งกระทู้</p>
        </div>
        <div role="button" className="flex justify-center items-center hover:bg-primary-brand-25  active:scale-90 gap-1 p-2">
          <Community color="#673E90" />
          <p className="max-lg:hidden">คอมมูนิตี้</p>
        </div>
        <div role="button" className="flex justify-center items-center hover:bg-primary-brand-25 active:scale-90  gap-1 p-2">
          <UserCircle className="lg:hidden" color="#673E90" />
          <p className="max-lg:hidden">เข้าสู่ระบบ / สมัครสมาชิก</p>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
