import { TeamMemberList } from "@/db/TeamMemberList";
import React from "react";
import CustomTable from "./custom/CustomTable";

const DashboardTeamTable = () => {
  return (
    <>
      <div className="col-span-1">
        <CustomTable
          data={TeamMemberList.slice(0, 5)}
          columns={TeamMemberColumns}
          type={"dashboard"}
        />
      </div>
    </>
  );
};
const TeamMemberColumns = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const user = row?.original;
      return (
        <div className="w-fit flex flex-row gap-2 items-center">
          <div className="w-10 h-10 bg-primary rounded-full text-white flex items-center justify-center text-base ">
            <span className="text-center font-bold">
              {user?.name?.split(" ").length == 1
                ? user?.name?.substring(0, 2)
                : user?.name?.split(" ")[0][0] + user?.name?.split(" ")[1][0]}
            </span>
          </div>
          <div className="flex flex-col gap-0.5">
            <h1 className="text-sm font-semibold leading-4">{user?.name}</h1>
            <p className="text-[13px] text-muted-foreground">{user?.role}</p>
            <p className="text-xs text-primary">{user?.email}</p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Staus",
    cell: ({ row }) => (
      <div
        className={`p-0.5 rounded-full text-center ${
          row?.original?.status === "Active"
            ? "bg-green-100 text-green-600"
            : "bg-slate-100 text-slate-600"
        }`}
      >
        {row?.original?.status}
      </div>
    ),
  },
];
export default DashboardTeamTable;
