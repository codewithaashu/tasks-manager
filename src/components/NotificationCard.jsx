import moment from "moment";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { markNotificationAsRead } from "@/utils/GlobalApi";
import { useDispatch, useSelector } from "react-redux";

const NotificationCard = ({ date, notification, index, length, id }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={`flex flex-col gap-1.5 ${
          index !== length - 1 ? "border-b" : ""
        } pb-2 `}
      >
        <div className="flex gap-3.5 items-center">
          <h1 className="text-sm font-semibold">Alert</h1>
          <p className="text-xs text-muted-foreground">
            {moment(date).fromNow()}
          </p>
        </div>
        <div
          className="text-xs font-semibold line-clamp-2 cursor-pointer"
          onClick={() => setOpen(true)}
        >
          {notification}
        </div>
      </div>
      <NotificationDialog
        open={open}
        setOpen={setOpen}
        notification={notification}
        id={id}
      />
    </>
  );
};

const NotificationDialog = ({ open, setOpen, notification, id }) => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleMarkRead = async () => {
    const success = await markNotificationAsRead(user.id, id);
    if (success) {
      setOpen(false);
      dispatch(refreshPage());
    }
  };
  return (
    <Dialog open={open}>
      <DialogContent>
        <DialogTitle />
        <DialogDescription />
        <div className="text-sm">{notification}</div>
        <DialogFooter className="flex justify-between w-full sm:justify-between mt-2">
          <Button variant="outline" size="sm" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button size="sm" onClick={handleMarkRead}>
            Mark Read
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NotificationCard;
