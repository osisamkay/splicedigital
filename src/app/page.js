import React from "react";

import DashboardLayout from "../components/DashboardLayout";
import Details from "../components/Details";
import Header from "../components/Header";
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar";
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
