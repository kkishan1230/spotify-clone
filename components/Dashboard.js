import React from "react";
import Body from "./Body";
import Right from "./Right";
import Sidebar from "./Sidebar";

function Dashboard() {
  return (
    <main className="flex min-h-screen min-w-max bg-black lg:pb-24">
      <Sidebar />
      <Body />
      <Right />
    </main>
  );
}

export default Dashboard;
