import InputComponent from "@/components/custom/InputComponent";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "./ui/dialog";
import { changePassword } from "@/utils/GlobalApi";
import { useSelector } from "react-redux";
import { toast } from "sonner";

const ChangePasswordDialog = ({ open, setOpen }) => {
  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });
  const { user } = useSelector((state) => state.user);
  const handleClick = async () => {
    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    const success = await changePassword({
      password: form.password,
      email: user.email,
    });
    if (success) {
      setOpen(false);
      setForm({
        password: "",
        confirmPassword: "",
      });
    }
  };
  return (
    <Dialog open={open}>
      <DialogContent className="w-[480px] pt-5 flex flex-col  gap-5">
        <DialogTitle>Change Password</DialogTitle>
        <DialogDescription />
        <Separator className="-mt-2" />
        <div className="flex flex-col gap-3">
          <InputComponent
            field={"password"}
            form={form}
            label={"New Password"}
            placeholder={"Type new password here..."}
            type={"password"}
            setForm={setForm}
          />
          <InputComponent
            field={"confirmPassword"}
            form={form}
            label={"Confirm Password"}
            placeholder={"Type confirm password here..."}
            type={"password"}
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
