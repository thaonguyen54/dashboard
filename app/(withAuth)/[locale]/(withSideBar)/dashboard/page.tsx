import React from "react";

import DashboardTable from "./_components/table";
import { fetchProjects } from "./action";

const DEFAULT_PAGE = 1;
const DEFAULT_PAGE_SIZE = 10;

let page = DEFAULT_PAGE;
let pageSize = DEFAULT_PAGE_SIZE;

const Dashboard = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const filter = await searchParams;

  if(filter.page || filter.pageSize) {
    page = Number(filter.page) || DEFAULT_PAGE;
    pageSize = Number(filter.pageSize) || DEFAULT_PAGE_SIZE;
  }

  const responses = await fetchProjects(page, pageSize);

  const projects = responses.data;
  const pagination = responses.meta;

  return (
    <div className="w-full min-h-screen">
      <header className="flex justify-between items-center mb-4 mt-2 ml-4">
        <h1 className="text-2xl text-main font-bold">Dashboard</h1>
      </header>
      <DashboardTable projects={projects} meta={pagination} />
    </div>
  );
};

export default Dashboard;
