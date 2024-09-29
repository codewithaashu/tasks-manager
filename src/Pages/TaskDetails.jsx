import Loading from "@/components/custom/Loading";
import TaskDetailsNavigationView from "@/components/TaskDetailsNavigationView";
import { setTask } from "@/redux/taskSlice";
import { getTaskDetail } from "@/utils/GlobalApi";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const TaskDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { task } = useSelector((state) => state.task);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getTask();
  }, []);
  const getTask = async () => {
    setLoading(true);
    const response = await getTaskDetail(id);
    dispatch(setTask(response));
    setLoading(false);
  };
  return (
    <>
      {!loading && task ? (
        <div className="p-5 md:p-8 flex flex-col gap-5">
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold">{task?.title}</h1>
          </div>
          <TaskDetailsNavigationView task={task} />
        </div>
      ) : (
        <div className="py-5">
          <Loading />
        </div>
      )}
    </>
  );
};

export default TaskDetails;
