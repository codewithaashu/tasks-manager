import DashboardTaskTable from "@/components/DashboardTaskTable";
import DashboardTeamTable from "@/components/DashboardTeamTable";
import StatsCard from "@/components/StatsCard";
import { setLoginUser } from "@/redux/userSlice";
import { getUser } from "@/utils/GlobalApi";
import { jwtDecode } from "jwt-decode";
import {
  CalendarCheck2,
  CalendarClock,
  CalendarCog,
  CalendarDays,
} from "lucide-react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getUserDetails();
  }, []);
  const getUserDetails = async () => {
    const token = localStorage.getItem("access_token");
    const email = jwtDecode(token).sub;
    const user = await getUser(email);
    dispatch(setLoginUser(user));
  };
  return (
    <>
      <div className="p-5 md:p-8 flex flex-col gap-5 md:gap-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <StatsCard
            Icon={CalendarDays}
            title={"Total Task"}
            value={10}
            style={"bg-primary text-white border-primary"}
          />
          <StatsCard
            Icon={CalendarCheck2}
            title={"Completed Task"}
            value={5}
            style={"bg-green-600 text-white border-green-600"}
          />
          <StatsCard
            Icon={CalendarClock}
            title={"In Progress Task"}
            value={2}
            style={"bg-yellow-600 text-white border-yellow-600"}
          />
          <StatsCard
            Icon={CalendarCog}
            title={"Todos"}
            value={3}
            style={"bg-red-600 text-white border-red-600"}
          />
        </div>
        <div className="grid grid-cols-3 gap-5">
          <DashboardTaskTable />
          <DashboardTeamTable />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
