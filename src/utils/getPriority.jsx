import { ChevronsUp, ChevronUp } from "lucide-react";

export const getPriority = (priority) => {
  if (priority === "high") {
    return (
      <div className="flex gap-2.5 text-red-600 items-center">
        <ChevronsUp className="w-4 h-4" />
        <div className="uppercase text-[15px] font-medium ">
          {priority} Priority
        </div>
      </div>
    );
  } else if (priority === "medium") {
    return (
      <div className="flex gap-2.5 text-yellow-600 items-center">
        <ChevronUp className="w-4 h-4" />
        <div className="uppercase text-[15px] font-medium ">
          {priority} Priority
        </div>
      </div>
    );
  } else if (priority === "normal") {
    return (
      <div className="flex gap-2.5 text-blue-600 items-center">
        <div className="uppercase text-[15px] font-medium ">
          {priority} Priority
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex gap-2.5 text-muted-foreground items-center">
        <div className="uppercase text-[15px] font-medium ">
          {priority} Priority
        </div>
      </div>
    );
  }
};
