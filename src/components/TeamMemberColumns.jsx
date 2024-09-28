import moment from "moment";
import AlertDialogComponent from "./custom/AlertDialogComponent";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useState } from "react";
import AddEditMemberDialog from "./AddEditMemberDialog";

const TeamMemberColumns = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "designation",
    header: "Designation",
  },
  {
    accessorKey: "email",
    header: "Email Address",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "status",
    header: "Staus",
    cell: ({ row }) => (
      <div
        className={`p-0.5 rounded-full text-center ${
          row?.original?.status === "Active"
            ? "bg-green-100 text-green-600"
            : "bg-slate-100 text-slate-600"
        }`}
      >
        {row?.original?.status}
      </div>
    ),
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => <TableActionBtns row={row} />,
  },
];

export default TeamMemberColumns;

const TableActionBtns = ({ row }) => {
  const user = row?.original;
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openRemoveAlert, setOpenRemoveAlert] = useState(false);
  const deleteMember = () => {};

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
          onClick={() => setOpenEditDialog(true)}
        >
          <Pencil className="w-4 h-4" />
          <p className="text-sm font-medium">Edit</p>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex gap-1.5 items-center  "
          onClick={() => setOpenRemoveAlert(true)}
        >
          <Trash2 className="w-4 h-4" />
          <p className="text-sm font-medium">Delete</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
      <AddEditMemberDialog
        open={openEditDialog}
        setOpen={setOpenEditDialog}
        type="Edit"
        form={user}
      />
      <AlertDialogComponent
        open={openRemoveAlert}
        setOpen={setOpenRemoveAlert}
        message={`This action will permanently delete ${user?.name} from the record.`}
        handleContinue={deleteMember}
      />
    </DropdownMenu>
  );
};
