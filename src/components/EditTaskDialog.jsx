import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { DialogTitle } from "@radix-ui/react-dialog";
import InputComponent from "./custom/InputComponent";
import { TaskStage } from "@/db/TaskStage";
import SelectLabelComponent from "./custom/SelectLabelComponent";
import DateLabelComponent from "./custom/DateLabelComponent";

import { Separator } from "./ui/separator";
import ImageInputComponent from "./custom/ImageInputComponent";
import MultipleSelectComponent from "./custom/MultipleSelectComponent";
import { TaskPriority } from "@/db/TaskPriority";
import { createTask, editTask, getTeamMembers } from "@/utils/GlobalApi";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { refreshPage } from "@/redux/taskSlice";

const EditTaskDialog = ({ open, setOpen, type, form = null }) => {
  const dispatch = useDispatch();
  const [teamMember, setTeamMember] = useState(null);
  const [editTaskForm, setEditTaskForm] = useState(
    !form
      ? {
          title: "",
          team: [],
          stage: "",
          priority: "",
          date: "",
          // assets: "",
        }
      : form
  );
  useEffect(() => {
    getTeamMember();
  }, []);
  const getTeamMember = async () => {
    setTeamMember(await getTeamMembers());
  };
  const handleSave = async () => {
    if (
      !editTaskForm.title ||
      !editTaskForm.stage ||
      !editTaskForm.priority ||
      !editTaskForm.date ||
      editTaskForm.team.length === 0
    ) {
      toast.error("Please fill in all fields");
      return;
    }
    if (type === "Edit") {
      const success = await editTask(form?.id, editTaskForm);
      if (success) {
        setOpen(false);
        dispatch(refreshPage());
      }
    } else {
      const success = await createTask(editTaskForm);
      if (success) {
        setOpen(false);
        dispatch(refreshPage());
      }
    }
  };
  return (
    <Dialog open={open}>
      <DialogContent>
        <DialogTitle className="text-lg font-semibold">{type} Task</DialogTitle>
        <DialogDescription />
        <Separator className="-my-2" />
        <div className="flex flex-col w-full gap-4">
          <InputComponent
            field={"title"}
            form={editTaskForm}
            label={"Task Title"}
            placeholder={"Enter task title..."}
            setForm={setEditTaskForm}
            type={"text"}
          />
          <div className="grid grid-cols-2 gap-5 ">
            <SelectLabelComponent
              field={"stage"}
              form={editTaskForm}
              setForm={setEditTaskForm}
              items={TaskStage}
              label={"Stage"}
              placeholder={"Select task stage"}
              title={"Task Stage"}
            />
            <SelectLabelComponent
              field={"priority"}
              form={editTaskForm}
              setForm={setEditTaskForm}
              items={TaskPriority}
              label={"Priority"}
              placeholder={"Select task priority"}
              title={"Task Priority"}
            />
          </div>
          <div className="grid grid-cols-2 gap-5 ">
            <DateLabelComponent
              title={"Task Date"}
              field={"date"}
              form={editTaskForm}
              setForm={setEditTaskForm}
            />
            <ImageInputComponent
              field={"asset"}
              form={editTaskForm}
              setForm={setEditTaskForm}
              placeholder={"Assets"}
            />
          </div>
          <MultipleSelectComponent
            emptyPlaceholder={"No user found..."}
            field={"team"}
            form={editTaskForm}
            setForm={setEditTaskForm}
            items={teamMember}
            label={"Assign Task To "}
            placeholder={"Select user(s)"}
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

export default EditTaskDialog;
