import React from "react";
import { Checkbox } from "../ui/checkbox";

const CheckBoxComponent = ({ title }) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={title.split(" ")[0]} />
      <label
        htmlFor={title.split(" ")[0]}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {title}
      </label>
    </div>
  );
};

export default CheckBoxComponent;
