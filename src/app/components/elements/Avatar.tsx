import icons from "@/asset/icons";
import Image from "next/image";

interface AvatarProps {
  src?: string;
  size: number;
}

export default function Avatar({ src, size }: AvatarProps) {
  return (
    <div>
      <Image className="rounded-full" width={size} height={size} src={src || icons.avatar} alt="" />
    </div>
  );
}
