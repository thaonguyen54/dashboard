import React from "react";

import DashboardTable from "./_components/table";

// Fake data
const generateFakeData = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    project: "Sisyphus",
    domain: "sisyphus.com",
    lastAssessed: `${16 + (i % 15)} Jan 2022`,
    licenseStatus: "Active",
    licenseUse: ["Customer data", "Admin"],
  }));
};

const data = generateFakeData(10);

const Dashboard = () => {
  return (
    <div className="w-full min-h-screen">
      <header className="flex justify-between items-center mb-4 mt-2 ml-4">
        <h1 className="text-2xl text-main font-bold">Dashboard</h1>
      </header>
      <DashboardTable data={data} />
    </div>
  );
};

export default Dashboard;
