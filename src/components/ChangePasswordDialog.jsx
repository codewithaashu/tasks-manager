import InputComponent from "@/components/custom/InputComponent";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogFooter, DialogTitle } from "./ui/dialog";

const ChangePasswordDialog = ({ open, setOpen }) => {
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const handleClick = () => {};
  return (
    <Dialog open={open}>
      <DialogContent className="w-[480px] pt-5 flex flex-col  gap-5">
        <DialogTitle>Change Password</DialogTitle>
        <Separator className="-mt-2" />
        <div className="flex flex-col gap-3">
          <InputComponent
            field={"currentPassword"}
            form={form}
            label={"Current Password"}
            placeholder={"Type current password here..."}
            type={"text"}
            setForm={setForm}
          />
          <InputComponent
            field={"newPassword"}
            form={form}
            label={"New Password"}
            placeholder={"Type new password here..."}
            type={"text"}
            setForm={setForm}
          />
          <InputComponent
            field={"confirmPassword"}
            form={form}
            label={"Confirm Password"}
            placeholder={"Type confirm password here..."}
            type={"text"}
            setForm={setForm}
          />
        </div>
        <DialogFooter className="flex justify-between sm:justify-between my-3">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleClick}>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ChangePasswordDialog;
