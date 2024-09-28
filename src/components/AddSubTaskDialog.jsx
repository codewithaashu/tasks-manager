import React, { useState } from "react";
import { Dialog, DialogContent, DialogFooter, DialogTitle } from "./ui/dialog";
import { Separator } from "./ui/separator";
import InputComponent from "./custom/InputComponent";
import DateLabelComponent from "./custom/DateLabelComponent";
import { Button } from "./ui/button";

const AddSubTaskDialog = ({ open, setOpen }) => {
  const [addSubTaskForm, setAddSubTaskForm] = useState({
    title: "",
    date: "",
    tag: "",
  });
  const handleSave = () => {};
  return (
    <Dialog open={open}>
      <DialogContent>
        <DialogTitle className="text-lg font-semibold">
          Add Sub-Task
        </DialogTitle>
        <Separator className="-my-2" />
        <div className="flex flex-col w-full gap-4">
          <InputComponent
            field={"title"}
            label={"Sub-Task Title"}
            placeholder={"Enter sub-task title..."}
            form={addSubTaskForm}
            setForm={setAddSubTaskForm}
            type={"text"}
          />
          <div className="grid grid-cols-2 gap-5 ">
            <DateLabelComponent
              title={"Task Date"}
              field={"date"}
              form={addSubTaskForm}
              setForm={setAddSubTaskForm}
            />
            <InputComponent
              field={"tag"}
              label={"Tag"}
              placeholder={"Enter sub-task tag here..."}
              form={addSubTaskForm}
              setForm={setAddSubTaskForm}
              type={"text"}
            />
          </div>
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

export default AddSubTaskDialog;
