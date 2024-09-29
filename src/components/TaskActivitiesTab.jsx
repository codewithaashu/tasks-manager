import React, { useState } from "react";
import ActivityCard from "./ActivityCard";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useSelector } from "react-redux";
import RadioItemComponent from "@/components/custom/RadioItemComponent";
import { ActivityType } from "@/db/ActivityType";
import { RadioGroup } from "./ui/radio-group";
import { useParams } from "react-router-dom";
import { createActivity } from "@/utils/GlobalApi";
import { toast } from "sonner";
const TaskActivitiesTab = () => {
  const { task } = useSelector((state) => state.task);
  const { user } = useSelector((state) => state.user);
  const { id } = useParams();
  const [form, setForm] = useState({
    type: "started",
    activity: "",
    by: user,
  });
  const addActivities = async () => {
    if (!form.activity) {
      toast.error("Please fill all the fields.");
      return;
    }
    // Add activity to the task
    const success = await createActivity(id, form);
    if (success) {
      setForm({
        type: "started",
        activity: "",
        by: user,
      });
    }
  };
  return (
    <>
      <div className="grid grid-cols-3 gap-5 w-full bg-background rounded-md p-5 md:p-8">
        <div className="flex flex-col gap-5 col-span-2">
          <div className="text-[17px] font-semibold text-muted-foreground">
            Activities
          </div>
          <div className="flex flex-col gap-5">
            {task?.activites?.length === 0 ? (
              <div className="text-sm py-2 font-medium text-muted-foreground">
                No activities found
              </div>
            ) : (
              task?.activites?.map((activity, index) => (
                <ActivityCard key={index} activity={activity} />
              ))
            )}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[17px] font-semibold text-muted-foreground">
            Add Activity
          </h1>

          <RadioGroup
            defaultValue={form.type}
            className="flex gap-5 flex-wrap"
            onValueChange={(val) => setForm({ ...form, type: val })}
          >
            {ActivityType?.map((activity, index) => {
              return <RadioItemComponent activity={activity} key={index} />;
            })}
          </RadioGroup>
          <div className="my-3">
            <Textarea
              placeholder="Type your message here..."
              className="resize-none h-64"
              value={form.activity}
              onChange={(e) => setForm({ ...form, activity: e.target.value })}
            />
          </div>
          <Button className="w-fit -mt-3" onClick={addActivities}>
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default TaskActivitiesTab;
