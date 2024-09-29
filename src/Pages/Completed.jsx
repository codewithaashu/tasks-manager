import Loading from "@/components/custom/Loading";
import NavigationView from "@/components/NavigationView";
import { getTaskByStage } from "@/utils/GlobalApi";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Completed = () => {
  const [tasks, setTasks] = useState(null);
  const [loading, setLoading] = useState(false);
  const { refresh } = useSelector((state) => state.task);
  useEffect(() => {
    getUserTasks();
  }, [refresh]);
  const getUserTasks = async () => {
    setLoading(true);
    const response = await getTaskByStage("completed");
    setTasks(response);
    setLoading(false);
  };
  return (
    <>
      {!loading ? (
        <div className="p-5 md:p-8 flex flex-col gap-5">
          <h1 className="text-2xl font-semibold">Completed Tasks</h1>
          {tasks && <NavigationView items={tasks} />}
          {tasks?.length === 0 && (
            <div className="text-sm text-muted-foreground">
              No tasks is completed
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

export default Completed;
