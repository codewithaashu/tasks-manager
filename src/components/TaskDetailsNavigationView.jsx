import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ListChecks, Logs } from "lucide-react";
import TaskDetailTab from "./TaskDetailTab";
import TaskActivitiesTab from "./TaskActivitiesTab";

const TaskDetailsNavigationView = () => {
  return (
    <>
      <Tabs defaultValue="details" className="w-full mt-1">
        <div className="flex justify-between">
          <TabsList className="flex flex-row gap-5 justify-start">
            <TabsTrigger
              value="details"
              className="flex gap-1 items-center text-[15px] font-semibold data-[state=active]:text-primary data-[state=active]:border-primary border-2 bg-background"
            >
              <ListChecks className="w-4 h-4" />
              <p>Task Details</p>
            </TabsTrigger>
            <TabsTrigger
              value="activities"
              className="flex gap-1 items-center text-[15px] font-semibold data-[state=active]:text-primary data-[state=active]:border-primary border-2 bg-background"
            >
              <Logs className="w-4 h-4" />
              <p>Activities/Timeline</p>
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="details" className="my-5 w-full">
          <TaskDetailTab />
        </TabsContent>
        <TabsContent value="activities" className="my-5">
          <TaskActivitiesTab />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default TaskDetailsNavigationView;
