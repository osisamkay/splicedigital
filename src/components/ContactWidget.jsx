import React from "react";

import Image from "next/image";

import { BugIcon } from "../assets/icons/bugIcon";
import { SubscribeIcon } from "../assets/icons/subscribeIcon";
import { UserIcon } from "../assets/icons/userIcon";
import { contactData } from "../data/WidgetData";

const ContactWidget = () => {
  return (
    <div className=" p-6">
      <p className=" leading-[18px] mb-[24px] text-sm font-semibold text-ByeWindBlack">
        Contacts
      </p>
      {contactData.map((item, index) => (
        <div className="flex flex-row mb-4 items-center justify-between  align-middle">
          <Image src={item.avatar} alt={item.name} width={24} height={24} />
          <div className="message">
            <div className="w-[200px] text-sm truncate text-ByeWindBlack">
              {item.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactWidget;
