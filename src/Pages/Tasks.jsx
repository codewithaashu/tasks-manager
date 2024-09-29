import Loading from "@/components/custom/Loading";
import EditTaskDialog from "@/components/EditTaskDialog";
import NavigationView from "@/components/NavigationView";
import { Button } from "@/components/ui/button";
import { getAllTasks } from "@/utils/GlobalApi";
import { Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Tasks = () => {
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [tasks, setTasks] = useState(null);
  const [loading, setLoading] = useState(false);
  const { refresh } = useSelector((state) => state.task);
  useEffect(() => {
    getUserTasks();
  }, [refresh]);
  const getUserTasks = async () => {
    setLoading(true);
    const response = await getAllTasks();
    setTasks(response);
    setLoading(false);
  };
  return (
    <>
      {!loading ? (
        <div className="p-5 md:p-8 flex flex-col gap-5">
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold">Tasks</h1>
            <Button
              className="flex items-center gap-0.5"
              onClick={() => setOpenEditDialog(true)}
            >
              <Plus className="w-4 h-4" /> Create Task
            </Button>
          </div>
          <NavigationView items={tasks} hiddenFilter={false} />
        </div>
      ) : (
        <div className="py-5">
          <Loading />
        </div>
      )}
      <EditTaskDialog
        open={openEditDialog}
        setOpen={setOpenEditDialog}
        type="Add"
      />
    </>
  );
};

export default Tasks;
