import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import UserAvatar from "./UserAvatar";
import TeamUser from "./TeamUser";

const TeamUserCard = ({ index, user }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <UserAvatar index={index} name={user?.name} />
      </PopoverTrigger>
      <PopoverContent side="bottom" align="end" className="w-fit">
        <TeamUser user={user} />
      </PopoverContent>
    </Popover>
  );
};

export default TeamUserCard;
