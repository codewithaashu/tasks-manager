import { Bell, Moon, Sun } from "lucide-react";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "@/components/theme-provider";

const Header = () => {
  const { setTheme, theme } = useTheme();
  return (
    <>
      <div className="w-full p-2 h-16 pr-8 border-b flex justify-end shadow-sm">
        <div className="flex gap-5 items-center">
          {theme === "light" ? (
            <Sun
              className="w-5 h-5 cursor-pointer"
              onClick={() => setTheme("dark")}
            />
          ) : (
            <Moon
              className="w-5 h-5 cursor-pointer"
              onClick={() => setTheme("light")}
            />
          )}
          <Bell className="w-5 h-5 cursor-pointer" />
          <Popover>
            <PopoverTrigger asChild>
              <Avatar className="w-8 h-8 cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <h1>hello</h1>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </>
  );
};

export default Header;
