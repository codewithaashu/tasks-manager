import TeamUserCard from "./TeamUserCard";
import moment from "moment";
import EditTaskDialog from "./EditTaskDialog";
import AddSubTaskDialog from "./AddSubTaskDialog";
import AlertDialogComponent from "./custom/AlertDialogComponent";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Copy,
  FolderOpen,
  GitCompareArrows,
  GitPullRequestCreateArrow,
  Images,
  ListTodo,
  MoreHorizontal,
  Pencil,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import { useState } from "react";
import { getColorOnStage } from "@/utils/getColorOnStage";
import { getPriority } from "@/utils/getPriority";
import { useNavigate } from "react-router-dom";
import { duplicateTasks, trashedTask } from "@/utils/GlobalApi";
const TaskColumns = [
  {
    accessorKey: "title",
    header: "Task Title",
    cell: ({ row }) => (
      <div className="flex gap-2 items-center">
        <div
          className={`w-3 h-3 ${getColorOnStage(
            row?.original?.stage
          )} rounded-full`}
        ></div>
        <div className="text-sm font-medium">{row?.original?.title}</div>
      </div>
    ),
  },
  {
    accessorKey: "priority",
    header: "Priority",
    cell: ({ row }) => getPriority(row?.original?.priority),
  },
  {
    accessorKey: "date",
    header: "Created At",
    cell: ({ row }) => (
      <div className="text-sm">
        {moment(row?.original?.date).format("DD MMM YYYY")}
      </div>
    ),
  },
  {
    accessorKey: "assets",
    header: "Assets",
    cell: ({ row }) => (
      <div className="flex gap-3 items-center">
        <div className="flex gap-1.5 items-center text-muted-foreground">
          <GitCompareArrows className="w-4 h-4" />
          <p className="text-sm ">{row?.original?.subTasks?.length ?? 0}</p>
        </div>
        <div className="flex gap-1.5 items-center text-muted-foreground">
          <Images className="w-4 h-4" />
          <p className="text-sm ">{row?.original?.assets?.length ?? 0}</p>
        </div>
        <div className="flex gap-1.5 items-center text-muted-foreground">
          <ListTodo className="w-4 h-4" />
          <p className="text-sm ">
            {row?.original?.subTasks?.length ?? 0}/
            {row?.original?.activities?.length ?? 0}
          </p>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "team",
    header: "Team",
    cell: ({ row }) => (
      <div className="flex">
        {row?.original?.team?.map((curr, index) => {
          return <TeamUserCard index={index} key={index} user={curr} />;
        })}
      </div>
    ),
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => <TableActionBtns row={row} />,
  },
];

export default TaskColumns;

const TableActionBtns = ({ row }) => {
  const task = row?.original;
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openAddSubTaskDialog, setOpenAddSubTaskDialog] = useState(false);
  const [openDuplicateAlert, setOpenDuplicateAlert] = useState(false);
  const [openRemoveAlert, setOpenRemoveAlert] = useState(false);
  const duplicateTask = async () => {
    const success = await duplicateTasks(task?.id);
    if (success) {
      setOpenDuplicateAlert(false);
    }
  };
  const deleteTask = async () => {
    const success = await trashedTask(task?.id);
    if (success) {
      setOpenRemoveAlert(false);
    }
  };
  const navigate = useNavigate();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-8 w-8 p-0 focus-visible:ring-0 focus-visible:ring-transparent"
        >
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="flex gap-1.5 items-center"
          onClick={() => navigate(`/task/${task?.id}`)}
        >
          <FolderOpen className="w-3 h-3" />
          <p className="text-[13px] font-medium">Open Task</p>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex gap-1.5 items-center"
          onClick={() => setOpenEditDialog(true)}
        >
          <Pencil className="w-3 h-3" />
          <p className="text-[13px] font-medium">Edit Task</p>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex gap-1.5 items-center"
          onClick={() => setOpenAddSubTaskDialog(true)}
        >
          <GitPullRequestCreateArrow className="w-3 h-3" />
          <p className="text-[13px] font-medium">Add Sub-Task</p>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex gap-1.5 items-center"
          onClick={() => setOpenDuplicateAlert(true)}
        >
          <Copy className="w-3 h-3" />
          <p className="text-[13px] font-medium">Duplicate</p>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex gap-1.5 items-center"
          onClick={() => setOpenRemoveAlert(true)}
        >
          <Trash2 className="w-3 h-3" />
          <p className="text-[13px] font-medium">Delete</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
      <EditTaskDialog
        open={openEditDialog}
        setOpen={setOpenEditDialog}
        type="Edit"
        form={task}
      />
      <AddSubTaskDialog
        open={openAddSubTaskDialog}
        setOpen={setOpenAddSubTaskDialog}
        id={task?.id}
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
    </DropdownMenu>
  );
};
