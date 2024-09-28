import React, { useState } from "react";
import { Dialog, DialogContent, DialogFooter, DialogTitle } from "./ui/dialog";
import { Separator } from "./ui/separator";
import InputComponent from "./custom/InputComponent";
import { Button } from "./ui/button";

const ProfileDialog = ({ open, setOpen }) => {
  const [form, setForm] = useState({
    name: "",
    designation: "",
    email: "",
    role: "",
  });
  const handleClick = () => {};
  return (
    <>
      <Dialog open={open}>
        <DialogContent className="w-[480px] pt-5 flex flex-col  gap-5">
          <DialogTitle>Update Profile</DialogTitle>
          <Separator className="-mt-2" />
          <div className="flex flex-col gap-3">
            <InputComponent
              field={"name"}
              form={form}
              label={"Name"}
              placeholder={"Enter full name..."}
              type={"text"}
              setForm={setForm}
            />
            <InputComponent
              field={"designation"}
              form={form}
              label={"Designation"}
              placeholder={"Enter your designation..."}
              type={"text"}
              setForm={setForm}
            />
            <InputComponent
              field={"email"}
              form={form}
              label={"Email Address"}
              placeholder={"Enter email address..."}
              type={"email"}
              setForm={setForm}
            />
            <InputComponent
              field={"role"}
              form={form}
              label={"Role"}
              placeholder={"Enter role here..."}
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
    </>
  );
};

export default ProfileDialog;
