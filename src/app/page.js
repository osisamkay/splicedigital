import React from "react";

import DashboardLayout from "../components/DashboardLayout/DashboardLayout.jsx";
import Header from "../components/DashboardLayout/Header";
import Navbar from "../components/DashboardLayout/Navbar.jsx";
import Details from "../components/Details";
import Sidebar from "../components/sideBar/Sidebar.jsx";
import Table from "../components/Table.jsx";
import { columns, data } from "../data/TableData.jsx";

function Dashboard() {
  return (
    <DashboardLayout>
      <Navbar />
      <Details />
      <Table columns={columns} data={data} />
    </DashboardLayout>
  );
}

export default Dashboard;
