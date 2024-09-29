import moment from "moment";
import AlertDialogComponent from "./custom/AlertDialogComponent";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArchiveRestore, MoreHorizontal, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useState } from "react";
import { getColorOnStage } from "@/utils/getColorOnStage";
import { getPriority } from "@/utils/getPriority";
import { delete_Task, restore_Task } from "@/utils/GlobalApi";
import { useDispatch } from "react-redux";
import { refreshPage } from "@/redux/taskSlice";

const TrashTaskColumns = [
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
    header: "Modified On",
    cell: ({ row }) => (
      <div className="text-sm">
        {moment(row?.original?.date).format("DD MMM YYYY")}
      </div>
    ),
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => <TableActionBtns row={row} />,
  },
];

export default TrashTaskColumns;

const TableActionBtns = ({ row }) => {
  const task = row?.original;
  const [openRestoreAlert, setOpenRestoreAlert] = useState(false);
  const [openRemoveAlert, setOpenRemoveAlert] = useState(false);
  const dispatch = useDispatch();
  const restoreTask = async () => {
    const success = await restore_Task(task.id);
    if (success) {
      setOpenRestoreAlert(false);
      dispatch(refreshPage());
    }
  };
  const deleteTask = async () => {
    const success = await delete_Task(task.id);
    if (success) {
      setOpenRemoveAlert(false);
      dispatch(refreshPage());
    }
  };

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
      <DropdownMenuContent align="end" className="flex flex-col gap-2 p-2">
        <DropdownMenuItem
          className="flex gap-1.5 items-center"
          onClick={() => setOpenRestoreAlert(true)}
        >
          <ArchiveRestore className="w-4 h-4" />
          <p className="text-sm font-medium">Restore</p>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex gap-1.5 items-center  "
          onClick={() => setOpenRemoveAlert(true)}
        >
          <Trash2 className="w-4 h-4" />
          <p className="text-sm font-medium">Delete</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
      <AlertDialogComponent
        open={openRestoreAlert}
        setOpen={setOpenRestoreAlert}
        message={`This action will restore the task of title : ${task?.title}.`}
        handleContinue={restoreTask}
      />
      <AlertDialogComponent
        open={openRemoveAlert}
        setOpen={setOpenRemoveAlert}
        message={`This action will permanently delete the task of the title : ${task?.title} from the record.`}
        handleContinue={deleteTask}
      />
    </DropdownMenu>
  );
};
