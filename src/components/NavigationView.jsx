import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Grid2x2, List } from "lucide-react";
import GridTaskCard from "./GridTaskCard";
import ListTaskCard from "./ListTaskCard";
import SelectComponent from "./custom/SelectComponent";
import { TaskFilterCriteria } from "@/db/TaskFilterCriteria";

const NavigationView = ({ items }) => {
  const [value, setValue] = useState("");
  return (
    <>
      <Tabs defaultValue="grid" className="w-full mt-3">
        <div className="flex justify-between">
          <TabsList className="flex gap-5 justify-start">
            <TabsTrigger
              value="grid"
              className="flex gap-0.5 items-center text-[15px] font-semibold data-[state=active]:text-primary data-[state=active]:border-primary border-2 bg-background"
            >
              <Grid2x2 className="w-4 h-4" />
              <p>Grid View</p>
            </TabsTrigger>
            <TabsTrigger
              value="list"
              className="flex gap-0.5 items-center text-[15px] font-semibold data-[state=active]:text-primary data-[state=active]:border-primary border-2 bg-background"
            >
              <List className="w-4 h-4" />
              <p>List View</p>
            </TabsTrigger>
          </TabsList>
          <SelectComponent
            placeholder={"Filter By"}
            items={TaskFilterCriteria}
            setValue={setValue}
          />
        </div>
        <TabsContent
          value="grid"
          className="my-5 grid grid-cols-3 gap-5 gap-y-7 w-full"
        >
          {items?.map((curr, index) => {
            return <GridTaskCard key={index} task={curr} />;
          })}
        </TabsContent>
        <TabsContent value="list" className="my-5">
          <ListTaskCard tasks={items} />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default NavigationView;
