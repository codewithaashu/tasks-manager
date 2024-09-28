import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Copy,
  Ellipsis,
  FolderOpen,
  GitCompareArrows,
  GitPullRequestCreateArrow,
  Images,
  ListTodo,
  Pencil,
  Plus,
  Trash2,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import TeamUserCard from "./TeamUserCard";
import EditTaskDialog from "./EditTaskDialog";
import AddSubTaskDialog from "./AddSubTaskDialog";
import AlertDialogComponent from "./custom/AlertDialogComponent";
import moment from "moment";
import { getColorOnStage } from "@/utils/getColorOnStage";
import { getPriority } from "@/utils/getPriority";
import { useNavigate } from "react-router-dom";

const GridTaskCard = ({ task }) => {
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openAddSubTaskDialog, setOpenAddSubTaskDialog] = useState(false);
  const [openDuplicateAlert, setOpenDuplicateAlert] = useState(false);
  const [openRemoveAlert, setOpenRemoveAlert] = useState(false);
  const duplicateTask = () => {};
  const deleteTask = () => {};
  const navigate = useNavigate();
  return (
    <>
      <div className="rounded-md shadow-md bg-background p-5 flex flex-col gap-2">
        <div className="flex justify-between">
          {getPriority(task?.priority)}
          <Popover>
            <PopoverTrigger>
              <Ellipsis className="w-4 h-4" />
            </PopoverTrigger>
            <PopoverContent
              side="bottom"
              align="end"
              className="w-52 flex flex-col gap-2"
            >
              <div className="flex gap-2 items-center cursor-pointer hover:bg-primary hover:text-white p-2 rounded-md" onClick={()=>navigate("/task/123")}>
                <FolderOpen className="w-4 h-4" />
                <p className="text-sm font-medium">Open Task</p>
              </div>
              <div
                className="flex gap-2 items-center cursor-pointer hover:bg-primary hover:text-white p-2 rounded-md"
                onClick={() => setOpenEditDialog(true)}
              >
                <Pencil className="w-4 h-4" />
                <p className="text-sm font-medium">Edit Task</p>
              </div>
              <div
                className="flex gap-2 items-center cursor-pointer hover:bg-primary hover:text-white p-2 rounded-md"
                onClick={() => setOpenAddSubTaskDialog(true)}
              >
                <GitPullRequestCreateArrow className="w-4 h-4" />
                <p className="text-sm font-medium">Add Sub-Task</p>
              </div>
              <div
                className="flex gap-2 items-center cursor-pointer hover:bg-primary hover:text-white p-2 rounded-md"
                onClick={() => setOpenDuplicateAlert(true)}
              >
                <Copy className="w-4 h-4" />
                <p className="text-sm font-medium">Duplicate</p>
              </div>
              <div
                className="flex gap-2 items-center cursor-pointer hover:bg-primary hover:text-white p-2 rounded-md"
                onClick={() => setOpenRemoveAlert(true)}
              >
                <Trash2 className="w-4 h-4" />
                <p className="text-sm font-medium">Delete</p>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex flex-col gap-0.5 pb-2">
          <div className="flex gap-2 items-center">
            <div
              className={`w-3.5 h-3.5 ${getColorOnStage(
                task?.stage
              )} rounded-full`}
            ></div>
            <div className="text-[17px] font-medium">{task?.title}</div>
          </div>
          <div className="text-sm text-muted-foreground font-medium">
            {moment(task?.date).format("DD MMM YYYY")}
          </div>
        </div>
        <div className="flex justify-between border-b border-t py-2">
          <div className="flex gap-4 items-center">
            <div className="flex gap-1.5 items-center text-muted-foreground">
              <GitCompareArrows className="w-4 h-4" />
              <p className="text-sm ">{task?.subTasks}</p>
            </div>
            <div className="flex gap-1.5 items-center text-muted-foreground">
              <Images className="w-4 h-4" />
              <p className="text-sm ">{task?.assets}</p>
            </div>
            <div className="flex gap-1.5 items-center text-muted-foreground">
              <ListTodo className="w-4 h-4" />
              <p className="text-sm ">
                {task?.subTasks}/{task?.activities}
              </p>
            </div>
          </div>
          <div className="flex">
            {task?.team?.map((curr, index) => {
              return <TeamUserCard index={index} key={index} user={curr} />;
            })}
          </div>
        </div>
        <div className="flex flex-col gap-3 py-3">
          <div className="text-[15px] text-muted-foreground font-medium">
            No Sub Task
          </div>
          <Button
            variant="outline"
            className="flex gap-1.5 items-center w-fit p-2 text-sm"
            size="sm"
            onClick={() => setOpenAddSubTaskDialog(true)}
          >
            <Plus className="w-4 h-4" /> Add Subtask
          </Button>
        </div>
      </div>
      <EditTaskDialog
        open={openEditDialog}
        setOpen={setOpenEditDialog}
        type="Edit"
        form={task}
      />
      <AddSubTaskDialog
        open={openAddSubTaskDialog}
        setOpen={setOpenAddSubTaskDialog}
      />
      <AlertDialogComponent
        open={openDuplicateAlert}
        setOpen={setOpenDuplicateAlert}
        message={"This action will duplicate the task. Are you sure?"}
        handleContinue={duplicateTask}
      />
      <AlertDialogComponent
        open={openRemoveAlert}
        setOpen={setOpenRemoveAlert}
        message={
          "This action will trash the task. You can recover the task from Trash tab."
        }
        handleContinue={deleteTask}
      />
    </>
  );
};

export default GridTaskCard;
