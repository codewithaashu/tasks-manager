import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroupItem } from "@/components/ui/radio-group";

const RadioItemComponent = ({ activity }) => {
  return (
    <div className="flex items-center space-x-2">
      <RadioGroupItem value={activity.value} id={activity.value} />
      <Label htmlFor={activity.value}>{activity.label}</Label>
    </div>
  );
};

export default RadioItemComponent;
