import { bgColor } from "@/utils/bgColor";
import React from "react";

const UserAvatar = ({ index, name }) => {
  return (
    <div
      // key={index}
      className={`w-7 h-7 rounded-full text-white flex items-center justify-center uppercase text-sm -mr-1 ${
        bgColor[index % bgColor.length]
      }`}
    >
      {name.split(" ").length == 1
        ? name.substring(0, 2)
        : name.split(" ")[0][0] + name.split(" ")[1][0]}
    </div>
  );
};

export default UserAvatar;
