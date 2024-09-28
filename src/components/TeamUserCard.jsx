import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import UserAvatar from "./UserAvatar";

const TeamUserCard = ({ index, user }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <UserAvatar index={index} name={user?.name} />
      </PopoverTrigger>
      <PopoverContent
        side="bottom"
        align="end"
        className="w-fit flex flex-row gap-5 "
      >
        <div className="w-10 h-10 bg-primary rounded-full text-white flex items-center justify-center text-lg ">
          <span className="text-center font-bold">
            {user?.name?.split(" ").length == 1
              ? user?.name?.substring(0, 2)
              : user?.name?.split(" ")[0][0] + user?.name?.split(" ")[1][0]}
          </span>
        </div>
        <div className="flex flex-col gap-0.5">
          <h1 className="text-base font-semibold leading-5">{user?.name}</h1>
          <p className="text-sm text-muted-foreground">{user?.role}</p>
          <p className="text-xs text-primary">{user?.email}</p>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default TeamUserCard;
