import {
  CalendarCheck2,
  CalendarClock,
  CalendarCog,
  CalendarDays,
  LayoutDashboard,
  CalendarX2,
  Users,
} from "lucide-react";
import React from "react";
import { Link, useHref } from "react-router-dom";

const SideBar = () => {
  const path = useHref();
  return (
    <>
      <div className="min-h-screen flex flex-col w-60 p-2 px-3 border-r rounded-md shadow-sm">
        {/* logo */}
        <div className="h-14 border-b-[1px] border-muted flex items-center">
          <img
            src="https://lnct-campus.vercel.app/assets/logo-QvsrVlYc.svg"
            className="h-8"
          />
        </div>
        {/* Sidebar Elements */}
        <div className="flex flex-col gap-3 py-3">
          <Link
            className={`flex gap-2  text-[15px] cursor-pointer hover:text-card-foreground text-muted-foreground   items-center p-2 px-3  rounded-full ${
              path.includes("/dashboard")
                ? "bg-primary text-white "
                : "bg-background"
            }`}
            to="/dashboard"
          >
            <LayoutDashboard className="w-5 h-5" />
            <p className="font-semibold text-base">Dashboard</p>
          </Link>
          <Link
            className={`flex gap-2  text-[15px] cursor-pointer hover:text-card-foreground text-muted-foreground   items-center p-2 px-3  rounded-full ${
              path.includes("/tasks")
                ? "bg-primary text-white "
                : "bg-background"
            }`}
            to="/tasks"
          >
            <CalendarDays className="w-5 h-5" />
            <p className="font-semibold text-base">Tasks</p>
          </Link>
          <Link
            className={`flex gap-2  text-[15px] cursor-pointer hover:text-card-foreground text-muted-foreground   items-center p-2 px-3  rounded-full ${
              path.includes("/todo")
                ? "bg-primary text-white "
                : "bg-background"
            }`}
            to="/todo"
          >
            <CalendarCog className="w-5 h-5" />
            <p className="font-semibold text-base">Todo</p>
          </Link>
          <Link
            className={`flex gap-2  text-[15px] cursor-pointer hover:text-card-foreground text-muted-foreground   items-center p-2 px-3  rounded-full ${
              path.includes("/in-progress")
                ? "bg-primary text-white "
                : "bg-background"
            }`}
            to="/in-progress"
          >
            <CalendarClock className="w-5 h-5" />
            <p className="font-semibold text-base">In Progress</p>
          </Link>
          <Link
            className={`flex gap-2  text-[15px] cursor-pointer hover:text-card-foreground text-muted-foreground   items-center p-2 px-3  rounded-full ${
              path.includes("/completed")
                ? "bg-primary text-white "
                : "bg-background"
            }`}
            to="/completed"
          >
            <CalendarCheck2 className="w-5 h-5" />
            <p className="font-semibold text-base">Completed</p>
          </Link>
          <Link
            className={`flex gap-2  text-[15px] cursor-pointer hover:text-card-foreground text-muted-foreground   items-center p-2 px-3  rounded-full ${
              path.includes("/trash")
                ? "bg-primary text-white "
                : "bg-background"
            }`}
            to="/trash"
          >
            <CalendarX2 className="w-5 h-5" />
            <p className="font-semibold text-base">Trash</p>
          </Link>
          <Link
            className={`flex gap-2  text-[15px] cursor-pointer hover:text-card-foreground text-muted-foreground   items-center p-2 px-3  rounded-full ${
              path.includes("/team")
                ? "bg-primary text-white "
                : "bg-background"
            }`}
            to="/team"
          >
            <Users className="w-5 h-5" />
            <p className="font-semibold text-base">Team</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideBar;
