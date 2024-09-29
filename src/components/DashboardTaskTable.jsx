import React, { useEffect, useState } from "react";
import CustomTable from "./custom/CustomTable";
import { getColorOnStage } from "@/utils/getColorOnStage";
import { getPriority } from "@/utils/getPriority";
import TeamUserCard from "./TeamUserCard";
import moment from "moment";
import Loading from "./custom/Loading";
import { getAllTasks } from "@/utils/GlobalApi";

const DashboardTaskTable = () => {
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState(null);
  useEffect(() => {
    getTask();
  }, []);

  const getTask = async () => {
    setLoading(true);
    const response = await getAllTasks();
    setTasks(response);
    setLoading(false);
  };

  return (
    <>
      {!loading ? (
        <div className="col-span-2">
          {tasks && (
            <CustomTable
              data={tasks.slice(0, 8)}
              columns={TaskColumns}
              type={"dashboard"}
            />
          )}
          {tasks?.length === 0 && (
            <div className="text-sm text-muted-foreground">
              No tasks in your project
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
