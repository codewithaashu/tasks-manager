import { getColorOnStage } from "@/utils/getColorOnStage";
import { getPriority } from "@/utils/getPriority";
import React from "react";
import SubTaskCard from "./SubTaskCard";
import TeamUser from "./TeamUser";
import { Separator } from "./ui/separator";

const TaskDetailTab = () => {
  return (
    <>
      <div className="grid grid-cols-2 w-full bg-background rounded-md p-5 md:p-8">
        <div className="flex flex-col gap-5">
          <div className="flex gap-5 md:gap-8 items-center">
            {getPriority("high")}
            <div className="flex gap-2 items-center">
              <div
                className={`w-3.5 h-3.5 ${getColorOnStage(
                  "completed"
                )} rounded-full`}
              ></div>
              <div className="text-[17px] font-medium uppercase">
                {"Completed"}
              </div>
            </div>
          </div>
          <div className=" text-[15px] font-medium text-muted-foreground">
            Created At: Fri Aug 16 2024
          </div>
          <div className="p-3 flex gap-5 border-t border-b my-3 ">
            <div className="flex gap-3 border-r pr-5 items-center">
              <h1 className="text-[15px] font-semibold">Assets :</h1>
              <p className="text-[15px] font-medium">0</p>
            </div>
            <div className="flex gap-3 items-center">
              <h1 className="text-[15px] font-semibold">Sub-Task :</h1>
              <p className="text-[15px] font-medium">3</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="uppercase text-base font-semibold text-muted-foreground">
              Sub-Tasks
            </h1>
            <div className="flex flex-col gap-5">
              <SubTaskCard />
              <SubTaskCard />
              <SubTaskCard />
              <SubTaskCard />
            </div>
          </div>
          <Separator />
          <div className="flex flex-col gap-4 mb-3">
            <h1 className="uppercase text-base font-semibold text-muted-foreground">
              TASK TEAM
            </h1>
            <div className="flex flex-row flex-wrap gap-7">
              <TeamUser
                user={{
                  name: "Ashish Ranjan",
                  role: "Developer",
                  email: "ashishrajk123@gmail.com",
                }}
              />
              <TeamUser
                user={{
                  name: "Ashish Ranjan",
                  role: "Developer",
                  email: "ashishrajk123@gmail.com",
                }}
              />
              <TeamUser
                user={{
                  name: "Ashish Ranjan",
                  role: "Developer",
                  email: "ashishrajk123@gmail.com",
                }}
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-[17px] font-medium">Assets</h1>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskDetailTab;
