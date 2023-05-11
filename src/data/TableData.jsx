import Katherine from "../assets/images/Katherine.png";
import Koray from "../assets/images/Koray.png";
import Natali from "../assets/images/Natali.png";
import Olivia from "../assets/images/Olivia .png";
import Orlando from "../assets/images/Orlando.png";

export const columns = [
  { header: "Manager", field: "manager" },
  { header: "Date", field: "date" },
  { header: "Amount", field: "amount" },
  { header: "Status", field: "status" },
];

export const data = [
  {
    manager: { name: "Koray Okumus", avatar: Koray },
    date: "Jun 24, 2022",
    amount: "$942.00",
    status: "In progress",
  },
  {
    manager: { name: "Natali Craig", avatar: Natali },
    date: "Mar 10, 2022",
    amount: "$881.00",
    status: "Rejected",
  },
  {
    manager: { name: "Olivia Rhye", avatar: Olivia },
    date: "Nov 10, 2022",
    amount: "$409.00",
    status: "Completed",
  },
  {
    manager: { name: "Orlando Diggs", avatar: Orlando },
    date: "Dec 20, 2022",
    amount: "$953.00",
    status: "Approved",
  },
  {
    manager: { name: "Katherine Moss", avatar: Katherine },
    date: "Jul 25, 2022",
    amount: "$907.00",
    status: "Pending",
  },
];
