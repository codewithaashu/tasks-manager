import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AvatarComponent = () => {
  return (
    <Avatar>
      <AvatarImage src={""} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default AvatarComponent;
