import React from "react";

import { BugIcon } from "../assets/icons/bugIcon";
import { SubscribeIcon } from "../assets/icons/subscribeIcon";
import { UserIcon } from "../assets/icons/userIcon";
import { notification } from "../data/WidgetData";

const NotificationWidget = () => {
  return (
    <div className=" p-6">
      <p className=" leading-[18px] mb-[24px] text-sm font-semibold text-ByeWindBlack">
        Notifications
      </p>
      {notification.map((item, index) => (
        <div className="flex flex-row mb-4 items-start justify-between  align-middle">
          {item.type === "bug" ? (
            <BugIcon />
          ) : item.type === "user" ? (
            <UserIcon />
          ) : (
            <SubscribeIcon />
          )}
          <div className="message">
            <div className="w-[200px] text-sm truncate text-ByeWindBlack">
              {item.message}
            </div>
            <div className="text-xs text-ByeWindGrey-dark">{item.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationWidget;
