import {
  Bug,
  CircleCheckBig,
  Loader,
  MessageSquareText,
  ThumbsUp,
  User,
} from "lucide-react";
import React from "react";

const ActivityCard = ({ type }) => {
  return (
    <>
      <div className="flex gap-5">
        <div className="w-10 h-10 flex items-center justify-center">
          {logoOnActivityType(type)}
        </div>
        <div>
          <h1 className="text-base font-medium">Codewave</h1>
          <p className="text-sm text-muted-foreground">
            Assigned on : 28 Sep 2024
          </p>
          <p className="text-sm font-normal mt-2 w-1/2">
            New task has been assigned to you and 2 others.The task priority is
            set a high priority, so check and act accordingly. The task date is
            2024-08-16. Thank you!!!
          </p>
        </div>
      </div>
    </>
  );
};

const logoOnActivityType = (type) => {
  if (type === "started") {
    return (
      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
        <ThumbsUp className="w-5 h-5" />
      </div>
    );
  } else if (type === "completed") {
    return (
      <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white">
        <CircleCheckBig className="w-5 h-5" />
      </div>
    );
  } else if (type === "in_progress") {
    return (
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-violet-600 text-white">
        <Loader className="w-5 h-5" />
      </div>
    );
  } else if (type === "commented") {
    return (
      <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-white">
        <MessageSquareText />,
      </div>
    );
  } else if (type === "bug") {
    return (
      <div className="w-10 h-10 rounded-full text-red-600 flex items-center justify-center bg-muted">
        <Bug className="w-5 h-5" />
      </div>
    );
  } else if (type === "assigned") {
    return (
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-500 text-white">
        <User className="w-5 h-5" />
      </div>
    );
  }
};
export default ActivityCard;
