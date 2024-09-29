import {
  Bell,
  CircleUserRound,
  LogOut,
  Moon,
  Sun,
  UserRoundCog,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useTheme } from "@/components/theme-provider";
import ChangePasswordDialog from "@/components/ChangePasswordDialog";
import ProfileDialog from "@/components/ProfileDialog";
import NotificationCard from "@/components/NotificationCard";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getNotifications, markNotificationsAsRead } from "@/utils/GlobalApi";
import { refreshPage } from "@/redux/taskSlice";

const Header = () => {
  const { setTheme, theme } = useTheme();
  const [openChangePasswordDialog, setOpenChangePasswordDialog] =
    useState(false);
  const navigate = useNavigate();
  const [openUpdateProfileDialog, setOpenUpdateProfileDialog] = useState(false);
  const { user } = useSelector((state) => state.user);
  const handleLogout = () => {
    toast.success("Logout successfully");
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  return (
    <>
      <div className="w-full p-2 h-16 pr-8 border-b flex justify-end shadow-sm">
        <div className="flex gap-5 md:gap-7 items-center">
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
          <Popover>
            <PopoverTrigger asChild>
              <Bell className="w-5 h-5 cursor-pointer" />
            </PopoverTrigger>
            <NotificationBox />
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <div className="w-9 h-9 bg-primary rounded-full text-white flex items-center justify-center text-lg cursor-pointer ">
                <span className="text-center font-bold">
                  {user?.name?.split(" ").length == 1
                    ? user?.name?.substring(0, 2)
                    : user?.name?.split(" ")[0][0] +
                      user?.name?.split(" ")[1][0]}
                </span>
              </div>
            </PopoverTrigger>
            <PopoverContent
              side="bottom"
              align="end"
              className="w-48 flex flex-col gap-1"
            >
              <div
                className="flex gap-1.5 items-center cursor-pointer hover:bg-primary hover:text-white p-1.5 rounded-md"
                onClick={() => setOpenUpdateProfileDialog(true)}
              >
                <CircleUserRound className="w-4 h-4" />
                <p className="text-sm font-semibold">Profile</p>
              </div>
              <div
                className="flex gap-1.5 items-center cursor-pointer hover:bg-primary hover:text-white p-1.5 rounded-md"
                onClick={() => setOpenChangePasswordDialog(true)}
              >
                <UserRoundCog className="w-4 h-4" />
                <p className="text-sm font-semibold">Change Password</p>
              </div>
              <div
                className="flex gap-1.5 items-center text-red-600 cursor-pointer hover:bg-primary hover:text-white p-1.5 rounded-md"
                onClick={handleLogout}
              >
                <LogOut className="w-4 h-4" />
                <p className="text-sm font-semibold">Logout</p>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <ChangePasswordDialog
        open={openChangePasswordDialog}
        setOpen={setOpenChangePasswordDialog}
      />
      {user && (
        <ProfileDialog
          open={openUpdateProfileDialog}
          setOpen={setOpenUpdateProfileDialog}
        />
      )}
    </>
  );
};

const NotificationBox = () => {
  const [notification, setNotification] = useState(null);
  const [loading, setLoading] = useState(false);
  const { refresh } = useSelector((state) => state.task);
  const dispatch = useDispatch();
  useEffect(() => {
    getNotification();
  }, [refresh]);
  const getNotification = async () => {
    setLoading(true);
    const response = await getNotifications();
    if (response) {
      setNotification(response);
      setLoading(false);
    }
  };
  const handleMarkAllRead = async () => {
    await markNotificationsAsRead();
    dispatch(refreshPage());
  };
  return (
    <PopoverContent side="bottom" align="end" className="w-80 p-0">
      {!loading ? (
        <div className="flex flex-col gap-2 p-4 pb-1.5">
          {notification?.length === 0 && (
            <div className="text-sm text-muted-foreground h-32 py-3">
              No notifications.
            </div>
          )}
          {notification?.slice(0, 5)?.map((curr, index) => {
            return (
              <NotificationCard
                date={curr?.createdAt}
                notification={curr?.text}
                id={curr.id}
                key={index}
                index={index}
                length={5}
              />
            );
          })}
        </div>
      ) : (
        <div className="py-5">
          <loading />
        </div>
      )}
      <div className="grid grid-cols-2 shadow-sm p-2.5 px-5 bg-muted">
        <p className="text-muted-foreground text-sm border-r-2 border-muted-foreground cursor-pointer">
          Cancel
        </p>
        <p
          className="text-primary text-sm justify-self-end cursor-pointer"
          onClick={handleMarkAllRead}
        >
          Mark All Read
        </p>
      </div>
    </PopoverContent>
  );
};
export default Header;
