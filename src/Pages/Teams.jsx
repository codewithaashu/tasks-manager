import AddEditMemberDialog from "@/components/AddEditMemberDialog";
import CustomTable from "@/components/custom/CustomTable";
import Loading from "@/components/custom/Loading";
import TeamMemberColumns from "@/components/TeamMemberColumns";
import { Button } from "@/components/ui/button";
import { getTeamMembers } from "@/utils/GlobalApi";
import { Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Teams = () => {
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [teams, setTeams] = useState(null);
  const [loading, setLoading] = useState(false);
  const { refresh } = useSelector((state) => state.task);
  useEffect(() => {
    getTeams();
  }, [refresh]);
  const getTeams = async () => {
    setLoading(true);
    const response = await getTeamMembers();
    setTeams(response);
    setLoading(false);
  };
  return (
    <>
      {!loading ? (
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
          {teams && <CustomTable data={teams} columns={TeamMemberColumns} />}
          {teams?.length === 0 && (
            <div className="text-sm text-muted-foreground">
              No team member in your project. Add new member.
            </div>
          )}
        </div>
      ) : (
        <div className="py-5">
          <Loading />
        </div>
      )}
      <AddEditMemberDialog
        open={openAddDialog}
        setOpen={setOpenAddDialog}
        type="Add"
      />
    </>
  );
};

export default Teams;
