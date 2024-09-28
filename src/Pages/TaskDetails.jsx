import TaskDetailsNavigationView from "@/components/TaskDetailsNavigationView";
import React from "react";

const TaskDetails = () => {
  return (
    <>
      <div className="p-5 md:p-8 flex flex-col gap-5">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Web Developer Task</h1>
        </div>
        <TaskDetailsNavigationView />
      </div>
    </>
  );
};

export default TaskDetails;
