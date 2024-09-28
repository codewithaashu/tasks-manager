import EditTaskDialog from "@/components/EditTaskDialog";
import NavigationView from "@/components/NavigationView";
import { Button } from "@/components/ui/button";
import { TaskList } from "@/db/TaskList";
import { Plus } from "lucide-react";
import React, { useState } from "react";

const Tasks = () => {
  const [openEditDialog, setOpenEditDialog] = useState(false);
  return (
    <>
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
        <NavigationView items={TaskList} />
      </div>
      <EditTaskDialog
        open={openEditDialog}
        setOpen={setOpenEditDialog}
        type="Add"
      />
    </>
  );
};

export default Tasks;
