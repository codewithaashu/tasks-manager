import NavigationView from "@/components/NavigationView";
import { TaskList } from "@/db/TaskList";
import React from "react";

const Completed = () => {
  return (
    <>
      <div className="p-5 md:p-8 flex flex-col gap-5">
        <h1 className="text-2xl font-semibold">Completed Tasks</h1>
        <NavigationView
          items={TaskList?.filter((curr) => curr.stage === "completed")}
        />
      </div>
    </>
  );
};

export default Completed;
