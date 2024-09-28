import {
  Bell,
  CircleUserRound,
  LogOut,
  Moon,
  Sun,
  UserRoundCog,
} from "lucide-react";
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
            <PopoverContent
              side="bottom"
              align="end"
              className="w-48 flex flex-col gap-1"
            >
              <div className="flex gap-1.5 items-center cursor-pointer hover:bg-primary hover:text-white p-1.5 rounded-md">
                <CircleUserRound className="w-4 h-4" />
                <p className="text-sm font-semibold">Profile</p>
              </div>
              <div className="flex gap-1.5 items-center cursor-pointer hover:bg-primary hover:text-white p-1.5 rounded-md">
                <UserRoundCog className="w-4 h-4" />
                <p className="text-sm font-semibold">Change Password</p>
              </div>
              <div className="flex gap-1.5 items-center text-red-600 cursor-pointer hover:bg-primary hover:text-white p-1.5 rounded-md">
                <LogOut className="w-4 h-4" />
                <p className="text-sm font-semibold">Logout</p>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </>
  );
};

export default Header;
