import React from "react";

const TeamUser = ({ user }) => {
  return (
    <div className="w-fit flex flex-row gap-4 ">
      <div className="w-14 h-14 bg-primary rounded-full text-white flex items-center justify-center text-lg ">
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
    </div>
  );
};

export default TeamUser;
