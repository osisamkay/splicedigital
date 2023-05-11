import React from "react";
import Image from "next/image";

import AvatarGroup from "../assets/images/AvatarGroup.png";
import coffeeAvatar from "../assets/images/coffeeAvatar.png";
import ProgressBar from "../components/ProgressBar";

const Details = () => {
  return (
    <div className="p-6 bg-ByeWindBackground mt-6 rounded-[16px] ">
      <div className="flex flex-row justify-between items-center mb-[16px]">
        <p className=" text-lg font-semibold text-ByeWindBlack ">
          Coffee detail page
        </p>
        <Image src={coffeeAvatar} alt="avatar" />
      </div>

      <div className="flex flex-row justify-between items-end ">
        <div className="flex flex-wrap flex-row justify-between items-center ">
          {details.map((item, index) => (
            <div
              className={`${index < details.length - 1 && "md:border-r "} ${
                index > 0 ? "md:px-[28px]" : "md:pr-[28px]"
              } `}
              key={index}
            >
              <div className="title">{item.title}</div>
              {item.title === "Status" ? (
                <ProgressBar />
              ) : (
                <div className="text-lg font-extrabold mb-5">{item.detail}</div>
              )}
            </div>
          ))}
        </div>
        <Image src={AvatarGroup} alt="avatar group" />
      </div>
    </div>
  );
};

export default Details;

const details = [
  { title: "Status", detail: "Progress" },
  { title: "Total Task", detail: "15 / 48" },
  { title: "Due Date", detail: "29 Jan, 2022" },
  { title: "Budget Spent", detail: "$15,000" },
];
