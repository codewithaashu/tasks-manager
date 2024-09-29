import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "./ui/dialog";
import { Separator } from "./ui/separator";
import InputComponent from "./custom/InputComponent";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "@/utils/GlobalApi";
import { setLoginUser } from "@/redux/userSlice";

const ProfileDialog = ({ open, setOpen }) => {
  const { user } = useSelector((state) => state.user);
  const [form, setForm] = useState(user);
  const dispatch = useDispatch();
  const handleClick = async () => {
    const response = await updateProfile(user?.id, form);
    if (response) {
      dispatch(setLoginUser(response?.data));
      setOpen(false);
    }
  };
  return (
    <>
      <Dialog open={open}>
        <DialogContent className="w-[480px] pt-5 flex flex-col  gap-5">
          <DialogTitle>Update Profile</DialogTitle>
          <DialogDescription />
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
              field={"title"}
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
