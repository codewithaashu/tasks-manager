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
import { delete_TeamMember } from "@/utils/GlobalApi";
import { bgColor } from "@/utils/bgColor";

const TeamMemberColumns = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const user = row?.original;
      return (
        <div className="w-fit flex flex-row gap-2 items-center">
          <div
            className={`w-8 h-8  rounded-full ${
              bgColor[user?.id % bgColor.length]
            } flex items-center justify-center text-sm`}
          >
            <span className="text-center font-bold">
              {user?.name?.split(" ").length == 1
                ? user?.name?.substring(0, 2)
                : user?.name?.split(" ")[0][0] + user?.name?.split(" ")[1][0]}
            </span>
          </div>
          <div className="flex flex-col gap-0.5">
            <h1 className="text-sm font-semibold leading-4">{user?.name}</h1>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "title",
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
          row?.original?.isActive
            ? "bg-green-100 text-green-600"
            : "bg-slate-100 text-slate-600"
        }`}
      >
        {row?.original?.isActive ? "Active" : "Inactive"}
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
  const deleteMember = async () => {
    const success = await delete_TeamMember(user.id);
    if (success) {
      setOpenRemoveAlert(false);
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
