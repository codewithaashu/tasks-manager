import { CircleCheckBig } from "lucide-react";
import moment from "moment";
import React from "react";

const SubTaskCard = ({ subTask }) => {
  return (
    <>
      <div className="flex gap-5">
        <CircleCheckBig className="w-6 h-6 text-green-600 self-center" />
        <div className="flex flex-col gap-0.5">
          <p className="text-sm text-muted-foreground">
            {moment(subTask?.date).format("DD MMM YYYY")}
          </p>
          <h1 className="text-base">{subTask?.title}</h1>
        </div>
        <div className=" bg-indigo-100 text-indigo-600 rounded-full text-sm px-2.5 py-0.5 h-fit w-fit text-center align-middle">
          {subTask?.tag}
        </div>
      </div>
    </>
  );
};

export default SubTaskCard;
