import NavigationView from "@/components/NavigationView";
import { TaskList } from "@/db/TaskList";
import React from "react";

const Todo = () => {
  return (
    <>
      <div className="p-5 md:p-8 flex flex-col gap-5">
        <h1 className="text-2xl font-semibold">Todo Tasks</h1>
        <NavigationView
          items={TaskList?.filter((curr) => curr.stage === "todo")}
        />
      </div>
    </>
  );
};

export default Todo;
