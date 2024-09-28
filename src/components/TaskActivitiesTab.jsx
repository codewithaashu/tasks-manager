import React from "react";
import ActivityCard from "./ActivityCard";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import CheckBoxComponent from "./custom/CheckBoxComponent";

const TaskActivitiesTab = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-5 w-full bg-background rounded-md p-5 md:p-8">
        <div className="flex flex-col gap-5 col-span-2">
          <div className="text-[17px] font-semibold text-muted-foreground">
            Activities
          </div>
          <div className="flex flex-col gap-5">
            <ActivityCard type="started" />
            <ActivityCard type="bug" />
            <ActivityCard type="commented" />
            <ActivityCard type="completed" />
            <ActivityCard type="assigned" />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[17px] font-semibold text-muted-foreground">
            Add Activity
          </h1>
          <div className="flex gap-5 flex-wrap">
            <CheckBoxComponent title={"Started"} />
            <CheckBoxComponent title={"Completed"} />
            <CheckBoxComponent title={"In Progress"} />
            <CheckBoxComponent title={"Commented"} />
            <CheckBoxComponent title={"Bug"} />
            <CheckBoxComponent title={"Assigned"} />
          </div>
          <div className="my-3">
            <Textarea
              placeholder="Type your message here..."
              className="resize-none h-64"
            />
          </div>
          <Button className="w-fit -mt-3">Submit</Button>
        </div>
      </div>
    </>
  );
};

export default TaskActivitiesTab;
