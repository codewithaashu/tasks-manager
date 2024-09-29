import React, { useEffect, useState } from "react";
import CustomTable from "./custom/CustomTable";
import { getTeamMembers } from "@/utils/GlobalApi";
import Loading from "./custom/Loading";

const DashboardTeamTable = () => {
  const [loading, setLoading] = useState(false);
  const [teams, setTeams] = useState(null);
  useEffect(() => {
    getTeams();
  }, []);

  const getTeams = async () => {
    setLoading(true);
    const response = await getTeamMembers();
    setTeams(response);
    setLoading(false);
  };
  return (
    <>
      {!loading ? (
        <div className="col-span-1">
          {teams && (
            <CustomTable
              data={teams.slice(0, 5)}
              columns={TeamMemberColumns}
              type={"dashboard"}
            />
          )}
          {teams?.length === 0 && (
            <div className="text-sm text-muted-foreground">
              No team members in the project
            </div>
          )}
        </div>
      ) : (
        <div className="py-5">
          <Loading />
        </div>
      )}
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
          row?.original?.isActive
            ? "bg-green-100 text-green-600"
            : "bg-slate-100 text-slate-600"
        }`}
      >
        {row?.original?.isActive ? "Active" : "Inactive"}
      </div>
    ),
  },
];
export default DashboardTeamTable;
