import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { DialogTitle } from "@radix-ui/react-dialog";
import InputComponent from "./custom/InputComponent";
import SelectLabelComponent from "./custom/SelectLabelComponent";

import { Separator } from "./ui/separator";
import { Role } from "@/db/Role";
import { addTeamMember, update_TeamMember } from "@/utils/GlobalApi";

const AddEditMemberDialog = ({ open, setOpen, type, form = null }) => {
  const [memberForm, setMemberForm] = useState(
    !form
      ? {
          name: "",
          title: "",
          email: "",
          role: "",
        }
      : form
  );
  const handleSave = async () => {
    if (type === "Edit") {
      //Update Member
      const success = await update_TeamMember(form.id, memberForm);
      if (success) {
        setOpen(false);
      }
    } else {
      // Add new member
      const success = await addTeamMember(memberForm);
      if (success) {
        setOpen(false);
      }
    }
  };
  return (
    <Dialog open={open}>
      <DialogContent>
        <DialogTitle className="text-lg font-semibold">
          {type === "Add" ? "Add Team Member" : "Edit Profile"}
        </DialogTitle>
        <DialogDescription />
        <Separator className="-my-2" />
        <div className="flex flex-col w-full gap-3">
          <InputComponent
            field={"name"}
            form={memberForm}
            label={"Name"}
            placeholder={"Enter team member name..."}
            setForm={setMemberForm}
            type={"text"}
          />
          <InputComponent
            field={"title"}
            form={memberForm}
            label={"Designation"}
            placeholder={"Enter designation of member..."}
            setForm={setMemberForm}
            type={"text"}
          />
          <InputComponent
            field={"email"}
            form={memberForm}
            label={"Email Address"}
            placeholder={"Enter email address..."}
            setForm={setMemberForm}
            type={"email"}
          />
          <SelectLabelComponent
            field={"role"}
            form={memberForm}
            setForm={setMemberForm}
            items={Role}
            label={"Role"}
            placeholder={"Select role"}
            title={"Role"}
          />
        </div>
        <DialogFooter className="w-full flex sm:justify-between gap-5 mt-4">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button type="submit" onClick={handleSave}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddEditMemberDialog;
