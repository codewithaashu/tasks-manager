import React from "react";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const DateLabelComponent = ({ title, form, setForm, field }) => {
  return (
    <div className="grid w-full items-center gap-1.5">
      <Label className="text-base px-1">{title}</Label>
      <Popover>
        <PopoverTrigger asChild>
          <div>
            <Button
              variant={"outline"}
              className={cn(
                "w-full pl-3 text-left font-normal",
                !form[field] && "text-muted-foreground"
              )}
            >
              {form[field] ? (
                format(form[field], "PPP")
              ) : (
                <span>Pick a date</span>
              )}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={form[field]}
            onSelect={(val) => setForm({ ...form, [field]: val })}
            disabled={(date) =>
              date > new Date() || date < new Date("1900-01-01")
            }
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DateLabelComponent;
