import AddEditMemberDialog from "@/components/AddEditMemberDialog";
import CustomTable from "@/components/custom/CustomTable";
import TeamMemberColumns from "@/components/TeamMemberColumns";
import { Button } from "@/components/ui/button";
import { TeamMemberList } from "@/db/TeamMemberList";
import { Plus } from "lucide-react";
import React, { useState } from "react";

const Teams = () => {
  const [openAddDialog, setOpenAddDialog] = useState(false);
  return (
    <>
      <div className="p-5 md:p-8 flex flex-col gap-5">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Team Members</h1>
          <Button
            className="flex items-center gap-0.5"
            onClick={() => setOpenAddDialog(true)}
          >
            <Plus className="w-4 h-4" /> Add Team Member
          </Button>
        </div>
        <CustomTable data={TeamMemberList} columns={TeamMemberColumns} />
      </div>
      <AddEditMemberDialog
        open={openAddDialog}
        setOpen={setOpenAddDialog}
        type="Add"
      />
    </>
  );
};

export default Teams;
