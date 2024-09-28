import React from "react";
import CustomTable from "./custom/CustomTable";
import { TaskList } from "@/db/TaskList";
import { getColorOnStage } from "@/utils/getColorOnStage";
import { getPriority } from "@/utils/getPriority";
import TeamUserCard from "./TeamUserCard";
import moment from "moment";

const DashboardTaskTable = () => {
  return (
    <>
      <div className="col-span-2">
        <CustomTable
          data={TaskList.slice(0, 8)}
          columns={TaskColumns}
          type={"dashboard"}
        />
      </div>
    </>
  );
};
const TaskColumns = [
  {
    accessorKey: "title",
    header: "Task Title",
    cell: ({ row }) => (
      <div className="flex gap-2 items-center">
        <div
          className={`w-3 h-3 ${getColorOnStage(
            row?.original?.stage
          )} rounded-full`}
        ></div>
        <div className="text-sm font-medium">{row?.original?.title}</div>
      </div>
    ),
  },
  {
    accessorKey: "priority",
    header: "Priority",
    cell: ({ row }) => getPriority(row?.original?.priority),
  },
  {
    accessorKey: "team",
    header: "Team",
    cell: ({ row }) => (
      <div className="flex">
        {row?.original?.team?.map((curr, index) => {
          return <TeamUserCard index={index} key={index} user={curr} />;
        })}
      </div>
    ),
  },
  {
    accessorKey: "date",
    header: "Created At",
    cell: ({ row }) => (
      <div className="text-sm">
        {moment(row?.original?.date).format("DD MMM YYYY")}
      </div>
    ),
  },
];
export default DashboardTaskTable;
