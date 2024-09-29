import AlertDialogComponent from "@/components/custom/AlertDialogComponent";
import CustomTable from "@/components/custom/CustomTable";
import Loading from "@/components/custom/Loading";
import TrashTaskColumns from "@/components/TrashTaskColumns";
import { Button } from "@/components/ui/button";
import { refreshPage } from "@/redux/taskSlice";
import { delete_Tasks, getTrashTasks, restore_Tasks } from "@/utils/GlobalApi";
import { ArchiveRestore, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Trash = () => {
  const [openRestoreAlert, setOpenRestoreAlert] = useState(false);
  const [openRemoveAlert, setOpenRemoveAlert] = useState(false);
  const [taskList, setTaskList] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { refresh } = useSelector((state) => state.task);
  const restoreTask = async () => {
    const success = await restore_Tasks();
    if (success) {
      setOpenRestoreAlert(false);
      dispatch(refreshPage());
    }
  };
  const deleteTask = async () => {
    const success = await delete_Tasks();
    if (success) {
      setOpenRemoveAlert(false);
      dispatch(refreshPage());
    }
  };
  useEffect(() => {
    getTask();
  }, [refresh]);
  const getTask = async () => {
    setLoading(true);
    const response = await getTrashTasks();
    setTaskList(response);
    setLoading(false);
  };
  return (
    <>
      {!loading ? (
        <div className="p-5 md:p-8 flex flex-col gap-7">
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold">Trashed Tasks</h1>
            <div className="flex gap-4">
              <Button
                className="flex items-center gap-0.5 bg-yellow-600 text-white hover:bg-yellow-600"
                onClick={() => setOpenRestoreAlert(true)}
              >
                <ArchiveRestore className="w-4 h-4" /> Restore All
              </Button>
              <Button
                variant="destructive"
                className="flex items-center gap-0.5"
                onClick={() => setOpenRemoveAlert(true)}
              >
                <Trash2 className="w-4 h-4" /> Delete All
              </Button>
            </div>
          </div>
          {taskList?.length === 0 ? (
            <div className="text-center text-sm text-muted-foreground py-2">
              No tasks in the trash
            </div>
          ) : (
            taskList && (
              <CustomTable data={taskList} columns={TrashTaskColumns} />
            )
          )}
        </div>
      ) : (
        <div className="py-5">
          <Loading />
        </div>
      )}
      <AlertDialogComponent
        open={openRestoreAlert}
        setOpen={setOpenRestoreAlert}
        message={`This action will restore all the tasks.`}
        handleContinue={restoreTask}
      />
      <AlertDialogComponent
        open={openRemoveAlert}
        setOpen={setOpenRemoveAlert}
        message={`This action will permanently delete all the tasks .`}
        handleContinue={deleteTask}
      />
    </>
  );
};

export default Trash;
