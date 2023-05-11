import { AccountIcon } from "../assets/icons/accountIcon";
import { BlogIcon } from "../assets/icons/blogIcon";
import { CommerceIcon } from "../assets/icons/commerceIcon";
import { CorporateIcon } from "../assets/icons/corporateIcon";
import { CourseIcon } from "../assets/icons/courseIcon";
import { DefaultIcon } from "../assets/icons/defaultIcon";
import { ProfileIcon } from "../assets/icons/profileIcon";
import { ProjectIcon } from "../assets/icons/projectIcon";
import { SocialIcon } from "../assets/icons/socialIcon";

export const menuItems = [
  {
    title: "Dashboards",
    items: [
      {
        id: 1,
        label: "Default",
        path: "/",
        icon: <DefaultIcon />,
        children: [],
      },
      {
        id: 2,
        label: "eCommerce",
        path: "/",
        icon: <CommerceIcon />,
        children: [],
      },
      {
        id: 3,
        label: "Projects",
        path: "/",
        icon: <ProjectIcon />,
        children: [],
      },
      {
        id: 3,
        label: "Online Courses",
        path: "/",
        icon: <CourseIcon />,
        children: [],
      },
    ],
  },
  {
    title: "Pages",
    items: [
      {
        id: 4,
        label: "Default",
        path: "/",
        icon: <ProfileIcon />,
        children: [
          {
            id: 3,
            label: "Overview ",
            path: "/",
          },
          {
            id: 4,
            label: "Projects",
            path: "/",
          },
          {
            id: 5,
            label: "Campaigns",
            path: "/",
          },
          {
            id: 6,
            label: "Documents",
            path: "/",
          },
          {
            id: 7,
            label: "Followers",
            path: "/",
          },
        ],
      },
      {
        id: 2,
        label: "Account",
        path: "/",
        icon: <AccountIcon />,
        children: [],
      },
      {
        id: 3,
        label: "Corporate",
        path: "/",
        icon: <CorporateIcon />,
        children: [],
      },
      {
        id: 3,
        label: "Blog",
        path: "/",
        icon: <BlogIcon />,
        children: [],
      },
      {
        id: 3,
        label: "Social",
        path: "/",
        icon: <SocialIcon />,
        children: [],
      },
    ],
  },
];
