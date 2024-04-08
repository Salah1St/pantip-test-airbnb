import Image from "next/image";
import React, { useEffect, useState } from "react";
//
import axios from "axios";
import { innerAxios } from "@/config/axios";
interface props {
  src: string;
  title: string;
  description: string;
}
function TopicCard({ src, description, title }: props) {
  const [thumb, setThumb] = useState<string>("");
  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    try {
      const res = await innerAxios.post("http://localhost:3000/api/fetch", { url: src });
      console.log(res.data);
      setThumb(res.data.url);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-[300px] h-[400px]  p-2 shadow-border col-span-1">
      <img src={thumb} alt=""></img>
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
}

export default TopicCard;
