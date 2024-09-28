import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronDown, X } from "lucide-react";
import React, { useState } from "react";
import UserAvatar from "../UserAvatar";

const MultipleSelectComponent = ({
  name,
  items,
  emptyPlaceholder,
  placeholder,
  field,
  form,
  setForm,
  isDialog = false,
}) => {
  const [open, setOpen] = useState(false);
  const removeItem = (name) => {
    const updateField = form[field].filter((c) => c.name !== name);
    setForm({ ...form, [field]: updateField });
  };
  const handleClick = (item) => {
    const data = form[field];
    data.find((c) => c.name === item.name)
      ? setForm({
          ...form,
          [field]: data.filter((c) => c.name !== item.name),
        })
      : setForm({ ...form, [field]: [...data, item] });
  };

  return (
    <div className="grid w-full gap-1.5">
      <Label className="text-base px-1">{name}</Label>
      <Popover open={open} onOpenChange={setOpen} className="w-full">
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="flex justify-between hover:bg-transparent h-fit"
          >
            <div className="flex gap-2 w-11/12 flex-wrap text-muted-foreground">
              {form[field].length === 0
                ? placeholder
                : form[field].length > 0 &&
                  form[field].map((item, index) => (
                    <div
                      key={index}
                      className="p-1 rounded-full px-2 flex flex-row gap-2 items-center bg-muted text-[13px] w-fit"
                    >
                      <span>{item.name}</span>
                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={() => removeItem(item.name)}
                      />
                    </div>
                  ))}
            </div>
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-96">
          <Command>
            <CommandInput placeholder="Search user..." />
            <CommandEmpty>{emptyPlaceholder}</CommandEmpty>
            <CommandGroup>
              <CommandList className="flex flex-col gap-3">
                {items.map((item, index) => (
                  <CommandItem
                    key={index}
                    name={item.name}
                    onSelect={() => {
                      handleClick(item);
                    }}
                    className="cursor-pointer"
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        form[field].find((c) => c.name === item.name)
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    <div className="flex gap-2 items-center">
                      <UserAvatar index={index} name={item.name} />
                      <span>{item.name}</span>
                    </div>
                  </CommandItem>
                ))}
              </CommandList>
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default MultipleSelectComponent;
