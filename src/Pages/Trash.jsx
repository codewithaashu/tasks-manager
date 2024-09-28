import AlertDialogComponent from "@/components/custom/AlertDialogComponent";
import CustomTable from "@/components/custom/CustomTable";
import TrashTaskColumns from "@/components/TrashTaskColumns";
import { Button } from "@/components/ui/button";
import { TaskList } from "@/db/TaskList";
import { ArchiveRestore, Trash2 } from "lucide-react";
import React, { useState } from "react";

const Trash = () => {
  const [openRestoreAlert, setOpenRestoreAlert] = useState(false);
  const [openRemoveAlert, setOpenRemoveAlert] = useState(false);
  const restoreTask = () => {};
  const deleteTask = () => {};
  return (
    <>
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
        <CustomTable data={TaskList} columns={TrashTaskColumns} />
      </div>
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
